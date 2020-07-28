import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import PurpleBtn from "../PurpleBtn";
import ErrorMessage from "../ErrorMessage";
import { ExpenseInput } from "../customStyles";

import useStyles from "./editExpenseStyles";
import categories from "../../categories";

const FIND_EXPENSE = gql`
  query findExpense($id: Int!) {
    findExpense(id: $id) {
      id
      name
      price
      category
      desc
    }
  }
`;

export const EDIT_EXPENSE = gql`
  mutation editExpense(
    $name: String!
    $desc: String!
    $price: String!
    $category: String!
  ) {
    editExpense(name: $name, desc: $desc, price: $price, category: $category) {
      name
      id
      price
      desc
      category
    }
  }
`;

const EditExpense = ({ id }) => {
  console.log(id);
  const classes = useStyles();
  const [error, setError] = useState("");
  const [value, setValue] = useState({
    name: "",
    desc: "",
    price: "",
    category: "",
  });
  const [category, setCategory] = useState("");

  const { loading, data, refetch } = useQuery(FIND_EXPENSE, {
    variables: { id },
    onCompleted: ({ findExpense }) => {
      setValue({
        name: findExpense.name,
        price: findExpense.price,
        desc: findExpense.desc,
        category: findExpense.category,
      });
    },
  });

  // Refetch the useQuery when the expense ID updates
  useEffect(() => {
    if (id) refetch();
  }, [id]);

  const [editExpense] = useMutation(EDIT_EXPENSE, {
    onCompleted: (s) => console.log(s),
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await editExpense();
    } catch (error) {
      if (error.message.includes("Validation error")) {
        setError("All fields must be required");
      }
      setError(error.message);
    }
  };

  return (
    <Box className={classes.form}>
      <form onSubmit={submit}>
        <ExpenseInput
          required
          label="Expense name"
          variant="outlined"
          name="name"
          value={value.dec}
          onChange={handleChange}
        />
        <ExpenseInput
          required
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          name="desc"
          value={value.desc}
          onChange={handleChange}
        />
        <ExpenseInput
          required
          variant="outlined"
          select
          id="category"
          label="Categories"
          name="category"
          value={value.category}
          onChange={(e) => setCategory(e.target.value)}
          helperText="Please select a category"
        >
          {categories.map((category, i) => {
            return (
              <MenuItem value={category} key={i}>
                {category}
              </MenuItem>
            );
          })}
        </ExpenseInput>

        <ExpenseInput
          required
          id="outlined"
          label="Price"
          variant="outlined"
          type="number"
          name="price"
          value={value.price}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">£</InputAdornment>,
          }}
        />
        <PurpleBtn type="submit">Create Expense</PurpleBtn>
      </form>
    </Box>
  );
};

export default EditExpense;

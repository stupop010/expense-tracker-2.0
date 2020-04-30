import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";

import PurpleBtn from "../PurpleBtn";
import ErrorMessage from "../ErrorMessage";

import { ExpenseInput } from "../customStyles";
import useStyles from "./addExpenseStyles";
import categories from "../../categories";

export const CREATE_EXPENSE = gql`
  mutation createExpense(
    $name: String!
    $desc: String!
    $price: String!
    $category: String!
  ) {
    createExpense(
      name: $name
      desc: $desc
      price: $price
      category: $category
    ) {
      name
      id
    }
  }
`;

const AddExpense = () => {
  const [createExpense, { data, loading, error }] = useMutation(CREATE_EXPENSE);
  const [value, setValue] = useState({
    name: "",
    desc: "",
    price: "",
  });
  const [category, setCategory] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await createExpense({ variables: { ...value, category } });
    } catch (error) {
      console.log(error);
    }
    console.log(value);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h2">Create a new expense</Typography>
      {error && <ErrorMessage error={error} />}
      <Box className={classes.form}>
        <form onSubmit={submit}>
          <ExpenseInput
            id="outlined"
            label="Expense name"
            variant="outlined"
            name="name"
            value={value.name}
            onChange={handleChange}
          />
          <ExpenseInput
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            name="desc"
            value={value.desc}
            onChange={handleChange}
          />
          <ExpenseInput
            variant="outlined"
            select
            id="category"
            label="Categories"
            name="category"
            value={category}
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
            id="outlined"
            label="Price"
            variant="outlined"
            type="number"
            name="price"
            value={value.price}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">£</InputAdornment>
              ),
            }}
          />
          <PurpleBtn type="submit">Create Expense</PurpleBtn>
        </form>
      </Box>
    </Box>
  );
};

export default AddExpense;

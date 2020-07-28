import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

import { ExpenseContext } from "../../context/expenseContext/ExpenseState";

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
      price
      desc
      category
    }
  }
`;

const AddExpense = () => {
  const { addContextExpense } = useContext(ExpenseContext);

  const [createExpense] = useMutation(CREATE_EXPENSE, {
    onCompleted: ({ createExpense }) => {
      addContextExpense(createExpense);
      setCategory("");
      setError("");
      setValue({ name: "", desc: "", price: "" });
      setOpen(true);
    },
  });

  const [value, setValue] = useState({
    name: "",
    desc: "",
    price: "",
  });
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
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
      if (error.message.includes("Validation error")) {
        setError("All fields must be required");
      }
      setError(error.message);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h2">Create a new expense</Typography>
      {error && <ErrorMessage error={error} />}
      <Box className={classes.form}>
        <form onSubmit={submit}>
          <ExpenseInput
            required
            id="outlined"
            label="Expense name"
            variant="outlined"
            name="name"
            value={value.name}
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
            required
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
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        TransitionComponent={(props) => <Slide {...props} direction="up" />}
        message="Expense Added."
      />
    </Box>
  );
};

export default AddExpense;

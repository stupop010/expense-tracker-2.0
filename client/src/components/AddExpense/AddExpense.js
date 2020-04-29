import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";

import { ExpenseInput, CategoriesSelect } from "../customStyles";
import Selects from "./select";
import useStyles from "./addExpenseStyles";

const AddExpense = () => {
  const classes = useStyles();

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h2">Create a new expense</Typography>
      <Box className={classes.form}>
        <form>
          <TextField id="outlined" label="Expense name" variant="outlined" />
          <TextField
            label="Description"
            multiline
            rows={4}
            variant="outlined"
          />
          <Select />
        </form>
      </Box>
    </Box>
  );
};

const options = (
  <>
    <option aria-label="None" value="" />
    <option value={10}>Housing</option>
    <option value={20}>Transportation</option>
    <option value={30}>Food/Drink</option>
    <option value={40}>Utilities</option>
    <option value={50}>Insurance</option>
    <option value={60}>Medical & Healthcare</option>
    <option value={70}>Saving, Investing, & Debt Payments</option>
    <option value={80}>Personal Spending</option>
    <option value={90}>Recreation & Entertainment</option>
    <option value={100}>Miscellaneous</option>
  </>
);

export default AddExpense;

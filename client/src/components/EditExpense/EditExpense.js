import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";

import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";

import { ExpenseContext } from "../../context/expenseContext/ExpenseState";

import { EDIT_EXPENSE } from "../../graphQL/mutations";
import { FIND_EXPENSE } from "../../graphQL/querys";

import ErrorMessage from "../ErrorMessage";
import { ExpenseInput } from "../customStyles";

import useStyles from "./editExpenseStyles";
import categories from "../../categories";

const initialState = {
  name: "",
  desc: "",
  price: "",
};

const EditExpense = ({ id, setEditModal }) => {
  const { editContextExpense } = useContext(ExpenseContext);
  const classes = useStyles();
  const [error, setError] = useState("");
  const [value, setValue] = useState(initialState);
  const [category, setCategory] = useState("");

  const { refetch } = useQuery(FIND_EXPENSE, {
    variables: { id },
    onCompleted: ({ findExpense }) => {
      setValue({
        name: findExpense.name,
        price: findExpense.price,
        desc: findExpense.desc,
      });
      setCategory(findExpense.category);
    },
  });

  // Refetch the useQuery when the expense ID updates
  useEffect(() => {
    if (id) refetch();
  }, [id, refetch]);

  const [editExpense] = useMutation(EDIT_EXPENSE, {
    onCompleted: ({ editExpense }) => {
      editContextExpense(editExpense);
      setError("");
      setEditModal(false);
    },
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
      await editExpense({ variables: { ...value, category, id } });
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
        {error && <ErrorMessage error={error} />}
        <ExpenseInput
          required
          label="Expense name"
          variant="outlined"
          name="name"
          value={value.name}
          onChange={handleChange}
          autoComplete="off"
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
          autoComplete="off"
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
          autoComplete="off"
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
          autoComplete="off"
          InputProps={{
            startAdornment: <InputAdornment position="start">£</InputAdornment>,
          }}
        />
        <div className={classes.btn}>
          <button type="submit" className={classes.purpleBtn}>
            Confirm
          </button>
          <button
            type="button"
            className={classes.cancelBtn}
            onClick={() => setEditModal(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </Box>
  );
};

EditExpense.propTypes = {
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  setEditModal: PropTypes.bool.isRequired,
};

export default EditExpense;

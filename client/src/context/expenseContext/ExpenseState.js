import React, { useReducer, createContext } from "react";

import ExpenseReducer from "./ExpenseReducer";

const initialState = {
  expenses: [],
};

export const ExpenseContext = createContext(initialState);

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  const fetchExpenses = (expenses) => {
    dispatch({ type: "FETCH_EXPENSES", payload: expenses });
  };

  const deleteContextExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        fetchExpenses,
        deleteContextExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { ExpenseContext } from "../context/expenseContext/ExpenseState";
import { UserContext } from "../context/userContext/UserState";

const Logout = () => {
  const { logoutUser } = useContext(UserContext);
  const { resetExpense } = useContext(ExpenseContext);

  useEffect(() => {
    logoutUser();
    resetExpense();

    localStorage.removeItem("token");
  }, [logoutUser, resetExpense]);

  return <Redirect to="/" />;
};

export default Logout;

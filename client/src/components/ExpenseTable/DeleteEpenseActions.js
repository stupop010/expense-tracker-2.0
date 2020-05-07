import React from "react";

import useStyles from "./ExpenseTableStyles";

const DeleteExpenseActions = ({ cancel, confirm }) => {
  const classes = useStyles();

  return (
    <div className={classes.deleteActions}>
      <button onClick={cancel}>Cancel</button>
      <button onClick={confirm}>Confirm</button>
    </div>
  );
};

export default DeleteExpenseActions;

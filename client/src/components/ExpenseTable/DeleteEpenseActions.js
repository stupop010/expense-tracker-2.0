import React from "react";
import PropTypes from "prop-types";

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

DeleteExpenseActions.propTypes = {
  cancel: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
};

export default DeleteExpenseActions;

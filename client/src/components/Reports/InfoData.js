import React, { useEffect, useState } from "react";

import useStyles from "./reportsStyles";

const InfoData = ({ data }) => {
  const classes = useStyles();
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    let total = 0;

    data.map((i) => (total += i.value));

    setTotalExpense(
      total.toLocaleString(undefined, { minimumFractionDigits: 2 })
    );
  }, [data]);

  return (
    <div className={classes.infoContainer}>
      <h3>Total Expenses: £{totalExpense}</h3>
      <ul>
        {data.map((e) => {
          return (
            <li>
              - {e.category}: £
              {e.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InfoData;

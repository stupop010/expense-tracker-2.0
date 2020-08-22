import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import categories from "../../categories";
import useStyles from "./reportsStyles";

import Pie from "./Pie";
import DashboardBreadcrumbs from "../DashboardBreadcrumbs";
import ReportCalender from "../ReportCalender";

const Reports = ({ expenses }) => {
  console.log(expenses);
  const [pieData, setPieData] = useState([]);
  const { pathname } = useLocation();
  const classes = useStyles();

  useEffect(() => {
    const data = [];
    categories.map((i) => data.push({ category: i, value: 0 }));
    for (let i = 0; i < expenses.length; i++) {
      for (let y = 0; y < data.length; y++) {
        if (expenses[i].category === data[y].category) {
          data[y].value += +expenses[i].price;
        }
      }
    }
    const removeZeros = data.filter((d) => d.value !== 0);
    setPieData(removeZeros);
  }, [expenses]);

  return (
    <div>
      <div className={classes.headingContainer}>
        <DashboardBreadcrumbs pathname={pathname} />
        <ReportCalender />
      </div>
      <Pie data={pieData} width={220} height={220} />
    </div>
  );
};

export default Reports;

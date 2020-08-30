import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useStyles from "./reportsStyles";

import Pie from "./Pie";
import BarChart from "./BarChart";
import InfoData from "./InfoData";
import DashboardBreadcrumbs from "../DashboardBreadcrumbs";
import ReportCalender from "../ReportCalender";

import { categoryDataHelper, barDataHelper } from "../../d3Helpers/d3Helper";

const Reports = ({ expenses }) => {
  const [dates, setDates] = useState("This Year");
  const [categoryData, setCategoryData] = useState([]);
  const [barData, setBarData] = useState([]);
  const { pathname } = useLocation();
  const classes = useStyles();

  useEffect(() => {
    setCategoryData(categoryDataHelper(expenses));
    setBarData(barDataHelper(expenses));
  }, [expenses]);
  return (
    <div>
      <div className={classes.headingContainer}>
        <DashboardBreadcrumbs pathname={pathname} />
        <ReportCalender dates={dates} setDates={setDates} />
      </div>
      <h1 className={classes.dashboardTitle}>Expenses from {dates}</h1>
      <div className={classes.dataContainer}>
        {expenses.length > 0 ? (
          <>
            <BarChart data={barData} />
            <InfoData data={categoryData} />
            <Pie data={categoryData} width={320} height={320} />
          </>
        ) : (
          <div>
            <h2>No data for this period.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;

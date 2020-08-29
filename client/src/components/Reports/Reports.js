import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useStyles from "./reportsStyles";

import Pie from "./Pie";
import BarChart from "./BarChart";
import DashboardBreadcrumbs from "../DashboardBreadcrumbs";
import ReportCalender from "../ReportCalender";

import { pieDataHelper, barDataHelper } from "../../d3Helpers/d3Helper";

const Reports = ({ expenses }) => {
  const [pieData, setPieData] = useState([]);
  const [barData, setBarData] = useState([]);
  const { pathname } = useLocation();
  const classes = useStyles();

  useEffect(() => {
    setPieData(pieDataHelper(expenses));
    setBarData(barDataHelper(expenses));
  }, [expenses]);

  return (
    <div>
      <div className={classes.headingContainer}>
        <DashboardBreadcrumbs pathname={pathname} />
        <ReportCalender />
      </div>
      <Pie data={pieData} width={220} height={220} />
      <BarChart data={barData} width={220} height={220} />
    </div>
  );
};

export default Reports;

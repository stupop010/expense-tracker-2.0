import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import categories from "../../categories";
// import useStyles from "./reportsStyles";

import Pie from "./Pie";
import DashboardBreadcrumbs from "../DashboardBreadcrumbs";

const Reports = ({ expenses }) => {
  const [pieData, setPieData] = useState([]);
  const { pathname } = useLocation();

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
    setPieData(data);
  }, [expenses]);

  return (
    <div>
      <DashboardBreadcrumbs pathname={pathname} />
      <Pie data={pieData} width={220} height={220} />
    </div>
  );
};

export default Reports;

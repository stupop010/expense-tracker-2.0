import React, { useEffect, useState } from "react";

import categories from "../../categories";

import Pie from "./Pie";

const Reports = ({ expenses }) => {
  const [pieData, setPieData] = useState([]);

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
      <Pie data={pieData} width={250} height={250} />
    </div>
  );
};

export default Reports;

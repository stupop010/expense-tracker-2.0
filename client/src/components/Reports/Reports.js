import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import categories from "../../categories";

const width = 300; //width
const height = 300; //height
const r = 100; //radius

const colorScale = d3
  .scaleOrdinal()
  .domain(categories)
  .range(d3.schemeCategory10);

const data = [
  { label: "one", value: 20 },
  { label: "two", value: 50 },
  { label: "three", value: 30 },
];

const Reports = () => {
  console.log(d3);
  const inputEl = useRef(null);

  useEffect(() => {
    var vis = d3
      .select(inputEl.current)
      .attr("width", width) //set the width and height of our visualization (these will be attributes of the <svg> tag
      .attr("height", height)
      .append("g") //make a group to hold our pie chart
      .attr("transform", "translate(" + r + "," + r + ")"); //move the center of the pie chart from 0, 0 to
  }, []);

  return (
    <div>
      <svg ref={inputEl}>reports</svg>
    </div>
  );
};

export default Reports;

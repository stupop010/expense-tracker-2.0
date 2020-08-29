import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

import categories from "../../categories";

const BarChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {}, [data]);
  return (
    <div>
      <svg ref={ref} width="800" height="600"></svg>
    </div>
  );
};

// const colorScale = d3
//       .scaleOrdinal()
//       .domain(categories)
//       .range(d3.schemeCategory10);

//     let svg = d3.select(ref.current),
//       margin = 200,
//       width = svg.attr("width") - margin,
//       height = svg.attr("height") - margin;

//     svg.exit().remove();

//     let xScale = d3.scaleBand().range([0, width]).padding(0.4),
//       yScale = d3.scaleLinear().range([height, 0]);

//     let chart = svg
//       .append("g")
//       .attr("transform", "translate(" + 100 + "," + 100 + ")");

//     xScale.domain(data.map((d) => d.month));
//     yScale.domain([0, d3.max(data, (d) => d.value)]);

//     chart
//       .append("g")
//       .classed("chart", true)
//       .attr("transform", "translate(0," + height + ")")
//       .call(d3.axisBottom(xScale));

//     chart
//       .append("g")
//       .attr("class", "y-axis")
//       .call(
//         d3
//           .axisLeft(yScale)
//           .tickFormat(function (d) {
//             return "£" + d;
//           })
//           .ticks(10)
//       )
//       .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 10)
//       .attr("dy", "-5.1em")
//       .attr("text-anchor", "end")
//       .attr("stroke", "black")
//       .text("value");

//     const c = svg.selectAll(".bars").data(data);

//     c
//       //   .selectAll(".bar")
//       .enter()
//       //   .data(data)
//       //   .merge(data)
//       .append("rect")
//       .attr("class", "bar")
//       .attr("x", (d) => xScale(d.month))
//       .attr("y", (d) => yScale(d.value))
//       .attr("width", xScale.bandwidth())
//       .attr("height", (d) => height - yScale(d.value));
export default BarChart;

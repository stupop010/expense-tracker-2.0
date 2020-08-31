import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  select,
  axisBottom,
  scaleLinear,
  scaleBand,
  max,
  axisLeft,
  event,
} from "d3";

import Tooltip from "./Tooltip";

import useStyles from "./reportsStyles";

const BarChart = ({ data }) => {
  const classes = useStyles();
  const [tooltip, setTooltip] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    if (!data.length > 0) return;
    const svg = select(ref.current),
      width = svg.attr("width"),
      height = svg.attr("height");

    const yScale = scaleLinear()
      .domain([
        0,
        // round the max number divide by 100 up and then times that with 100
        // get the closest round 100th
        Math.ceil(max(data, (d) => d.value + d.value / 4) / 100) * 100,
      ])
      .range([height, 0]);

    const xScale = scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.2);

    const xAxis = axisBottom(xScale);

    svg
      .select(".x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

    const yAxis = axisLeft(yScale)
      .ticks(10)
      .tickFormat((d) => "£" + d);

    svg.select(".y-axis").call(yAxis);

    svg.select(".grid").call(axisLeft(yScale).tickSize(-width).tickFormat(""));

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.month))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .on("mousemove", (d) =>
        setTooltip({
          toggle: true,
          y: event.y,
          x: event.x,
          value: d.value,
        })
      )
      .on("mouseout", (d) => setTooltip({ toggle: false }));
  }, [data]);

  return (
    <div className={classes.barChart}>
      <svg ref={ref} width="800" height="600" style={{ overflow: "visible" }}>
        <g className="x-axis" />
        <g className="y-axis" />
        <g className="grid" />
      </svg>
      <Tooltip toggle={tooltip}>
        {tooltip.value ? <>Total value: £{tooltip.value}</> : null}
      </Tooltip>
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BarChart;

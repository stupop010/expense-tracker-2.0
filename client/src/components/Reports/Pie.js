import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

import useStyles from "./reportsStyles";

import categories from "../../categories";
import Tooltip from "./Tooltip";

const Pie = ({ data, width, height }) => {
  const classes = useStyles();
  const [toggleTooltip, setToggleTooltip] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    const colorScale = d3
      .scaleOrdinal()
      .domain(categories)
      .range(d3.schemeCategory10);

    d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .classed("chart2", true);

    const arcs = d3.pie().value((d) => d.value)(data);

    const path = d3
      .arc()
      .outerRadius(width / 2 - 20)
      .innerRadius(0);

    const total = d3.sum(data, (d) => d.value);

    const update = d3.select(".chart2").selectAll(".arc2").data(arcs);

    update
      .enter()
      .append("path")
      .classed("arc", true)
      .attr("fill", (d) => colorScale(d.data.category))
      .attr("stroke", "black")
      .attr("d", path)
      .on("mousemove", (d) => {
        setToggleTooltip({
          toggle: true,
          y: d3.event.y,
          x: d3.event.x,
          info: d.data,
          percent: d3.format(".1%")(d.value / total),
        });
      })
      .on("mouseout", (d) => {
        setToggleTooltip({ toggle: false });
      });
  }, [data, height, width]);

  return (
    <>
      <div className={classes.pieChart}>
        <svg ref={ref}></svg>
      </div>
      <Tooltip toggle={toggleTooltip}>
        {toggleTooltip.info ? (
          <>
            {toggleTooltip.info.category}: £{toggleTooltip.info.value}
            <span className={classes.tooltipSpan}>{toggleTooltip.percent}</span>
          </>
        ) : null}
      </Tooltip>
    </>
  );
};

export default Pie;

import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

import categories from "../../categories";
import Tooltip from "./Tooltip";

const Pie = ({ data, width, height }) => {
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
      .outerRadius(width / 2 - 10)
      .innerRadius(1);

    const update = d3.select(".chart2").selectAll(".arc2").data(arcs);

    update.exit().remove();

    update
      .enter()
      .append("path")
      .classed("arc", true)
      .merge(update)
      .attr("fill", (d) => colorScale(d.data.category))
      .attr("stroke", "black")
      .attr("d", path)
      .on("mousemove", function (d) {
        setToggleTooltip({
          toggle: true,
          y: d3.event.y,
          x: d3.event.x,
          info: d.data,
        });
      })
      .on("mouseout", function (d) {
        setToggleTooltip({ toggle: false });
      });
  }, [data, height, width]);

  return (
    <>
      <svg ref={ref}></svg>
      <Tooltip toggle={toggleTooltip} />
    </>
  );
};

export default Pie;

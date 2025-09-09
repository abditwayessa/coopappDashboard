import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const PieChart = ({ data, colors, width = 300, height = 300 }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const radius = Math.min(width, height) / 2;

    // Create a color scale
    const colorScale = d3.scaleOrdinal(colors);

    // Create pie data
    const pie = d3.pie().value((d) => d.value);
    const pieData = pie(data);

    // Create arc generator for the pie slices
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    // Create chart group
    const chartGroup = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Draw pie chart
    chartGroup
      .selectAll("path")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => colorScale(i))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2);
  }, [data, colors, width, height]);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Render Pie Chart */}
      <svg ref={svgRef}></svg>

      {/* Render Labels Below the Pie Chart */}
      <div style={{ marginTop: "20px" }}>
        {data.map((d, i) => (
          <div
            key={i}
            style={{
              display: "inline-block",
              margin: "5px 10px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: colors[i],
                display: "inline-block",
                marginRight: "5px",
              }}
            ></div>
            <span>
              {d.label}: {d.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;

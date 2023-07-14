import React, { useState } from "react";
import ECharts from "echarts-for-react";

const LineChart = () => {
  const [options, setOptions] = useState({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  });

  console.log("setOptions : ", setOptions);
  return (
    <ECharts
      option={options}
      opts={{ renderer: "svg", width: "auto", height: "auto" }}
    />
  );
};

export default LineChart;

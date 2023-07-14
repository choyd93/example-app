import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const option = {
    title: {
      text: "운동 횟수",
    },
    tooltip: {},
    legend: {
      data: ["일주일"],
    },
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {},
    series: [
      {
        name: "운동 횟수",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20, 3],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: 400 }}
      opts={{ renderer: "svg" }}
    />
  );
};

export default BarChart;

import React, { useCallback, useState } from "react";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const option = {
    title: {
      text: "Referer of a Website",
      subtext: "Fake Data",
      x: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["Search Engine", "Direct", "Email", "Union Ads", "Video Ads"],
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "Search Engine" },
          { value: 310, name: "Direct" },
          { value: 234, name: "Email" },
          { value: 135, name: "Union Ads" },
          { value: 1548, name: "Video Ads" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const [count, setCount] = useState(0);

  const onChartReady = useCallback((echarts: any) => {
    console.log("echarts is ready", echarts);
  }, []);

  function onChartClick(param: any, echarts: any) {
    console.log(param, echarts);
    setCount(count + 1);
  }

  function onChartLegendselectchanged(param: any, echarts: any) {
    console.log(param, echarts);
  }

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: 400 }}
        onChartReady={onChartReady}
        onEvents={{
          click: onChartClick,
          legendselectchanged: onChartLegendselectchanged,
        }}
      />
      <div>Click Count: {count}</div>
      <div>Open console, see the log detail.</div>
    </>
  );
};

export default PieChart;

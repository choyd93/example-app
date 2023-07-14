import React from "react";
import Header from "@components/layout/Header";
import { ChartWrap, Wrap } from "@pages/Chart/styles";
import styled from "styled-components";
import LineChart from "@components/Charts/LineChart";
import PieChart from "@components/Charts/PieChart";
import BarChart from "@components/Charts/BarChart";

const EChartsWrap = styled.div`
  padding: 0 40px;
  margin-bottom: 100px;
`;

const PieChartWrap = styled.div`
  padding: 0 100px;
  margin-bottom: 100px;
`;
const Chart = () => {
  return (
    <>
      <Header />
      <Wrap>
        <ChartWrap>파이 차트</ChartWrap>
        <PieChartWrap>
          <PieChart />
        </PieChartWrap>
        <ChartWrap>막대 차트</ChartWrap>
        <PieChartWrap>
          <BarChart />
        </PieChartWrap>
        <ChartWrap>꺾은 선 차트</ChartWrap>
        <EChartsWrap>
          <LineChart />
        </EChartsWrap>
      </Wrap>
    </>
  );
};

export default Chart;

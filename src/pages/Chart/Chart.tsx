import React from 'react';
import Header from '@components/layout/Header';
import { ChartWrap, Wrap } from '@pages/Chart/styles';
import styled from 'styled-components';
import LineChart from '@components/Charts/LineChart';
import PieChart from '@components/Charts/PieChart';
import BarChart from '@components/Charts/BarChart';
import ScatterChart from '@components/Charts/ScatterChart';

const EChartsWrap = styled.div`
    padding: 0 40px;
    margin-bottom: 100px;
`;

const PieChartWrap = styled.div`
    padding: 0 100px;
    margin-bottom: 100px;
`;
const Chart = () => {
    const sampling: number[][] = [];

    for (let i = 0; i < 200; i += 1) {
        sampling.push([i, Math.random() * i * 4]);
    }

    const height = 400;
    const width = height * 1.6; // golden ratio

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
                <ChartWrap>Scatter</ChartWrap>
                <EChartsWrap>
                    <ScatterChart
                        seriesArray={[{ name: 'Universities', data: sampling }]}
                        width={width}
                        height={height}
                        xLabel="Hungry Students"
                        yLabel="Hot Pockets Eaten"
                        title="Hot Pockets Eaten By Hungry Students"
                        subtext="Sampled from 200 universities"
                        showZoom
                    />
                </EChartsWrap>
            </Wrap>
        </>
    );
};

export default Chart;

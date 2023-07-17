import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface ChartProps {
    seriesArray: { name: string; data: number[][] }[];
    height: number;
    width: number;
    xLabel?: string;
    yLabel?: string;
    title?: string;
    subtext?: string;
    showZoom?: boolean;
}

const ChartSettings = {
    defaultOptions: {
        toolbox: {
            show: true,
            showTitle: true,
            feature: {
                mark: {
                    show: true,
                    title: {
                        mark: 'Mark Tool',
                        markUndo: 'Undo Last Mark',
                        markClear: 'Clear Marks',
                    },
                },
                dataZoom: {
                    show: true,
                    title: {
                        dataZoom: 'Range Zoom',
                        dataZoomReset: 'Undo Zoom',
                    },
                },
                dataView: {
                    show: true,
                    title: 'Data View',
                    lang: ['Data View', 'Close', 'Refresh'],
                },
                magicType: {
                    show: false,
                },
                restore: { show: true, title: 'Restore' },
                saveAsImage: {
                    show: true,
                    title: 'Save as Image',
                    lang: ['Click to Save'],
                },
            },
        },
    },
    theme: {
        textStyle: {
            fontFamily: 'Helvetica Neue, Arial, Verdana, sans-serif',
        },
    },
};
const ScatterChart: React.FC<ChartProps> = ({
    seriesArray,
    height,
    width,
    xLabel = '',
    yLabel = '',
    title = '',
    subtext = '',
    showZoom = false,
}) => {
    const chartRef = useRef<HTMLDivElement>(null);

    const makeDataSeries = () => {
        return seriesArray.map(series => {
            return {
                name: series.name,
                type: 'scatter',
                data: series.data,
            };
        });
    };
    const makeChartOptions = () => {
        const echartSeriesArray = makeDataSeries();
        const options: echarts.EChartsOption = {
            title: {
                text: title,
                subtext,
            },
            series: echartSeriesArray,
            xAxis: [
                {
                    name: xLabel,
                    type: 'value',
                },
            ],
            yAxis: [
                {
                    name: yLabel,
                    type: 'value',
                },
            ],
            dataZoom: {
                show: showZoom,
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        name: `scatter_${xLabel}_${yLabel}`,
                        type: 'png',
                    },
                },
            },
            legend: {
                data: echartSeriesArray.map(series => series.name),
                orient: 'vertical',
                x: 'right',
                y: 'center',
            },
            grid: {
                borderColor: '#eee',
                x: 80,
                y: 60,
                x2: 120,
                y2: 60,
            },
        };
        return options;
    };

    const updateChart = (chart: echarts.ECharts) => {
        const newChartOptions = makeChartOptions();
        chart.setOption(newChartOptions);
    };

    const createChart = () => {
        const chartDom = chartRef.current;
        if (!chartDom) return;

        const myChart = echarts.init(chartDom, ChartSettings.theme);
        myChart.setOption(ChartSettings.defaultOptions);
        updateChart(myChart);
    };

    useEffect(() => {
        const chart = echarts.init(chartRef.current!);
        createChart();
        return () => {
            chart.dispose();
        };
    }, []);

    useEffect(() => {
        const chart = echarts.getInstanceByDom(chartRef.current!);
        if (chart) {
            updateChart(chart);
        }
    }, [seriesArray, xLabel, yLabel, title, subtext, showZoom]);

    return <div ref={chartRef} style={{ height, width, margin: '0 auto' }} />;
};

export default ScatterChart;

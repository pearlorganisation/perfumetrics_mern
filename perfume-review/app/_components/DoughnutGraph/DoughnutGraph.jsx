"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const PieChart = ({ mainAccords }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const data = {
        labels: mainAccords.map(accord => accord.name),
        datasets: [{
            label: 'Main Accords',
            data: mainAccords.map(accord => accord.percentage),
            backgroundColor: mainAccords.map(accord => accord.color),
        }]
    };

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(myChartRef, {
            type: 'pie', // Change from 'doughnut' to 'pie'
            data: data,
            options: {
                plugins: {
                    datalabels: {
                        color: '#fff',
                        anchor: 'end',
                        align: 'start',
                        offset: -10,
                        borderWidth: 2,
                        borderColor: '#fff',
                        borderRadius: 25,
                        backgroundColor: `rgba(245, 40, 145, 0.7)`,
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value, context) => {
                            return `${context.chart.data.labels[context.dataIndex]} ${value}%`;
                        }
                    }
                }
            },
            plugins: [ChartDataLabels]
        });
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [mainAccords]);

    return (
        <div>
            <canvas ref={chartRef} style={{ width: '300px', height: '200px' }} />
        </div>
    );
};

export default PieChart;

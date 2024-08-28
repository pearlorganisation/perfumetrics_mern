"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const PieChart = ({ mainAccords }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const data = {
        // labels: mainAccords.map(accord => accord.name),
        datasets: [{
            label: 'Main Accords',
            data: mainAccords?.map(accord => accord.percentage),
            backgroundColor: mainAccords?.map(accord => accord.color),
        }]
    };

    console.log("mainAccords",mainAccords);

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
                            // return `${context.chart.data.labels[context.dataIndex]} ${value}%`;
                        }
                    }
                }
            },
            // plugins: [ChartDataLabels]
        });
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [mainAccords]);

    return (
        <div className='p-2 w-full'>
            <div className='max-w-[20rem] mx-auto'>
                <h1 className='text-center font-bold'>Main Accords </h1>
                <canvas ref={chartRef} style={{ width: "300px", height: "300px" }} />
            </div>
            <div className="flex flex-wrap justify-center gap-3 items-center  py-8">
                {
                    mainAccords?.map((el) => {
                        return <div
                            key={el._id}
                            style={{
                                backgroundColor: `${el?.color}`
                            }}
                            className='bg-pink-500 px-3 py-1 text-center rounded-sm text-white min-w-[6rem]'>
                            {el?.name}
                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default PieChart;

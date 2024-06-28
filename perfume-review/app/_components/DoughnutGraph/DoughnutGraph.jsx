import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const DoughnutGraph = () => {
    const chartRef = useRef(null)
    const chartInstance = useRef(null)
    const data = {
        labels: [
            'Fruity',
            'Fresh',
            'Sweet',
            `Floral`,
            `Citrus`,
            `Mens`,
            `Women's`
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [150, 50, 100, 45, 65, 110],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(255, 105, 6)',
                'rgb(255, 5, 6)',
                'rgb(54, 162, 135)',
                'rgb(55, 205, 86)',


            ],
            hoverOffset: 4
        }]
    };
    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d')
        chartInstance.current = new Chart(myChartRef, {
            type: 'doughnut',
            data: data,
        })
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy()
            }
        }
    }, [])

    return (
        <div>
            <canvas ref={chartRef} style={{ width: '300px', height: '200px' }} />
        </div >
    )
}

export default DoughnutGraph
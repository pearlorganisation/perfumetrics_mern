"use client"
import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const DoughnutGraph = ({ mainAccords }) => {
    const chartRef = useRef(null)
    const chartInstance = useRef(null)

    const data = {
        labels: mainAccords.map(accord => accord.name),
        datasets: [{
            label: 'Main Accords',
            data: mainAccords.map(accord => accord.percentage),
            backgroundColor: mainAccords.map(accord => accord.color),
            hoverOffset: 4
        }]
    }
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
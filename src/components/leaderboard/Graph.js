
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import "./Leaderboard.css"
export default function Graph({Mdata}) {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: Mdata.map(entry => entry.name),
            datasets: [
              {
                label: 'Points',
                data: Mdata.map(entry => entry.points),
                backgroundColor: [
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                  'rgb(255, 159, 64)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)'
                ],
                borderWidth: 1
              }
            ]
          };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} className="chart"/>
        </div>
    )
}
        
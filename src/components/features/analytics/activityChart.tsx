import React from "react";
import classNames from "classnames/bind";
import * as styles from "./analyticsContainer.scss";
import { Bar } from 'react-chartjs-2';

const cx = classNames.bind(styles)


const ActivityChart = (): JSX.Element => {

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: "Activity",
                data: [50, 10, 95, 40, 30, 60, 50],
                fill: true,
                backgroundColor: "rgb(51, 153, 255)",
                borderColor: "rgb(51, 153, 255)"
            }
        ],
    }

    const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }
            }],
            yAxes: [{
                gridLines: {
                    drawOnChartArea: false
                },
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 50
                }
            }]
        }
    }

    return (
        <div className={cx("small-chart")}>
            <Bar data={data} options={options} />
        </div>
    )

}

export default ActivityChart;
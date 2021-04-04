import React from "react";
import classNames from "classnames/bind";
import * as styles from "./analyticsContainer.scss";
import { Line } from "react-chartjs-2";

const cx = classNames.bind(styles)


const HeartRateChart = (): JSX.Element => {

    const data = {
        labels: ["6AM", "10AM", "11AM", "12PM", "1PM", "2PM"],
        datasets: [
          {
            label: "Heart Rate",
            fill: false,
            data: [50, 63, 85, 91, 74, 65],
            backgroundColor: "rgb(204, 51, 0)",
            borderColor: "rgb(204, 51, 0)"
          }
        ]
      };

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
                    min: 50,
                    max: 150,
                    stepSize: 50
                }
            }]
        }
    }

    return (
      <div className={cx("small-chart")}>
         <Line data={data} options={options} />
      </div>
    )

}

export default HeartRateChart;
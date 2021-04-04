import React from "react";
import classNames from "classnames/bind";
import * as styles from "./analyticsContainer.scss";
import { Line } from "react-chartjs-2";

const cx = classNames.bind(styles)


const BoodyTemperatureChart = (): JSX.Element => {

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "Body Temperature",
            data: [36, 37, 35, 33, 39, 38],
            fill: true,
            backgroundColor: "rgba(255, 32, 37, 1)",
            borderColor: "rgba(255, 32, 37, 1)"
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
                  beginAtZero: true,
                  min: 30,
                  max: 40,
                  stepSize: 5
              }
          }]
      }
  }
    return (
      <div className={cx("small-chart")}>
      <Line data={data}  options={options}/>
  </div>
    )

}

export default BoodyTemperatureChart;
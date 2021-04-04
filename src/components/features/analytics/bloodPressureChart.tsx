import React from "react";
import classNames from "classnames/bind";
import * as styles from "./analyticsContainer.scss";
import { Bar } from "react-chartjs-2";

const cx = classNames.bind(styles)


const BloodPressureChart = (): JSX.Element => {

  const data = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
          {
              label: "Blood Pressure",
              data: [50, 110, 95, 140, 130, 80, 90],
              fill: true,
              backgroundColor: [
                "rgb(255,127,80)",
                "rgb(255,99,71)",
                "rgb(255,69,0)",
                "rgb(255,215,0)",
                "rgb(255,165,0)",
                "rgb(255,140,0)",
                "rgb(255,127,80)",
              
              ],
              borderColor: "rgb(255,140,0)"
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
                  min: 50,
                  max: 150,
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
export default BloodPressureChart;
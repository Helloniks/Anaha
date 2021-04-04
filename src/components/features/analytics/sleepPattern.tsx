import React from "react";
import classNames from "classnames/bind";
import * as styles from "./analyticsContainer.scss";
import { Line } from "react-chartjs-2";

const cx = classNames.bind(styles)


const SleepParttern = (): JSX.Element => {

  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Sleep Pattern",
        data: [36, 37, 35, 33, 39, 38],
        fill: true,
        backgroundColor: "rgba(123, 200, 49, 1)",
        borderColor: "rgba(123, 200, 49, 1)"
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
          stepSize: 5,
          callback: function (label: any, index: any, labels: any) {
            switch (label) {
              case 40:
                return 'Deep';
              case 35:
                return 'Light';
              case 30:
                return 'Awake';
            }
          }
        }
      }]
    }
  }
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )

}

export default SleepParttern;
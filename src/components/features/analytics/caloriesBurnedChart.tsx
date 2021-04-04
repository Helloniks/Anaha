import React from "react";
import classNames from "classnames/bind";
import * as styles from "./analyticsContainer.scss";
import { Doughnut } from "react-chartjs-2";

const cx = classNames.bind(styles)


const CaloriesBurnedChart = (): JSX.Element => {

    const data = {
      labels: ["Calories Burned"],
        datasets: [{
          label: ["Calories Burned", ""],
          data: [230, 500],
          backgroundColor: [
            'rgba(115, 142, 255, 1)',
            'rgb(220,220,220)',
          ],
          hoverOffset: 4
        }]
      };
    return (
      <div>
      <Doughnut data={data} />
  </div>
    )

}

export default CaloriesBurnedChart;
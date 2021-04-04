import React from "react";
import classNames from "classnames/bind";
import * as styles from "./analyticsContainer.scss";
import { Line } from "react-chartjs-2";

const cx = classNames.bind(styles)


const HealthConditionChart = (): JSX.Element => {

  const data = {
    labels: ["Weeka", "Week2", "Week3", "Week4", "Week5", "Week6"],
    datasets: [
        {
            label: "Health Conditions",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
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
            }
        }]
    }
}

return (
    <div>
        <Line data={data} options={options}/>
    </div>
)

}

export default HealthConditionChart;
import React from "react";
import classNames from "classnames/bind";
import * as styles from "./analyticsContainer.scss";
import ActivityChart from "./activityChart";
import HeartRateChart from "./heartRateChart";
import BloodPressureChart from "./bloodPressureChart";
import BoodyTemperatureChart from "./bodyTemperatureChart";
import PastAppointment from "./pastAppointment";
import HealthConditionChart from "./healthConditionChart";
import LabResults from "./labResults";
import CaloriesBurnedChart from "./caloriesBurnedChart";
import SleepParttern from "./sleepPattern";

const cx = classNames.bind(styles)

const AnalyticsContainer = (): JSX.Element => {
    return (
        <div className={cx("analytics-container")}>
            <div className={cx("nav-container")}>
                <div className={cx("analytics")}>
                    <span>{"Analytics"}</span>
                </div>
                <div className={cx("compliance")}>
                    <span>{"Compliance"}</span>
                </div>
            </div>
            <div className={cx("chart-container")}>
                <div className={cx("small-charts-container")}>
                    <ActivityChart></ActivityChart>
                    <HeartRateChart></HeartRateChart>
                    <BloodPressureChart></BloodPressureChart>
                    <BoodyTemperatureChart></BoodyTemperatureChart>
                    <PastAppointment></PastAppointment>
                </div>
                <div className={cx("health-container")}>
                    <div className={cx("health-chart")}>
                        <HealthConditionChart></HealthConditionChart>
                    </div>
                    <div className={cx("lab-details")}>
                        <div className={cx("lab-results")}>
                            <LabResults></LabResults>
                        </div>
                        <div className={cx("lab-chart")}>
                            <div className={cx("calories-chart")}>
                                <CaloriesBurnedChart></CaloriesBurnedChart>
                            </div>
                            <div className={cx("sleep-patters")}>
                                <SleepParttern></SleepParttern>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsContainer;
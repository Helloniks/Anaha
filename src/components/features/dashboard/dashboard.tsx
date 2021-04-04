import classNames from "classnames/bind";
import * as styles from "./dashboard.scss"
import Profile from "../../common/profile";
import React from "react";
import PatientDetails from "../../common/patientDetails";
import AnalyticsContainer from "../analytics/analyticsContainer";

const cx = classNames.bind(styles)

const Dashboard = (): JSX.Element => {
    return (
        <div className={cx("dashboard-container")}>
            <Profile></Profile>
            <PatientDetails></PatientDetails>
            <AnalyticsContainer></AnalyticsContainer>
        </div>
    );
};

export default Dashboard;
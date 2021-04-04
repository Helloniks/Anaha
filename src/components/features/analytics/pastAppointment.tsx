import React from "react";
import classNames from "classnames/bind";
import * as styles from "./analyticsContainer.scss";

const cx = classNames.bind(styles)


const PastAppointment = (): JSX.Element => {


  return (
    <div className={cx("small-chart")}>
      <div className={cx("appointment-container")} >
        <span className={cx("title")}>{"Past Appointment"}</span>
        <div className={cx("appointment")} >
          <div>
            <span className={cx("link")}>{"10 AM - 11 AM"}</span>
            <span className={cx("text-seperation")}>{" 2 Sept"}</span>
          </div>
          <div >
            <span className={cx("link")}>{" Dr. Rakesh Chavan"}</span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default PastAppointment;
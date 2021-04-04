import React from "react";
import classNames from "classnames/bind";
import * as styles from "./patientDetails.scss"

const cx = classNames.bind(styles)

const PatientDetails = (): JSX.Element => {
 return(
     <div className={cx("patient-container")}>
         <div className={cx("details","link")}>{"Priya Mehta 32Y 4M"}</div>
         <div className={cx("details")}>{"ID: P0987"}</div>
         <div className={cx("details")}>{"With G3 P0 L1 A1"}</div>
         <div className={cx("details")}>{"8 weeks pregnant"}</div>
         <div className={cx("details")}>{"LMP: 20/01/2020"}</div>
         <div className={cx("details")}>{"EDD: 29/10/2020"}</div>
     </div>
 )
}

export default PatientDetails;
import React from "react";
import classNames from "classnames/bind";
import * as styles from "./analyticsContainer.scss";

const cx = classNames.bind(styles)


const LabResults = (): JSX.Element => {
  return (
    <div className={cx("lab-results-container")}>
      <div className={cx("title")}>{"Lab Results"}</div>
      <div className={cx("small-text")}>
        <div>{"5 August"}</div>
        <div>{"5 August"}</div>
        <div>{"5 August"}</div>
      </div>
      <div className={cx("content-text")}>
        <div>{"Sugar"}</div>
        <div>{"Haemoglobin"}</div>
        <div>{"White Blood Cell"}</div>
      </div>
      <div className={cx("value-text")}>
        <div>{"140 mg/dL"}</div>
        <div>{"140 mg/dL"}</div>
        <div>{"140 mg/dL"}</div></div>
      <div className={cx("small-text")}>
        <div>{"5 August"}</div>
        <div>{"5 August"}</div>
      </div>
      <div className={cx("content-text")}>
        <div> {"Lymohocyte"}</div>
        <div>{"Red Blood Cell"}</div>
      </div>
      <div className={cx("value-text")}>
        <div> {"3000"}</div>
        <div>{"4.9 million cells/mcl"}</div>
      </div>
    </div>
  )

}

export default LabResults;
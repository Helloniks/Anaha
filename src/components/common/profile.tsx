import React from "react";
import classNames from "classnames/bind";
import * as styles from "./profile.scss"
import forword from "../../assets/forword.png"
import InputSearch from "../inputComponets/inputSearch";

const cx = classNames.bind(styles)

const Profile = (): JSX.Element => {
  return (
    <div className={cx("profile-container")}>
      <div className={cx("name-details")}>
        <span className={cx("logo")}>{"ANAHA"}</span>
        <span className={cx("navigation")}>
          {"Patient Profile"}
          <img src={forword} height="16px" width="16px"></img>
          {"Analytics"}
        </span>
      </div>
      <div className={cx("search-box")}>
        <InputSearch></InputSearch>
      </div>
      <div className={cx("notification")}>
        <span className={cx("icons")}>
        <i className="fas fa-exclamation-circle"></i>
        </span>
        <span className={cx("icons")}>
        <i className="fas fa-grip-horizontal"></i>
        </span>
        <span className={cx("icons")}>
          <i className="fas fa-bell"></i>
        </span>
        <span className={cx("icons")}>
           <i className="fas fa-user-circle"></i>
            <span className={cx("profile")}>{"Dr. Raquel"}</span> 
           <i className="fas fa-chevron-down"></i>
        </span>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import classNames from "classnames/bind";
import * as styles from "./inputSearch.scss"

const cx = classNames.bind(styles)

interface InputSearchProps {
  searchValue? : string;
  onSearchValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const InputSearch = ({searchValue, onSearchValue} : InputSearchProps): JSX.Element => {
    return (
        <div className={cx("inputsearch-container")}>
            <i className="fa fa-search"></i>
            <input
                className={"input-search"}
                value={searchValue}
                placeholder={"search"}
                onChange={onSearchValue}
            />
            <i className="fas fa-chevron-down"></i>
        </div>
    );
};

export default InputSearch;

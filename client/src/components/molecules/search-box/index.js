import React from "react";

import LabelToolTip from "../label-tooltip";

import "./_styles.scss";

const InputBox = (props) => {
    return (
        <div className="pokedex-search-box">
            <LabelToolTip
                id={props.id}
                label={props.label}
                message={props.message}
            />
            <input
                id={props.id}
                className="pokedex-search-box-input"
                type={props.type || "text"}
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
            />
        </div>
    );
};

export default InputBox;
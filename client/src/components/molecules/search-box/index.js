import React from "react";

import ToolTip from "../tooltip";

import "./_styles.scss";

const InputBox = (props) => {
    return (
        <div className="pokedex-search-box">
            <div className="pokedex-search-box-label">
                <label
                    className="pokedex-search-box-label-text"
                    htmlFor={props.id}
                    tabIndex="0"
                >
                    {props.label}
                </label>
                <ToolTip
                    message={props.toolTipMessage}
                />
            </div>
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
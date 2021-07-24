import React from "react";

import ToolTip from "../../atoms/tooltip";

import "./_styles.scss";

const LabelToolTip = (props) => {
    return (
        <div className="pokedex-label-tooltip">
            <label
                className="pokedex-label-tooltip-title"
                htmlFor={props.id}
                tabIndex="0"
            >
                {props.label}
            </label>
            <ToolTip
                message={props.message}
            />
        </div>
    );
};

export default LabelToolTip;
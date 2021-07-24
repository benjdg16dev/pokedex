import React from "react";

import DropDown from "../../atoms/dropdown";
import LabelToolTip from "../label-tooltip";

const SearchDropDown = (props) => {
    return (
        <div className="pokedex-search-dropdown">
            <LabelToolTip
                id={props.id}
                label={props.label}
                message={props.message}
            />
            <DropDown
                id={props.id}
                name={props.name}
                data={props.data}
                onChange={props.onChange}
                isLoading={props.isLoading}
                hasDefaultOption={props.hasDefaultOption}
                defaultOptionValue={props.defaultOptionValue}
                disabled={props.disabled}
            />
        </div>
    )
};

export default SearchDropDown;
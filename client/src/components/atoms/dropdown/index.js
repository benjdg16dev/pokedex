import React, { useRef } from "react";
import "./_styles.scss";

const DropDown = (props) => {
    const dropDownRef = useRef();

    const optionsMarkUp = () => {
        if (props.data) {
            const options = props.data.map((value, index) => {
                return (
                    <option
                        className="pokedex-dropdown-option"
                        id={value.id ? value.id : index}
                        key={index}
                        value={value.value}
                    >
                        {value.value ? value.value : value}
                    </option>
                );
            });
            return (
                <>
                    {
                        props.hasDefaultOption
                            ? 
                                <option value={props.defaultOptionValue}>
                                    {props.defaultOptionValue}
                                </option>
                            : ""
                    }
                    {options}
                </>
            )
        }
    };

    return (
        <div className="pokedex-dropdown-container">
            {/* <label className="pokedex-dropdown-label" htmlFor={props.id} aria-label={props.name} tabIndex="0">{props.name}</label> */}
            <select
                id={props.id}
                className={`pokedex-dropdown-select ${props.className}`}
                onChange={props.onChange}
                name={props.name}
                disabled={props.disabled}
                ref={dropDownRef}
                defaultValue={props.defaultOptionValue.toString().toLowerCase()}
            >
                    {props.isLoading ? "Loading..." : optionsMarkUp()}
            </select>
        </div>
    );
};

export default DropDown;
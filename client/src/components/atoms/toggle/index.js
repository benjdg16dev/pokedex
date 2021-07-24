import React, { useState, useEffect, useRef } from "react";

import "./_styles.scss";

const Toggle = (props) => {
    const [toggleValue, setToggleValue] = useState(true);

    const checkBoxRef = useRef();

    useEffect(() => {
        if (props.value) {
            setToggleValue(props.value);
        }
    }, [props.value]);

    // useEffect(() => {
    //     console.log(toggleValue);
    // }, [toggleValue]);

    const handleChange = () => {
        setToggleValue(!toggleValue);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            checkBoxRef.current.click();
        }
    };

    return (
        <div className="pokedex-toggle">
            <input
                type="checkbox"
                id={props.id || "pokedex-toggle-id"}
                ref={checkBoxRef}
                checked={toggleValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                tabIndex="0"
            />
            <label htmlFor={props.id || "pokedex-toggle-id"} tabIndex="0">
                {props.label}
            </label>
        </div>
    );
};

export default Toggle;
import React from "react";

import "./_styles.scss";

const Button = (props) => {
    const loadingText = props.loadingText === "" ? "Loading" : props.loadingText;

    return (
        <div className="pokedex-button-container">
            <button
                className={`pokedex-button ${props.class} ${props.isLoading ? "pokedex-button-loading" : ""}`}
                name={props.name}
                value={props.value}
                type={props.type}
                disabled={props.disabled}
                onClick={props.onClick}
                aria-label={props.name}
            >
                {props.isLoading ? loadingText : props.name}
            </button>
        </div>
    );
};

export default Button;
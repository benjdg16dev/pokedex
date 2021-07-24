import React, { useState, useEffect, useRef } from "react";

import IconInfo from "../../atoms/icons/info";

import "./_styles.scss";

const ToolTip = (props) => {
    const [showToolTip, setShowToolTip] = useState(false);
    const toolTipRef = useRef();

    const handleClick = () => {
        setShowToolTip(!showToolTip);
    };

    const handleClickOutside = (e) => {
        if (showToolTip) {
            if (toolTipRef.current && !toolTipRef.current.contains(e.target)) {
                setShowToolTip(false);
            }
        }
    };

    const handleFocusOut = () => {
        setShowToolTip(false);
    };

    const handleScroll = () => {
        setShowToolTip(false);
    };

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            setShowToolTip(!showToolTip);
        }
    };

    useEffect(() => {
        const toolTipSpan = document.querySelector(".pokedex-tooltip-text");
        const body = document.querySelector("body");

        if (showToolTip) {
            document.addEventListener("click", handleClickOutside);
            toolTipSpan.addEventListener("focusout", handleFocusOut);
            body.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (showToolTip) {
                document.removeEventListener("click", handleClickOutside);
                if (toolTipSpan) {
                    toolTipSpan.removeEventListener("focusout", handleFocusOut);
                }
                if (body) {
                    body.removeEventListener("scroll", handleScroll);
                }
            }
        };
    }, [showToolTip]);

    return (
        <span
            role="button"
            className="pokedex-tooltip"
            tabIndex="0"
            onClick={handleClick}
            onKeyUp={handleKeyUp}
        >
            <IconInfo 
                fill={showToolTip ? "#7b8b8e" : "#A70707"}
            />
            {
                showToolTip ? (
                    <span
                        ref={toolTipRef}
                        className="pokedex-tooltip-text"
                        tabIndex="0"
                    >
                        {props.message}
                    </span>
                ) : null
            }
        </span>
    )
};

export default ToolTip;
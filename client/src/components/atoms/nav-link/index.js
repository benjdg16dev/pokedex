import React from "react";

import "./_styles.scss";

const NavLink = (props) => {
    return (
        <div className="pokedex-nav-link">
            <a
                href={`${window.location.origin}/${props.route}`}
                target={props.target || `_self`}
            >
                    {props.label || `Link`}
            </a>
        </div>
    );
};

export default NavLink;
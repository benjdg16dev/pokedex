import React from "react";

import "./_styles.scss";

const AppTitle = (props) => {
    return (
        <div className="pokedex-app-title">
            <h1>{props.title}</h1>
        </div>
    );
};

export default AppTitle;
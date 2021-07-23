import React from "react";

import ENLang from "../../../languages/en";

import AppTitle from "../../atoms/app-title";
import Toggle from "../../atoms/toggle";

import "./_styles.scss";

const Header = () => {
    return (
        <div className="pokedex-header">
            <div className="pokedex-header-segment-container">
                <div id="pokedex-header-segment-left" className="pokedex-header-segment">
                    <AppTitle title={ENLang.APP_TITLE} />
                </div>
                <div id="pokedex-header-segment-right" className="pokedex-header-segment">Toggle</div>
            </div>
        </div>
    );
};

export default Header;
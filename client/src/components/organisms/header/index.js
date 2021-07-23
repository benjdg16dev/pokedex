import React from "react";

import ENLang from "../../../languages/en";
import Routes from "../../../utilities/routes";

import AppTitle from "../../atoms/app-title";
import NavLink from "../../atoms/nav-link";
import Toggle from "../../atoms/toggle";

import "./_styles.scss";

const Header = () => {
    return (
        <div className="pokedex-header">
            <div className="pokedex-header-segment-container">
                <div id="pokedex-header-segment-left" className="pokedex-header-segment">
                    <AppTitle title={ENLang.APP_TITLE} />
                    <div className="pokedex-header-nav">
                        <NavLink
                            route={Routes.ROUTE_HOME}
                            label="Home"
                        />
                        <NavLink
                            route={Routes.ROUTE_ABOUT}
                            label="About"
                        />
                    </div>
                </div>
                <div id="pokedex-header-segment-right" className="pokedex-header-segment">
                    <Toggle label="Theme" />
                </div>
            </div>
        </div>
    );
};

export default Header;
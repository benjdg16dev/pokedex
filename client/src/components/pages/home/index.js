import React, { useState } from "react";

import { HomeContext } from "../../../contexts/HomeContext";

import HomeTemplate from "../../templates/home";

const HomePage = () => {
    const [homeState, setHomeState] = useState({
        pokemon_name: "yoyo",
        pokemon_type: "All"
    });

    // {
    //     pokemon_name: "initial",
    //     pokemon_type: "All"
    // }

    return (
        <HomeContext.Provider value={{homeState, setHomeState}}>
            <HomeTemplate />
            <div className="benjo">{homeState.pokemon_name}{homeState.pokemon_type}</div>
        </HomeContext.Provider>
    );
};

export default HomePage;
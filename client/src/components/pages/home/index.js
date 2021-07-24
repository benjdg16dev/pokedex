import React, { useState } from "react";

import { HomeContext } from "../../../contexts/HomeContext";

import HomeTemplate from "../../templates/home";

const HomePage = () => {
    const [homeState, setHomeState] = useState({
        pokemon_data: null
    });

    return (
        <HomeContext.Provider value={{homeState, setHomeState}}>
            <HomeTemplate />
        </HomeContext.Provider>
    );
};

export default HomePage;
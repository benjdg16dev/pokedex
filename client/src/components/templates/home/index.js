import React from "react";

import DownChevron from "../../../assets/svg/down-chevron.svg";

import Header from "../../organisms/header";

import SearchBox from "../../molecules/search-box";

import "./_styles.scss";

const HomeTemplate = () => {

    return (
        <div className="pokedex-home-template">
            <Header />
            <div className="pokedex-home-template-banner">
                <div className="pokedex-home-template-hero">
                    <span className="pokedex-home-template-title">
                        "Here, take one of these rare Pokémon."
                    </span>
                    <span className="pokedex-home-template-subtitle">
                        Professor Oak
                    </span>
                    <SearchBox
                        id="pokemon-name"
                        type="search"
                        placeholder="Pokémon name"
                        label="Search Pokémon name"
                        toolTipMessage="Input the Pokémon's name here."
                    />
                </div>
                <div className="pokedex-scroll-down">
                    <button 
                        className="pokedex-scroll-down-btn" 
                        onClick={() => {window.scroll({top: window.innerHeight, left: 0, behavior: "smooth"});}}
                        aria-label="Scroll down"
                    >
                        <img src={DownChevron} alt="scroll-down-button" />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default HomeTemplate;
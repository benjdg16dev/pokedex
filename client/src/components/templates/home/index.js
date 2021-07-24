import React from "react";

import DownChevron from "../../../assets/svg/down-chevron.svg";

import Header from "../../organisms/header";
import FilterBar from "../../organisms/filter-bar";
import Content from "../../organisms/content";

import "./_styles.scss";

const HomeTemplate = () => {
    // const handleScrollDownClick = () => {
    //     const topScroll = window.innerHeight - "64px";
    //     window.scroll({top: (window.innerHeight - "64px"), left: 0, behavior: "smooth"});
    // };

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
                </div>
                <div className="pokedex-scroll-down">
                    <button 
                        className="pokedex-scroll-down-btn" 
                        onClick={() => {window.scroll({top: (window.innerHeight - 64), left: 0, behavior: "smooth"});}}
                        aria-label="Scroll down"
                    >
                        <img src={DownChevron} alt="scroll-down-button" />
                    </button>
                </div>
            </div>
            <FilterBar />
            <Content />
        </div>
    )
};

export default HomeTemplate;
import React, { useState, useEffect, useContext } from "react";

import { HomeContext } from "../../../contexts/HomeContext";

import Loader from "../../atoms/loader";

import Card from "../../molecules/card";

import "./_styles.scss";

const Content = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allStarterPokemon, setAllStarterPokemon] = useState();
    const { homeState } = useContext(HomeContext);

    useEffect(() => {
        if (homeState) {
            setIsLoading(false);
        }
    }, [homeState]);

    useEffect(() => {
        fetch("http://localhost:1100/pokemon")
            .then(response => response.json())
            .then(data => setAllStarterPokemon(data.kanto_starter_pokemons));
    }, []);

    const notFoundMarkUp = () => {
        return (
            <div className="pokedex-content-not-found">
                Content not found.
            </div>
        );
    };

    const loaderMarkUp = () => {
        return (
            <div className="pokedex-content-loader">
                <Loader />
            </div>
        );
    };

    const loadStarterMarkUp = () => {
        let markUp = null;
        if (allStarterPokemon) {
            markUp = [];
            allStarterPokemon.map((element, index) => {
                markUp.push(
                    <Card
                        id={element.id}
                        name={element.name}
                        description={element.description}
                        primary_type={element.primary_type}
                        secondary_type={element.secondary_type}
                    />
                )
            });
        }
        return markUp;
    }

    return (
        <div className="pokedex-content">
            <div className="pokedex-content-container">
                {
                    isLoading && loaderMarkUp()
                }
                <div className="pokedex-content-card-container">
                {loadStarterMarkUp()}
                </div>
            </div>
        </div>
    );
};

export default Content;
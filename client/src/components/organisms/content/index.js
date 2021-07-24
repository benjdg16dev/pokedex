import React, { useState, useEffect, useContext } from "react";

import { HomeContext } from "../../../contexts/HomeContext";

import Loader from "../../atoms/loader";

import Card from "../../molecules/card";

import "./_styles.scss";

const Content = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { homeState, setHomeState } = useContext(HomeContext);

    useEffect(() => {
        fetch("http://localhost:1100/pokemon")
            .then(response => response.json())
            .then(data => {
                setHomeState(
                    {...homeState,
                        pokemon_data: data.kanto_starter_pokemons
                    }
                );
            });
    }, []);

    useEffect(() => {
        if (homeState.pokemon_data) {
            setIsLoading(false);
        }
    }, [homeState]);

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
        if (homeState.pokemon_data) {
            if (homeState.pokemon_data.length) {
                markUp = [];
                homeState.pokemon_data.map((element, index) => {
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
            } else {
                markUp = notFoundMarkUp();
            }
        }
        return markUp;
    }

    return (
        <div className="pokedex-content">
            <div className="pokedex-content-container">
                {
                    isLoading ? loaderMarkUp() : (
                        <div className="pokedex-content-card-container">
                            {loadStarterMarkUp()}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Content;
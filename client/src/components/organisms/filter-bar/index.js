import React, { useState, useEffect, useContext } from "react";

import { HomeContext } from "../../../contexts/HomeContext";

import Button from "../../atoms/button";
import SearchBox from "../../molecules/search-box";
import SearchDropDown from "../../molecules/search-dropdown";

import PokemonTypesJSON from "../../../utilities/pokemon-types.json";

import "./_styles.scss";

const FilterBar = () => {
    const { homeState, setHomeState } = useContext(HomeContext);
    const [pokemonSearchName, setPokemonSearchName] = useState();
    const [pokemonSearchType, setPokemonSearchType] = useState("All");
    const [pokemonTypes, setPokemonTypes] = useState(null);
    const [isPokemonTypesReady, setIsPokemonTypesReady] = useState(false);

    useEffect(() => {
        const dataArray = [];

        for (let key in PokemonTypesJSON) {
            if (PokemonTypesJSON.hasOwnProperty(key)) {
                const dataObject = {
                    id: key,
                    value: PokemonTypesJSON[key]
                };
                dataArray.push(dataObject);
            }
        }

        setPokemonTypes(dataArray);
    }, []);

    useEffect(() => {
        if (pokemonTypes) {
            setIsPokemonTypesReady(true);
        }
    }, [pokemonTypes])

    const handleSearchBoxChange = (e) => {
        setPokemonSearchName(e.target.value);
    };

    const handleSearchDropDownChange = (e) => {
        setPokemonSearchType(e.target.value);
    };

    const handleSearchButtonClick = () => {
        setHomeState({
            ...homeState,
            pokemon_name: pokemonSearchName,
            pokemon_type: pokemonSearchType
        });
    };

    return (
        <div className="pokedex-filterbar">
            <div className="pokedex-filterbar-container">
                <SearchBox
                    id="pokemon-name"
                    type="search"
                    placeholder="Pokémon name"
                    label="Search Pokémon name"
                    message="Input the Pokémon's name here."
                    onChange={handleSearchBoxChange}
                />
                <SearchDropDown
                    id="pokedex-primary-type"
                    label="Pokémon Main Type"
                    name="Primary Type"
                    data={pokemonTypes}
                    onChange={handleSearchDropDownChange}
                    isLoading={!isPokemonTypesReady}
                    hasDefaultOption
                    defaultOptionValue={"All"}
                    disabled={!isPokemonTypesReady}
                    message="Choose the Pokémon's main type here."
                />
                <Button 
                    onClick={handleSearchButtonClick}
                    name="Search"
                    disabled={!isPokemonTypesReady}
                />
            </div>
        </div>
    );
};

export default FilterBar;
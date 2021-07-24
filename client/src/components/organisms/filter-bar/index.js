import React, { useState, useEffect } from "react";

import Button from "../../atoms/button";
import SearchBox from "../../molecules/search-box";
import SearchDropDown from "../../molecules/search-dropdown";

import PokemonTypesJSON from "../../../utilities/pokemon-types.json";

import "./_styles.scss";

const FilterBar = () => {
    const [pokemonTypes, setPokemonTypes] = useState()

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

    return (
        <div className="pokedex-filterbar">
            <div className="pokedex-filterbar-container">
                <SearchBox
                    id="pokemon-name"
                    type="search"
                    placeholder="Pokémon name"
                    label="Search Pokémon name"
                    message="Input the Pokémon's name here."
                />
                <SearchDropDown
                    id="pokedex-primary-type"
                    label="Pokémon Main Type"
                    name="Primary Type"
                    data={pokemonTypes}
                    onChange={console.log()}
                    // isLoading={!isLaunchPadsReady}
                    // hasDefaultOption
                    defaultOptionValue={"normal"}
                    // disabled={!isLaunchPadsReady}
                    message="Choose the Pokémon's main type here."
                />
                <Button 
                    onClick={console.log("working")}
                    name="Search"
                    // disabled={(!isLaunchDataReady || !isLaunchPadsReady)}
                />
            </div>
        </div>
    );
};

export default FilterBar;
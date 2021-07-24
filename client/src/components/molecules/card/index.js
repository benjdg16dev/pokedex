import React, { useState, useEffect } from "react";

import "./_styles.scss";

import pokemon_img1 from "../../../assets/images/pokemons/1.png";
import pokemon_img2 from "../../../assets/images/pokemons/2.png";
import pokemon_img3 from "../../../assets/images/pokemons/3.png";
import pokemon_img4 from "../../../assets/images/pokemons/4.png";
import pokemon_img5 from "../../../assets/images/pokemons/5.png";
import pokemon_img6 from "../../../assets/images/pokemons/6.png";
import pokemon_img7 from "../../../assets/images/pokemons/7.png";
import pokemon_img8 from "../../../assets/images/pokemons/8.png";
import pokemon_img9 from "../../../assets/images/pokemons/9.png";

const Card = (props) => {
    const [imgPath, setImgPath] = useState();

    useEffect(() => {
        switch(props.id) {
            case 1:
                setImgPath(pokemon_img1);
                break;
            case 2:
                setImgPath(pokemon_img2);
                break;
            case 3:
                setImgPath(pokemon_img3);
                break;
            case 4:
                setImgPath(pokemon_img4);
                break;
            case 5:
                setImgPath(pokemon_img5);
                break;
            case 6:
                setImgPath(pokemon_img6);
                break;
            case 7:
                setImgPath(pokemon_img7);
                break;
            case 8:
                setImgPath(pokemon_img8);
                break;
            case 9:
                setImgPath(pokemon_img9);
                break;
            default:
                break;
        }
    }, [props.id]);

    const padZeroes = (num, size) => {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    };

    return (
        <div className="pokedex-card">
            <div className="pokedex-card-top">
                <div className="pokedex-card-img">
                    <img src={imgPath} />
                </div>
                <div className="pokedex-card-name">
                    {`${props.name} #${padZeroes(props.id, 3)}`}
                </div>
            </div>
            <div className="pokedex-card-bottom">
                <div className="pokedex-card-description">
                    {props.description}
                </div>
                <div className="pokedex-card-types">
                    <span className="pokedex-card-type-primary">{props.primary_type}</span>
                    <span className="pokedex-card-type-secondary">{props.secondary_type}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
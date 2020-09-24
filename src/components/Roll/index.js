import React from "react";

import Pokemon from "../Pokemon";

import "./style.scss";

const Roll = ({ time, character, biome, pokemons }) => {
  const date = new Date(time);
  const day = `0${date.getDate()}`.substr(-2);
  const month = `0${date.getMonth() + 1}`.substr(-2);
  const year = date.getFullYear();
  const hours = `0${date.getHours()}`.substr(-2);
  const minutes = `0${date.getMinutes()}`.substr(-2);

  return (
    <li className="roll_item">
      <div className="roll_title">
        Às <span>{`${hours}:${minutes}`}</span> do dia{" "}
        <span>{`${day}/${month}/${year}`}</span>, <span>{character}</span>{" "}
        procurou por Pokémons no bioma <span>{biome}</span>
      </div>

      <ul className="pokemons_list">
        {pokemons.map((pokemon, pokemonKey) => {
          return <Pokemon {...pokemon} key={pokemonKey} />;
        })}
      </ul>
    </li>
  );
};

export default Roll;

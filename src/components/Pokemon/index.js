import React from "react";

import Type from "../Type";

import "./style.scss";

const Pokemon = ({ id, name, types, gender, ability, level }) => {
  return (
    <li className="pokemons_item">
      <div className="pokemon_info">
        <div className="pokemon_sprite">
          {id !== "common" && id !== "uncommon" && (
            <img
              src={`https://www.serebii.net/pokedex-swsh/icon/${id}.png`}
              alt={`Sprite de ${name}`}
            />
          )}

          {(id === "common" || id === "uncommon") && (
            <img
              src={`https://img.pokemondb.net/sprites/platinum/normal/unown-qm.png`}
              alt={`Sprite de ?`}
            />
          )}
        </div>

        <div className="pokemon_name">
          {id !== "common" && id !== "uncommon"
            ? name
            : id === "common"
            ? "Pokémon comum"
            : "Pokémon incomum"}

          <span>
            {gender === "male" && "♂"}
            {gender === "female" && "♀"}
            {gender === "genderless" && "⍉"}
          </span>
        </div>

        {ability && (
          <div className="pokemon_ability">Habilidade: {ability}</div>
        )}

        {level && <div className="pokemon_ability">Level: {level}</div>}

        <div className="pokemon_types">
          {!!types &&
            types.length > 0 &&
            types.map((type, typeKey) => {
              return <Type type={type} key={typeKey} />;
            })}
          {!types || (types.length < 1 && <Type type={"unknown"} />)}
        </div>
      </div>
    </li>
  );
};

export default Pokemon;

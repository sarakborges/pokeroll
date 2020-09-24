import React from "react";

import Container from "../../components/Container";
import AppTitle from "../../components/AppTitle";
import Type from "../../components/Type";

import Places from "../../places.json";

import "./style.scss";

const PokemonItem = ({ pokemonItem, placeKey, pokemonKey, rarity }) => {
  return (
    <li className={`pokemon-item pokemon-${rarity}`}>
      <div className="pokemon_info">
        <div className="pokemon_sprite">
          <img
            src={`https://www.serebii.net/pokedex-swsh/icon/${pokemonItem.id}.png`}
            alt={`Sprite de ${pokemonItem.name}`}
          />
        </div>

        <div className="pokemon_name">{pokemonItem.name}</div>

        <dl className="pokemon_abilities">
          <dt>Habilidades:</dt>

          {pokemonItem.abilities.map((abilityItem, abilityKey) => {
            return (
              <dd
                key={`places-${placeKey}-pokemon-${pokemonKey}-ability-${abilityKey}`}
              >
                {abilityItem}
              </dd>
            );
          })}
        </dl>

        <div className="pokemon_types">
          {pokemonItem.types.map((type, typeKey) => {
            return (
              <Type
                type={type}
                key={`places-${placeKey}-pokemon-${pokemonKey}-type-${typeKey}`}
              />
            );
          })}
        </div>
      </div>
    </li>
  );
};

const Faq = () => {
  return (
    <>
      <AppTitle />

      <Container>
        {Places.map((placeItem, placeKey) => {
          return (
            <div className="place-wrapper" key={`places-${placeKey}`}>
              <div className="place-name">{placeItem.name}</div>

              <ul className="place-pokemons">
                {placeItem.common.map((pokemonItem, pokemonKey) => {
                  return (
                    <PokemonItem
                      pokemonItem={pokemonItem}
                      placeKey={placeKey}
                      pokemonKey={pokemonKey}
                      rarity="common"
                      key={`places-${placeKey}-pokemon-${pokemonKey}`}
                    />
                  );
                })}

                {placeItem.uncommon.map((pokemonItem, pokemonKey) => {
                  return (
                    <PokemonItem
                      pokemonItem={pokemonItem}
                      placeKey={placeKey}
                      pokemonKey={pokemonKey}
                      rarity="uncommon"
                      key={`places-${placeKey}-pokemon-${pokemonKey}`}
                    />
                  );
                })}

                {placeItem.rare.map((pokemonItem, pokemonKey) => {
                  return (
                    <PokemonItem
                      pokemonItem={pokemonItem}
                      placeKey={placeKey}
                      pokemonKey={pokemonKey}
                      rarity="rare"
                      key={`places-${placeKey}-pokemon-${pokemonKey}`}
                    />
                  );
                })}

                {placeItem.ultrarare.map((pokemonItem, pokemonKey) => {
                  return (
                    <PokemonItem
                      pokemonItem={pokemonItem}
                      placeKey={placeKey}
                      pokemonKey={pokemonKey}
                      rarity="ultrarare"
                      key={`places-${placeKey}-pokemon-${pokemonKey}`}
                    />
                  );
                })}
              </ul>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Faq;

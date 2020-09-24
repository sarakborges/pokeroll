import React, { useState } from "react";

import Roll from "../../components/Roll";
import Container from "../../components/Container";
import AppTitle from "../../components/AppTitle";
import Loader from "../../components/Loader";

import RollAPI from "../../apis/rolls";

import "./style.scss";

const RollForm = () => {
  const [roll, setRoll] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const [character, setCharacter] = useState("");
  const [biome, setBiome] = useState("");
  const [badges, setBadges] = useState(0);
  const [quantityRolls, setQuantityRolls] = useState(3);

  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const tempErrors = {};

    if (!character) {
      tempErrors.character = "Preencha o nome do seu personagem!";
    }

    if (!biome) {
      tempErrors.biome = "Selecione o bioma!";
    }

    if (badges < 0 || badges > 8) {
      tempErrors.badges = "Apenas 8 provas de valor contam para as rolagens!";
    }

    if (quantityRolls < 1 || quantityRolls > 6) {
      tempErrors.quantityRolls = "Você precisa rolar entre 1 e 6 vezes!";
    }

    setErrors(() => tempErrors);

    if (
      !tempErrors.character &&
      !tempErrors.biome &&
      !tempErrors.badges &&
      !tempErrors.quantityRolls
    ) {
      setIsLoading(true);

      const create = await RollAPI.create(
        character,
        biome,
        badges,
        quantityRolls
      );

      setIsLoading(false);

      setRoll(create.data);

      setCharacter("");
      setBiome("");
      setBadges(0);
      setQuantityRolls(3);
    }
  };

  return (
    <>
      <AppTitle />

      {isLoading && <Loader />}

      <Container>
        <form
          id="roll-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e.target);
          }}
        >
          <div className="form-title">
            Preencha os dados abaixo para fazer sua rolagem
          </div>

          <div className="form-items">
            <label className="form-item">
              <div className="item-label">Nome do personagem</div>

              <input
                name="character"
                type="text"
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
              />

              <div className="item-error">{errors.character}</div>
            </label>

            <label className="form-item">
              <div className="item-label">Bioma</div>

              <select
                name="biome"
                value={biome}
                onChange={(e) => {
                  setBiome(e.target.value);
                }}
              >
                <option value="">Selecione</option>
                <option value="alola">Alola</option>
                <option value="arido">Árido</option>
                <option value="assombrado">Assombrado</option>
                <option value="caverna">Caverna</option>
                <option value="costeiro">Costeiro</option>
                <option value="florestal">Florestal</option>
                <option value="galar">Galar</option>
                <option value="maritimo">Marítimo</option>
                <option value="montanhoso">Montanhoso</option>
                <option value="pantanoso">Pantanoso</option>
                <option value="pesca">Pesca</option>
                <option value="pesca_alola">Pesca em Alola</option>
                <option value="pesca_galar">Pesca em Galar</option>
                <option value="planicie">Planície</option>
                <option value="polar">Polar</option>
                <option value="praia">Praia</option>
                <option value="rios_lagos">Rios e Lagos</option>
                <option value="urbano">Urbano</option>
              </select>

              <div className="item-error">{errors.biome}</div>
            </label>

            <label className="form-item">
              <div className="item-label">Provas de valor</div>

              <input
                name="badges"
                type="number"
                value={badges}
                onChange={(e) => setBadges(e.target.value)}
              />

              <div className="item-error">{errors.badges}</div>
            </label>

            <label className="form-item">
              <div className="item-label">Rolar quantas vezes?</div>

              <input
                name="quantityRolls"
                type="number"
                value={quantityRolls}
                onChange={(e) => setQuantityRolls(e.target.value)}
              />

              <div className="item-error">{errors.quantityRolls}</div>
            </label>
          </div>

          <div className="form-item">
            <button className="form-submit" type="submit">
              Rolar!
            </button>
          </div>
        </form>

        {roll !== undefined && (
          <ul id="roll-result">
            <Roll {...roll} />
          </ul>
        )}
      </Container>
    </>
  );
};

export default RollForm;

import React from 'react';

import Container from '../../components/Container';

import './style.scss';

const Sheet = () => {
  const skills = [
    {
      origin: 'Perícia inicial',
      title: 'Sincronia',
      text: `Controla perfeitamente seus Pokémon em qualquer momento, assim o Pokémon recebe mais uma ação por rodada (por exemplo, usar um move de status, realizar um ataque a mais na rodada, seja ela uma rodada atk>def>juiz ou atk>def e atk>def>juiz).`,
    },

    {
      origin: 'Perícia inicial',
      title: 'Superação',
      text: `Em um momento crítico da batalha ou outra situação, onde o pokémon estiver com 25% ou menos de seu HP máximo, o treinador o incentiva com palavras e um único ataque do seu Pokémon será um golpe crítico que causará dano Neutro, ignorando imunidades ou resistências adversárias.`,
    },

    {
      origin: 'Perícia de classe',
      title: '-',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris velit, luctus at lacus id, scelerisque tempus lorem. Phasellus luctus et metus a laoreet.`,
    },

    {
      origin: 'Perícia de classe',
      title: '-',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris velit, luctus at lacus id, scelerisque tempus lorem. Phasellus luctus et metus a laoreet.`,
    },

    {
      origin: 'Perícia de classe',
      title: '-',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris velit, luctus at lacus id, scelerisque tempus lorem. Phasellus luctus et metus a laoreet.`,
    },

    {
      origin: 'Perícia de classe',
      title: '-',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris velit, luctus at lacus id, scelerisque tempus lorem. Phasellus luctus et metus a laoreet.`,
    },

    {
      origin: 'Perícia de classe',
      title: '-',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris velit, luctus at lacus id, scelerisque tempus lorem. Phasellus luctus et metus a laoreet.`,
    },

    {
      origin: 'Perícia de classe',
      title: '-',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris velit, luctus at lacus id, scelerisque tempus lorem. Phasellus luctus et metus a laoreet.`,
    },
  ];

  const starter = {
    name: 'Cupcake',
    species: 'IGGLYBUFF',
    gender: '♀',
    picture: `https://lh6.googleusercontent.com/s064-giRrpehvhFbkI--LYj35Z1cs7AlTgGCPd0KjfsqbH_XPq0aZYw7VggyHM-8JJ_BW1lWRX-mKGv8bp69HLXb4i9A1Ma0uIgnaVO7hXtkEOCByop3qz0zu2vbeOWC4PuiWjYV`,
    pokeball: `https://lh6.googleusercontent.com/70ULsE9RPdalw-lF4CKSagzWJT4pLe1m1SxjQ-iThWuO1MkIebifYz4-l6NBBL3tuf2NR1iZ5yqYHQW8fgUOW7bS68ExISX4QXL6wruNc0eZ1aW-xSP9f9eRBfBeqvRZ0Z6WC9WQ`,
    types: ['normal', 'fairy'],
    ability: 'Cute Charm',
    level: 5,
    nature: 'Impish',
    item: '',
    happiness: 470,
    moveset: [
      { name: 'Sing' },
      { name: 'Defense Curl' },
      { name: 'Pound' },
      { name: 'Last Resort', origin: 'EM' },
      { name: '' },
    ],
  };

  return (
    <div id="sheet">
      <Container>
        <div className="sheet_top" />

        <div className="sheet_info">
          <div className="info_wrapper">
            <div className="info_text">
              <div className="starter_pokemon">
                <div className="starter_title">
                  <div className="starter_text">Pokémon inicial</div>

                  <div className="starter_name">
                    {starter.name} ({starter.species}){' '}
                    <span className="starter_gender">{starter.gender}</span>
                  </div>
                </div>

                <div className="starter_info">
                  <div className="starter_picture">
                    <img
                      src={starter.picture}
                      alt={`Foto de ${starter.name}`}
                    />
                    <img
                      src={starter.pokeball}
                      alt={`Poké Ball de ${starter.name}`}
                      className="pokeball"
                    />
                  </div>

                  <div className="starter_sheet">
                    <div className="starter_sheet_item">
                      <div className="starter_sheet_label">Type:</div>

                      <div className="starter_sheet_value">
                        {starter.types.map((item, key) => (
                          <img
                            src={`https://www.serebii.net/pokedex-bw/type/${item}.gif`}
                            alt={`Sprite do type ${item}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="starter_sheet_item">
                      <div className="starter_sheet_label">Ability:</div>

                      <div className="starter_sheet_value">
                        {starter.ability}
                      </div>
                    </div>

                    <div className="starter_sheet_item">
                      <div className="starter_sheet_label">Level:</div>

                      <div className="starter_sheet_value">
                        {`00${starter.level}`.substr(-3)} / 100
                      </div>
                    </div>

                    <div className="starter_sheet_item">
                      <div className="starter_sheet_label">Nature:</div>

                      <div className="starter_sheet_value">
                        {starter.nature}
                      </div>
                    </div>

                    <div className="starter_sheet_item">
                      <div className="starter_sheet_label">Hold Item:</div>

                      <div className="starter_sheet_value">{starter.item}</div>
                    </div>

                    <div className="starter_sheet_item">
                      <div className="starter_sheet_label">Happiness:</div>

                      <div className="starter_sheet_value">
                        {`000${starter.happiness}`.substr(-4)} / 1000
                      </div>
                    </div>

                    <div className="starter_sheet_item">
                      <div className="starter_sheet_label">Moveset:</div>
                    </div>

                    {starter.moveset.map((item, key) => (
                      <div className="starter_sheet_item" key={key}>
                        <div className="starter_sheet_value">
                          - {item.name}
                          {item.origin && <span>({item.origin})</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="info_table">
                <div className="table_header">
                  <div className="character_name">Dana Bones</div>
                  <div className="character_title">"Parabéns, campeão."</div>
                </div>

                <div className="table_list">
                  <div className="table_item">
                    <div className="item_label">Classe</div>
                    <div className="item_value">Treinadora</div>
                  </div>

                  <div className="table_item">
                    <div className="item_label">Profissão</div>
                    <div className="item_value">Jornalista</div>
                  </div>

                  <div className="table_item">
                    <div className="item_label">Idade</div>
                    <div className="item_value">26 anos</div>
                  </div>

                  <div className="table_item">
                    <div className="item_label">Photoplayer</div>
                    <div className="item_value">Stephanie Beatriz</div>
                  </div>
                </div>

                <div className="table_bottom">
                  <div className="bottom_item character_coins">
                    <div className="item_label">C$</div>
                    <div className="item_value">3.250</div>
                  </div>

                  <div className="bottom_item character_fame">
                    <div className="item_label">Fama</div>
                    <div className="item_value">+37</div>
                  </div>

                  <div className="bottom_item character_city">
                    <div className="item_label">Naturalidade</div>
                    <div className="item_value">Viridian City, Kanto</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="character_skills">
              {skills.map((item, key) => {
                return (
                  <div className="skill_item" key={key}>
                    <div className="skill_label">
                      <div className="label_origin">{item.origin}</div>
                      <div className="label_title">({item.title})</div>
                    </div>

                    <div className="skill_value">{item.text}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="info_portrait">
            <div className="portrait_picture">
              <img
                src="https://lh6.googleusercontent.com/yJQkatE2QXzF7UO89r58FTb-Q0-slDT4fXaH1OE4VfFenRrCV6fOv8YeKtc0fJbLByaosOz7B15JtJmGKXuCLno5cgPfJ-tbi99ZGQERt7a6uUOFZS0hA7Dq_Qt6Nt8815553hmB"
                alt="Foto de Dana Bones"
              />
            </div>
          </div>
        </div>

        <div className="sheet_team"></div>

        <div className="sheet_inventory"></div>

        <div className="sheet_box"></div>
      </Container>
    </div>
  );
};

export default Sheet;

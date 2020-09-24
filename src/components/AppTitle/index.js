import React from "react";
import { Link } from "react-router-dom";

import Container from "../Container";

import "./style.scss";

const AppTitle = () => {
  return (
    <div id="app-topbar">
      <div id="app-title">
        <Container>Pokémon Let's Go</Container>
      </div>

      <div id="app-menu">
        <Container>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/rolls/getAll/1" className="menu-link">
                Últimas rolagens
              </Link>
            </li>

            <li className="menu-item">
              <Link to="/rolls/create" className="menu-link">
                Nova rolagem
              </Link>
            </li>

            <li className="menu-item">
              <Link to="/rolls/places" className="menu-link">
                Pokémons por bioma
              </Link>
            </li>

            <li className="menu-item">
              <Link to="/rolls/faq" className="menu-link">
                F.A.Q
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default AppTitle;

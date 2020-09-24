import React from "react";

import Container from "../../components/Container";
import AppTitle from "../../components/AppTitle";

import "./style.scss";

const Faq = () => {
  return (
    <>
      <AppTitle />

      <Container>
        <div className="faq-title">F.A.Q</div>

        <ul className="faq-list">
          <li className="faq-item">
            <div className="item-title">O que é esse app?</div>

            <div className="item-text">
              <p>
                Primeiramente: Um aplicativo feito de coração pela Sara para a
                Bia.
              </p>

              <p>
                Eu fiz esse app porque, além do motivo citado acima, é uma boa
                forma de exercitar minhas skills de programação fora do
                trabalho. Eu tenho que seguir determinados padrões na empresa.
                Aqui, não preciso disso. Então eu faço da forma que acho melhor.
              </p>

              <p>
                Além disso, ajuda também não apenas a mim, mas a todos os
                jogadores em suas rolagens diárias.
              </p>

              <p>
                Ninguém vai precisar cometer o mesmo erro que eu, de digitar
                #d100 ao invés de d100, e rolar d20 pra capturas. q
              </p>
            </div>
          </li>

          <li className="faq-item">
            <div className="item-title">O que NÃO é esse app?</div>

            <div className="item-text">
              <p>
                O objetivo desse app não é trapacear, ou facilitar a minha vida,
                nem de nenhum jogador.
              </p>

              <p>
                Não existe nenhum tipo de código de trapaça que possa ser
                ativado para rolar pokémons raros, ou específicos.
              </p>

              <p>Também não serve como forma de bajulação a administração.</p>
            </div>
          </li>

          <li className="faq-item">
            <div className="item-title">A Bia precisou pagar algo?</div>

            <div className="item-text">
              <p>Sim. Foi assim que consegui casar com ela. n</p>

              <p>
                Não, esse aplicativo é gratuito. Tanto para o RPG, quanto para
                mim, desenvolvedora. Utilizei linguagem, armazenamento, e
                ferramentas livres.
              </p>
            </div>
          </li>

          <li className="faq-item">
            <div className="item-title">Quem é Sara?</div>

            <div className="item-text">
              <p>
                Sou uma jogadora do RPG. Antigamente, algumas pessoas me
                conheciam no RPG como Alberto. Mas aí resolvi me assumir
                transgênero e cá estou.
              </p>

              <p>
                Sou uma desenvolvedora de sistemas pra internet que ama RPG e
                desenvolver ferramentas para tais. Ah, se quiser me contratar
                pra fazer alguma ferramenta, me procura em Prime. Mas as chances
                são altas de que vou querer cobrar.
              </p>
            </div>
          </li>

          <li className="faq-item">
            <div className="item-title">
              Se você desistir do RPG, o app também sai do ar?
            </div>

            <div className="item-text">
              <p>
                Não. Já aconteceu de eu desistir do antigo RPG de Pokémon que
                jogávamos uma vez, depois de eu ter feito uma versão mais antiga
                do app, e eu mantive no ar. A ideia é repetir a estratégia.
              </p>

              <p>
                Esse é meu presente para o RPG, e não me importo com o que vai
                acontecer no desenrolar do jogo. E a única forma desse app não
                ser mais utilizado, é se a Bia resolver que não vai mais ser
                usado.
              </p>
            </div>
          </li>

          <li className="faq-item">
            <div className="item-title">
              E se a Bia deixar o RPG pra outra pessoa?
            </div>

            <div className="item-text">
              <p>
                Azar. O app continua no ar, e a outra pessoa que decida o que
                vai fazer. Mas todo mundo vai ficar sabendo que eu fiz isso para
                a Bia, e vai ter que ler o nome dela aqui várias vezes e lembrar
                o quão maravilhosa ela é.
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Faq;

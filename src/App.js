
import React, { Component } from 'react';
import styled from 'styled-components';
import {Section, Article, Articulos, Aside,Img, ImgLog , ImgPubli} from './Category.js';
import Publicidad from './Publicidad.js'
import './App.css';

const Contenedor = styled.div  `
  display: flex;
  flex-flow: row wrap;
  flex-direction : colum;
 `;
const Title = styled.h3`
 font-family : Montserrat;
 text-align : center;
 font-size: 25px;
 color : #4169E1	;
 text-decoration: underline;
 &:hover {
    color: black;
  }
`;
const Info = styled.p`
 font-family : Roboto;
 text-align : justify;
 margin: 0px 25px 0px 25px;
 display : none;
 &:hover {
    color: black;
    display : block;
  }
`;



class App extends Component {
  render() {
    return (
        <Contenedor className="App">
          <Section>
            <Articulos>
             <Article>
             <Img src="http://creaturviajes.com/wp-content/uploads/2017/09/Portada1.jpg" />
             <Title> Ejemplos de uso</Title>
             <Info>La utilización de literales de plantillas etiquetadas
              (una adición reciente a JavaScript) y el poder de CSS ,
               le styled-componentspermite escribir código CSS real para
               darle un estilo a sus componentes. También elimina el mapeo
                entre componentes y estilos. ¡Usar componentes como una construcción
                de estilo de bajo nivel no podría ser más fácil!
                </Info>
             </Article>
             <Article>
             <Img src="http://creaturviajes.com/wp-content/uploads/2017/09/Portada1.jpg" />
             <Title> Ejemplos de uso</Title>
             <Info>La utilización de literales de plantillas etiquetadas
              (una adición reciente a JavaScript) y el poder de CSS ,
               le styled-componentspermite escribir código CSS real para
               darle un estilo a sus componentes. También elimina el mapeo
                entre componentes y estilos. ¡Usar componentes como una construcción
                de estilo de bajo nivel no podría ser más fácil!
                </Info>
             </Article>
            <Article>
            <Img src="http://creaturviajes.com/wp-content/uploads/2017/09/Portada1.jpg" />
            <Title> Ejemplos de uso</Title>
            <Info>La utilización de literales de plantillas etiquetadas
             (una adición reciente a JavaScript) y el poder de CSS ,
              le styled-componentspermite escribir código CSS real para
              darle un estilo a sus componentes. También elimina el mapeo
               entre componentes y estilos. ¡Usar componentes como una construcción
               de estilo de bajo nivel no podría ser más fácil!
               </Info>
            </Article>


           <Article>
           <Img src="http://creaturviajes.com/wp-content/uploads/2017/09/Portada1.jpg" />
           <Title> Ejemplos de uso</Title>
           <Info>La utilización de literales de plantillas etiquetadas
            (una adición reciente a JavaScript) y el poder de CSS ,
             le styled-componentspermite escribir código CSS real para
             darle un estilo a sus componentes. También elimina el mapeo
              entre componentes y estilos. ¡Usar componentes como una construcción
              de estilo de bajo nivel no podría ser más fácil!
              </Info>
           </Article>
          </Articulos>

            <Aside>
              <ImgLog src="http://creaturviajes.com/wp-content/themes/creatur/images/creatur.png" />
              <Publicidad />
              <ImgPubli src="https://userscontent2.emaze.com/images/91fc48c1-0aa2-4af9-99a0-f33d39b52a2d/76badd12f78b5d57f90c0d603a403a6c.png" />
            </Aside>
          </Section>
        </Contenedor>
    );
  }
}

export default App;

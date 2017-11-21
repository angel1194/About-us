
import React, { Component } from 'react';
import styled from 'styled-components';
import {Section, Article, Articulos, Aside,Img, ImgLog , ImgPubli} from './Category.js';
import Publicidad from './Publicidad.js'
import Boxes from './Boxes.js'

import './App.css';

const Contenedor = styled.div  `
  display: flex;
  flex-flow: row wrap;
  flex-direction : colum;
 `;


const Footer = styled.div`
 background : red;
 width : 100%;
`;

class App extends Component {

render() {
    return (
        <Contenedor className="App">
          <Section>
            <Articulos>

             <Article>
               <Img src="http://creaturviajes.com/wp-content/uploads/2017/06/pantalla.jpg" />
              <Boxes  title="TITULO" text="Los antecedentes del conflicto se remontan a la situación de México bajo el porfiriato. Desde 1876 ejerció el poder en el país de manera dictatorial. La situación se prolongó 31 años, durante los cuales México experimentó un notable crecimiento económico y tuvo estabilidad política. Estos logros se realizaron con altos costos económicos y sociales, que pagaron los estratos menos favorecidos de la sociedad y la oposición política al régimen de Díaz. Durante la primera década del siglo XX estallaron varias crisis en diversas esferas de la vida nacional, que reflejaban el creciente descontento de algunos sectores con el porfiriato."

              />
             </Article>

             <Article>
              <Img src="http://creaturviajes.com/wp-content/uploads/2017/06/pantalla.jpg" />
              <Boxes  title="TITULO" text="Los antecedentes del conflicto se remontan a la situación de México bajo el porfiriato. Desde 1876 ejerció el poder en el país de manera dictatorial. La situación se prolongó 31 años, durante los cuales México experimentó un notable crecimiento económico y tuvo estabilidad política. Estos logros se realizaron con altos costos económicos y sociales, que pagaron los estratos menos favorecidos de la sociedad y la oposición política al régimen de Díaz. Durante la primera década del siglo XX estallaron varias crisis en diversas esferas de la vida nacional, que reflejaban el creciente descontento de algunos sectores con el porfiriato."
              />
             </Article>

            <Article>
              <Img src="http://creaturviajes.com/wp-content/uploads/2017/06/pantalla.jpg" />
             <Boxes  title="TITULO" text="Los antecedentes del conflicto se remontan a la situación de México bajo el porfiriato. Desde 1876 ejerció el poder en el país de manera dictatorial. La situación se prolongó 31 años, durante los cuales México experimentó un notable crecimiento económico y tuvo estabilidad política. Estos logros se realizaron con altos costos económicos y sociales, que pagaron los estratos menos favorecidos de la sociedad y la oposición política al régimen de Díaz. Durante la primera década del siglo XX estallaron varias crisis en diversas esferas de la vida nacional, que reflejaban el creciente descontento de algunos sectores con el porfiriato."
             />
            </Article>


           <Article>
            <Img src="http://creaturviajes.com/wp-content/uploads/2017/06/pantalla.jpg" />
            <Boxes  title="TITULO" text="Los antecedentes del conflicto se remontan a la situación de México bajo el porfiriato. Desde 1876 ejerció el poder en el país de manera dictatorial. La situación se prolongó 31 años, durante los cuales México experimentó un notable crecimiento económico y tuvo estabilidad política. Estos logros se realizaron con altos costos económicos y sociales, que pagaron los estratos menos favorecidos de la sociedad y la oposición política al régimen de Díaz. Durante la primera década del siglo XX estallaron varias crisis en diversas esferas de la vida nacional, que reflejaban el creciente descontento de algunos sectores con el porfiriato."
            />
           </Article>
          </Articulos>

            <Aside>
              <ImgLog src="http://creaturviajes.com/wp-content/themes/creatur/images/creatur.png" />
              <Publicidad />
              <ImgPubli src="https://userscontent2.emaze.com/images/91fc48c1-0aa2-4af9-99a0-f33d39b52a2d/76badd12f78b5d57f90c0d603a403a6c.png" />
            </Aside>

          </Section>

          <Footer>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.581530231525!2d-92.94406404991535!3d17.998195987654935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd834476d1d1b%3A0xffb203a77fb23ea3!2sCreatur!5e0!3m2!1ses-419!2smx!4v1511219395378" height="200" width="300"></iframe>
          </Footer>
        </Contenedor>
    );
  }
}

export default App;

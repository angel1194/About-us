
import React, { Component } from 'react';
import styled from 'styled-components';
import {Section, Article, Articulos, Aside,Img, ImgLog , ImgPubli,ArticleExample} from './Category.js';
import Publicidad from './Publicidad.js'
import Boxes from './Boxes.js'

import './App.css';

const Contenedor = styled.div  `
  display: flex;
  flex-flow: row wrap;
  flex-direction : colum;
 `;
 const Img6 = styled.img`
   width:295px;
   height:265px;
   border-radius: 6px !important;
   margin:auto;
   position: relative;
   right:-2px;
   :hover {
     -webkit-transform:rotateZ (-30deg);
   -ms-transform:rotateZ (-30deg);
   transform:rotateZ (-30deg);
    }


 `;
 const Parrafo = styled.p  `
 transition-duration: 5s;

       }
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
               <Img  src="http://creaturviajes.com/wp-content/uploads/2017/06/pantalla.jpg" />
              <Boxes  title="TITULO" text="Jesse Enlace permanente para comentar # 2 DE JUNIO DE 2013 Estoy de acuerdo, Chris Coyier rara vez echa de menos un detalle, que es una de las razones por las que css-tricks.com es uno de esos sitios 'ir a primero' para mí. Eso, y él usa un lenguaje práctico. He visto un par de sus screencasts de iTunes (podcasts de video) y es genial escuchar la voz de estos tutoriales."
              />
             </Article>
             <Article>
               <Img  src="http://creaturviajes.com/wp-content/uploads/2017/06/pantalla.jpg" />
              <Boxes  title="TITULO" text="Jesse Enlace permanente para comentar # 2 DE JUNIO DE 2013 Estoy de acuerdo, Chris Coyier rara vez echa de menos un detalle, que es una de las razones por las que css-tricks.com es uno de esos sitios 'ir a primero' para mí. Eso, y él usa un lenguaje práctico. He visto un par de sus screencasts de iTunes (podcasts de video) y es genial escuchar la voz de estos tutoriales. "  tex2="DHORTÓJGRÁFIAtAMBIÉN PUEDEN USARSE PONIENDO EL TEXTO EN NEGRITA, CURSIVA BIÉN PUEDEN USARSE PONIENDO EL TEXTO EN NEGRITA, CURSIVABIÉN PUEDEN USARSE PONIENDO EL TEXTO EN NEGRITA, CURSIVABIÉN PUEDEN USARSE PONIENDO EL TEXTO EN NEGRITA, CURSIVABIÉN PUEDEN USARSE PONIENDO EL TEXTO EN NEGRITA, CURSIVA Y LOS COLORES DEL ARCOIRIS."
              />
             </Article>

             <ArticleExample>
               <Img6 src="http://creaturviajes.com/wp-content/uploads/2017/06/pantalla.jpg" />
               <Parrafo>Funny thing about that… IE 10+ is currently the only browser that supports grid layout, so we can thankfully check them off of our list. :D As I understand it, Microsoft was the major player behind this standard. Basically, they took their WPF grid layout and ported it to the web, which is why they are so far ahead. They already had the code. Anyway, I think mainline chrome supports it behind the experimental flag. Really, I think we’re waiting on Safari and Mozilla at this point. CSS grid will be a wonderful thing when we can finally use it. </Parrafo>
             </ArticleExample>

             <ArticleExample>
               <Img6 src="http://creaturviajes.com/wp-content/uploads/2017/06/pantalla.jpg" />
               <Parrafo>cdddddddddddddddddddddd </Parrafo>
             </ArticleExample>
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

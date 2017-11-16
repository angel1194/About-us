
import React, { Component } from 'react';
import styled from 'styled-components';


const Title = styled.h3`
 font-family : Montserrat;
 margin-left : 35px;
 font-size: 25px;
 color : #4169E1	;
 &:hover {
    color: black;
  }
`;
const Info = styled.p`
 font-family : Roboto;
 text-align : justify;
 margin: 0px 25px 0px 25px;
`;
const Politicas = styled.div`
  display: flex;
  flex-flow : row wrap;
  background : blue;
`;
const Header = styled.div`
 display: flex;
 flex-direction: column;
`;


class Publicidad extends Component {
  render() {
    return (
      <div className ="Publicidad">
      <Header>
      <Title> Mision</Title>
	      <Info>
		      Satisfacer con calidad las necesidades de servicios turísticos
		        de nuestros clientes en forma personalizada y al mejor precio.
  	    </Info>


    <Title> Visíon </Title>
    <Info>
      Ser la primera alternativa en servicios turísticos de México,
      reconocidos por la Creatividad de
      nuestra gente y por la calidad de su servicio.
    </Info>

     <Title> Valores </Title>
              <ul>
              <li>Responsabilidad</li>
              <li>Honestidad</li>
               <li>Eficiencia</li>
               <li>Calidad</li>
               <li>Seguridad</li>
             </ul>
    </Header>
 </div>





    );
  }
}

export default Publicidad;

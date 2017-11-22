
import React, { Component } from 'react';
import styled from 'styled-components';

const Contenedor = styled.div  `
  display: flex;
  flex-flow: row wrap;
  flex-direction : colum;
 `;

 const Title = styled.h3`
  font-family : Montserrat;
  text-align : center;
  font-size: 25px;
  color : #4169E1;
  position: relative;

  left :85px;
  text-decoration: underline;
  &:hover {
     color: black;
   }
 `;
 const Info = styled.p`
  font-family : Roboto;
  text-align : justify;
  margin: 0px 25px 0px 25px;
  word-wrap: break-word;
  
 `;

 const Conte = styled.div`
   width : 100%;
   height: 100px;
   overflow: scroll;
   background : pink;
 `;



class Boxes extends Component {
  constructor(props){
    super(props);
    this.state ={
      visible : false
    }
  }
  handleClick(e){
    e.preventDefault();
    this.setState({
      visible : !this.state.visible
    })
  }

  render() {
    return (
        <Contenedor className="App">
        <Title onClick={this.handleClick.bind(this)}> {this.props.title}</Title>
        {this.state.visible ?
          <Conte>
          <Info>
          {this.props.text}
          {this.props.tex2}
         </Info>
           </Conte>
           : ""}
        </Contenedor>
    );
  }
}

export default Boxes;

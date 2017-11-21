
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
  display : block;
  &:hover {
     color: blue;
   }
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
            <Info>
            {this.props.text}
           </Info>
           : ""}
        </Contenedor>
    );
  }
}

export default Boxes;

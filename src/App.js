import React, { Component } from 'react';
import Category from './Category.js';
import Press from './Press.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
      <Press title="Misiön" text="Satisfacer con calidad las necesidades de serviciosturisticos de nuestros clientesen forma personalizada y al mejor precio." />
      <Category title ="Valores" items ={['Responsabilidad','Honestidad ','Eficiencia', 'Calidad' ,'Seguridad']}/>
       </ul>
      </div>
    );
  }
}

export default App;

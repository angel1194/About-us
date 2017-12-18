import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      empleadosOpen :{
        avatar : 'https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png',
        nombre : 'Desconocido XX',
        puesto : 'unknow',
        fecharelacion : 'unknow',
        edad :'unknow'
      },
      empleados :[{
        avatar : 'https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png',
        nombre : 'Claudia',
        puesto : 'DBA',
        fecharelacion : '15-02-89',
        edad :'39'
      },
      {
        avatar : 'https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png',
        nombre : 'Desconocido 2',
        puesto : 'Desarrollador',
        fecharelacion : '15-02-89',
        edad :'20'
      },
      {
        avatar : 'https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png',
        nombre : 'Desconocido 3',
        puesto : 'Diseñador web',
        fecharelacion : '15-02-89',
        edad :'45'
      },
      {
        avatar : 'https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png',
        nombre : 'Desconocido 4',
        puesto : 'Soporte tecnico',
        fecharelacion : '15-02-89',
        edad :'25'
      },
      {
        avatar : 'https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png',
        nombre : 'Desconocido 5',
        puesto : 'Consultor',
        fecharelacion : '15-02-89',
        edad :'35'
      }
    ]
    }
  }
  ChangeJob (empleados){
    const state = this.state;
    state.empleadosOpen =empleados;
    this.setState(state);
  }
  render() {
    const empleados = this.state.empleados;
    const empleadosOpen = this.state.empleadosOpen;
    return (
      <div id="contenedor">
        <div id="lista-empleados">
          <ul>
            {empleados.map((empleado, i)=> <EmpleadoItem OnClick={()=>{this.ChangeJob(empleado)}} key={i} datoempleado={empleado} /> )}
          </ul>
        </div>
        <div id="flexContainer">
            <Credencial empleado={empleadosOpen}/>
        </div>
      </div>
    );
  }
}


class EmpleadoItem extends Component {
  render() {
    const datoempleado = this.props.datoempleado
    return (
      <li onClick={this.props.OnClick} className="empleado-item">
        <label>Nombre: {datoempleado.nombre}</label>
      <label>Puesto :{datoempleado.puesto}</label>
      </li>
    );
  }
}

class Credencial extends Component {
  render(){
    const empleado = this.props.empleado
    return(
      <div id="credencial">
        <div id="imagen">
          <img src={empleado.avatar} />
        </div>
        <div id="contenido-credencial">
            <h2><label>Nombre:</label>{empleado.nombre}</h2>
            <p><label>Puesto:</label> {empleado.puesto}</p>
          <span><label>Relacion Laboral :</label>{empleado.fecharelacion} </span>
          <span><label>Edad :</label>{empleado.edad} </span>
        </div>
      </div>
    );
  }
}

export default App;

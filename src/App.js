import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

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
      empleados :[
      {
        avatar : 'https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png',
        nombre : 'persona 1',
        puesto : 'DBA',
        fecharelacion : '15-02-89',
        edad :'39'
      },
      {
        avatar : 'https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png',
        nombre : 'persona 2',
        puesto : 'DBA',
        fecharelacion : '15-02-89',
        edad :'39'
      },
      {
        avatar : 'https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png',
        nombre : 'persona 3',
        puesto : 'D2',
        fecharelacion : '15-02-89',
        edad :'39'
      },
      {
        avatar : 'https://www.shareicon.net/data/256x256/2017/01/06/868320_people_512x512.png',
        nombre : 'persona 4',
        puesto : 'DBA',
        fecharelacion : '15-02-89',
        edad :'39'
      }
    ],
    textoSimulado : [
      {
        parrafo : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
      },
      {
        parrafo : 'ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
      },
      {
        parrafo : 'amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
      },
      {
        parrafo : 'consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
      }
    ]

    }
  }
  ChangeEmployee(set){
    this.state.empleadosOpen=set;
    this.setState(this.state);
  }



  render() {
    const empleados = this.state.empleados;
    const empleadosOpen = this.state.empleadosOpen;
    const textoSimulado = this.state.textoSimulado;


/*
<div id="contenedor">
  <div id="lista-empleados">
    <ul>
      {empleados.map((empleado1, j)=><Empleado OnPress={()=>{this.ChangeEmployee(empleado1)}} key={j} empleado={empleado1.nombre}/>)}
    </ul>
  </div>

  <div id="flexContainer">
    <Credencial  empleado={empleadosOpen}/>
  </div>
</div>

*/
    return (
      <div id="contenedor">


      <div id="BoxContainer">
        {textoSimulado.map((texto , i)=><Parrafo  key={i} parrafo={texto.parrafo}/>)}
      </div>


      <div id="BoxContainer">
        <ObjetoArray />
      </div>

      <div id="BoxContainer">
        <Formulario/>
      </div>

      </div>


    );
  }
}

class Empleado extends Component {
  render(){
    const nombreEmpleado = this.props.empleado;
    return(
      <li  onClick={this.props.OnPress}>{nombreEmpleado}</li>
    )
  }
}



class Credencial extends Component {
  render(){
    const empleado = this.props.empleado
    return(
      <div id="credencial">
        <div id="imagen">
          <img  src={empleado.avatar}/>
        </div>
        <div id="contenido-credencial">
          <h3>{empleado.nombre}</h3>
          <h4>{empleado.puesto}</h4>
          <h4>{empleado.fecharelacion}</h4>
          <h4>{empleado.edad}</h4>
        </div>
      </div>
    );
  }
}

class Parrafo extends Component {
  constructor(props) {
    super(props);
      this.state={
        visible:false
      }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
   this.setState({
     visible : !this.state.visible
   })
 }

  render(){
    //const Descripcion = this.props.parrafos
    return(
      <div>
      {this.state.visible && <div className="border"> <p>{this.props.parrafo}</p> </div>}

      <div className="borderButton">
        <button onClick={this.handleClick}>Mostrar</button>
      </div>
      </div>

    )
  }

}

/*
*/
let examplesdat = {
  "1" : [
    {
      "example" : "React Basics",
      "ilustra" :  "https://cdn-images-1.medium.com/max/512/1*qUlxDdY3T-rDtJ4LhLGkEg.png",
      "elements1": "props",
      "elements2": "State",
      "element3" : "Height and Width",
      "element4" : "Layout with Flexbox"
    },
    {
      "example" : "React Basics",
      "ilustra" :  "https://cdn-images-1.medium.com/max/512/1*qUlxDdY3T-rDtJ4LhLGkEg.png",
      "elements1": "images",
      "elements2": "Animations",
      "element3" : "Timers",
      "element4" : "Accessibility"
    }
  ],
  "2":[
    {
      "example" : "React Basics",
      "ilustra" :  "https://cdn-images-1.medium.com/max/512/1*qUlxDdY3T-rDtJ4LhLGkEg.png",
      "elements1": "props",
      "elements2": "State",
      "element3" : "Height and Width",
      "element4" : "Layout with Flexbox"
    },
    {
      "example" : "React Basics",
      "ilustra" :  "https://cdn-images-1.medium.com/max/512/1*qUlxDdY3T-rDtJ4LhLGkEg.png",
      "elements1": "images",
      "elements2": "Animations",
      "element3" : "Timers",
      "element4" : "Accessibility"
    }
  ]
}


const Img = styled.img`
  width: 20%;
`;
class ObjetoArray extends Component {

  mapeo(){
    return Object.keys(examplesdat).map((key,i)=>{
     return(
       <div key={i}>
         <div><h4 className="Title">{key} </h4></div>
       {examplesdat[key].map((elementos,j)=>{
           return(
             <div key={j}>
               <Img src={elementos.ilustra} />
               <label>Descripcion : {elementos.example} </label>
             <p>{elementos.elements1}</p>
             </div>
           )
         })}
       </div>
     )
    })
  }
  mapeo2(){
  return Object.keys(examplesdat).map((key,z)=>{
    return(
      <div key={z}>
        <h3>{key}</h3>
      </div>
    )
  })
}
  render(){
    console.log(this.mapeo());
    return(
      <div className="borderBox2">
        <div>
          {this.mapeo()}
        </div>
        <div>
          {this.mapeo2()}
        </div>
      </div>
    )
  }
}

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state ={
      input :  ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   alert('Nombre enviado: ' + this.state.value);
   event.preventDefault();
 }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
       <label>
         Nombre:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
    )
  }
}

export default App;

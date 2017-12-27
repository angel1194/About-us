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
        parrafo : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
      },
      {
        parrafo : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
      },
      {
        parrafo : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
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



    return (
      <div>
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

      <div id="BoxContainer">
        {textoSimulado.map((texto , i)=><Parrafo  key={i} parrafos={texto.parrafo}/>)}
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
    const Descripcion = this.props.parrafos
    return(
      <div>
      {this.state.visible && <p className="border">{Descripcion}</p>}
      <button onClick={this.handleClick}>Mostrar</button>
      </div>

    )
  }
}

/*
<li>
        <h3 onClick={this.handleClick.bind(this)}> {this.props.title}</h3>
        <ul className={this.state.visible ? 'visible' : 'no-visible'}>
        <div><p>{this.props.text}</p> </div>
        </ul>
      </li>
      </div>

*/


/*
class ContentInf extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    return (
      <Contenedor>
        <Read onClick={this.handleClick}>Leer más</Read>
        {this.state.visible && <Info>{this.props.text}</Info>}
      </Contenedor>
    );
  }
}
*/



/*
testing(){
   return Object.keys(data).map((key,i)=>{
    return(
      <div key={i}>
        <DivTop><h4 className="Title">{key} </h4></DivTop>
        {data[key].map((tour,j)=>{
          return(
            <div className="containerFlex" key={j}>
              <ColumMarginLeft>
                <Img src={tour.image} />
              </ColumMarginLeft>
              <ColumMarginCenter className="parrafo">
              <Labels>Descripcion : {tour.descripcion} </Labels>
              {tour.text}
              </ColumMarginCenter>
              <ColumMarginRight>
                  <div className="containerSelect">

                    <label className="right">Adultos</label>
                    <SelectTour>
                        <option>1</option>
                        <option>2</option>
                      </SelectTour>
                    <label className="right">Niños</label>
                    <SelectTour>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                    </SelectTour>

                      <ButtonSearchTour onClick={()=>alert('esperando función')}>Agregar !!</ButtonSearchTour>
                  </div>
                </ColumMarginRight>

            </div>
          )
        })}
      </div>
    )
  })
}*/

export default App;

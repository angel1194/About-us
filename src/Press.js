import React, { Component } from 'react';
import './Category.css';

class Press extends Component {
  constructor(props) {
    super(props);
    this.state={
      visible:false
    };
  }

  handleClick(){
    event.preventDefault();
    this.setState({
      visible : !this.state.visible
    })
  }
  render() {
    return (
      <div className="Press">

      <li>
        <h3 onClick={this.handleClick.bind(this)}> {this.props.title}</h3>
        <ul className={this.state.visible ? 'visible' : 'no-visible'}>
        <div><p>{this.props.text}</p> </div>
        </ul>
      </li>
      </div>
    );
  }
}

export default Press;

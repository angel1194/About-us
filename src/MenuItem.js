import React, { Component } from 'react';

import './App.css';

class MenuItem extends Component {
  render() {
    return (
      <div className="Category">
       <li>
        <a hrfe='#'>{this.props.name} </a>
       </li>
      </div>
    );
  }
}

export default MenuItem;

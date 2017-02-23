import React, { Component } from 'react';
import './App.css';

import HeaderComponent from './Header';

class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;

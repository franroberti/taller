import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ClientsForm} from './clients/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ClientsForm/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ClientsForm from './clients/form';
import NavBar from "./navbar";




class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ClientsForm />
      </div>
    );
  }
}

export default App;

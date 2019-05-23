import React, { Component } from 'react';
import './App.css';
import HomeScreen from "./components/screens/homeScreen/index";
import data from "./wikis.json";

class App extends Component {
  render() {
    return (
      <div>
        <HomeScreen services={data} />
      </div>
    );
  }
}

export default App;

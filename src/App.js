import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import Header from './Components/Header'
import MostPopular from './Components/Most-Popular'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      recipes: []
    };
  }

  

  render() {
    return(
        <div className="App">
          <Header/>
          <MostPopular/>
        </div>
    )
    }
}

export default App;

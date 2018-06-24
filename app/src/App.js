import React, {Component}           from 'react';
import                              './App.css';
import Intro                        from "./components/Intro.js"
import Teams                        from "./components/teams.js"
import Data                         from "./components/fifa-worldcup-2018/data.json";

export default class App extends Component {
  state = Data;
  render() {
    return (
      <div className = "App">
        <Intro />
        <Teams teams = {this.state.teams} />
      </div>
    );
  }; 
}



import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Map } from "./pages";
import Control from "./pages/Control";
import { api } from "./services/callApi";

export default class App extends Component {
  componentWillMount() {
    api.getCurrMatch()
  }
  renderAgent = () => {
    let agents = []
    for (let i = 1; i <= 15; i++) {
      agents.push(
      <div>
        {i}
        <Control id={i}/>
        {/* <br/> */}
      </div>)
    }
    return agents
  }
  render() {
    return (
      <div>
        <input
          placeholder="Team ID"
          onChange={e => this.setState({ teamID: e.target.value })}
        />
        <button
          onClick={() => localStorage.setItem("teamID", this.state.teamID)}
        >
          Set team id
        </button>
        <br />
        <input
          placeholder="Match ID"
          onChange={e => this.setState({ matchID: e.target.value })}
        />
        <button
          onClick={() => localStorage.setItem("matchID", this.state.matchID)}
        >
          Set match id
        </button>
        <br />
        <input
          placeholder="TOKEN"
          onChange={e => this.setState({ token: e.target.value })}
        />
        <button
          onClick={() => localStorage.setItem("procon", this.state.token)}
        >
          Set Token
        </button>
        <br />
        <Map />
        
        {
          this.renderAgent()
        }
      </div>
    );
  }
}

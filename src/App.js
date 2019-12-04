import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Map } from "./pages";
import Control from "./pages/Control";

export default class App extends Component {
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

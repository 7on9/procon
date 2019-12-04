import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Map } from "./pages";
import { api } from "./services/callApi";

export default class App extends Component {
  componentWillMount(){
    api.getCurrMatch();
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
        <button
          onClick={() => localStorage.setItem("procon", this.state.token)}
        >
          Reload Map
        </button>
        <Map />
      </div>
    );
  }
}

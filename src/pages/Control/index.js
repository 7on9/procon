import React, { Component } from "react";
import { dataProvider } from "../../services/dataProvider";
import { api } from "../../services/callApi";

class Control extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: JSON.parse(localStorage.getItem("matches")),
      currMatch: JSON.parse(localStorage.getItem("currMatch")),
      listActions: []
    };
  }
  onAddAction = async (id, x, y, type) => {
    let actions = await localStorage.getItem("actions");
    actions.forEach(agent => {
      if (agent.agentId === id) {
        agent.dx = x;
        agent.dy = y;
        agent.type = type;
      }
    })
    api.sendAction(actions)
  };
  render() {
    return (
      <div>
        <button>
          
        </button>
        <table>
          <tr>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, -1, -1, 'move')} >⬁</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, 0, -1, 'move')}>⇧</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, -1, 1, 'move')}>⬀</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, -1, 0, 'move')}>⇦</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, 0, 0, 'stay')}>⤫</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, 1, 0, 'move')}>⇨</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, -1, 1, 'move')}>⬃</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, 0, 1, 'move')}>⇩</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, 1, 1, 'move')}>⬂</button>
            </td>
          </tr>
        </table>
        Delete
        <table>
          <tr>
            <td>
              <button style={{ width: "100%", height: "100%" }} nClick={() => this.onAddAction(this.props.id, -1, -1, 'delete')}>⬁</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, 0, -1, 'delete')}>⇧</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, -1, 1, 'delete')}>⬀</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, -1, 0, 'delete')}>⇦</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }}  onClick={() => this.onAddAction(this.props.id, 0, 0, 'delete')}>⤫</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }}  onClick={() => this.onAddAction(this.props.id, 1, 0, 'delete')}>⇨</button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ width: "100%", height: "100%" }} onClick={() => this.onAddAction(this.props.id, -1, 1, 'delete')}>⬃</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }}  onClick={() => this.onAddAction(this.props.id, 0, 1, 'delete')}>⇩</button>
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" }}  onClick={() => this.onAddAction(this.props.id, 1, 1, 'delete')}>⬂</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Control;

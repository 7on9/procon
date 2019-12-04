import React, { Component } from "react";

export default class Map extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      mapPoint: localStorage.getItem('json')
    }
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>A</th>
            <td>1</td>
            <td>3</td>
          </tr>
          <tr>
            <th>A</th>
            <td>1</td>
            <td>3</td>
          </tr>
          <tr>
            <th>A</th>
            <td>1</td>
            <td>3</td>
          </tr>

          <tr>
            <th>B</th>
            <td>2</td>
            <td>4</td>
          </tr>
        </table>
      </div>
    );
  }
}

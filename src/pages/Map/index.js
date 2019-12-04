import React, { Component } from "react";

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: JSON.parse(localStorage.getItem("matches")),
      currMatch: JSON.parse(localStorage.getItem("currMatch"))
    };
  }
  refeshMap = async () => {
    let { points, tiled, teamID } = this.state.currMatch;
    this.setState({ points, tiled });
  };
  render() {
    let { point, points, tiled, currMatch } = this.state;
    let { teams } = currMatch;
    let { teamID } = teams[0];
    console.log(points);
    return (
      <div>
        <text>Point: {point}</text>
        <button>Get match</button>
        <button onClick={() => this.refeshMap()}>Refesh Map</button>
        <table>
          {points
            ? points.map((row, r) => (
                <tr>
                  {row.map((p, c) => (
                    <td
                      style={{
                        backgroundColor: !tiled[r][c]
                          ? "#fff"
                          : tiled[r][c] === teamID
                          ? "green"
                          : "red"
                      }}
                    >
                      {p}
                    </td>
                  ))}
                </tr>
              ))
            : null}
        </table>
      </div>
    );
  }
}

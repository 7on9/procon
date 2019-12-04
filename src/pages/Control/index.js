import React, { Component } from 'react'

export default class Control extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <button style={{ width: '100%', height: '100%' }}>
              ⬁
              </button>
            </td>
            <td>
              <button style={{ width: '100%', height: '100%' }}>
              ⇧
              </button>
            </td>
            <td>
              <button style={{ width: '100%', height: '100%' }}>
              ⬀
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ width: '100%', height: '100%' }}>
              ⇦
              </button>
            </td>
            <td>
              <button style={{ width: '100%', height: '100%' }}>
              ⤫
              </button>
            </td>
            <td>
              <button style={{ width: '100%', height: '100%' }}>
              ⇨
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button style={{ width: '100%', height: '100%' }}>
              ⬃
              </button>
            </td>
            <td>
              <button style={{ width: '100%', height: '100%' }}>
              ⇩
              </button>
            </td>
            <td>
              <button style={{ width: '100%', height: '100%' }}>
              ⬂
              </button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

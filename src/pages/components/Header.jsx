import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>Hello !</h2>
          <button className="logout">Log out</button>
        </header>
      </div>
    )
  }
}

export default Header

import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>Welcome !</h2>
          <button className="logout">Log out</button>
        </header>
      </div>
    )
  }
}

export default Header

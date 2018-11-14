import React, { Component } from 'react'
import Auth from '../auth/auth.js'

const auth = new Auth()

class Header extends Component {
  _logout = () => {
    auth.logout()
  }

  render() {
    return (
      <div>
        <header>
          <h2>Hello !</h2>
          <button onClick={this._logout} className="logout">
            Log out
          </button>
        </header>
      </div>
    )
  }
}

export default Header

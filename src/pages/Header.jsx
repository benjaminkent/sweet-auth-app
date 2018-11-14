import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
          <h2 className="hello">Hello {this.props.name}!</h2>
          <Link to="/">
            <button onClick={this._logout} className="logout">
              Log out
            </button>
          </Link>
        </header>
      </div>
    )
  }
}

export default Header

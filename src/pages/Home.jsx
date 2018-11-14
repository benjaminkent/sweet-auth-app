import React, { Component } from 'react'

import Header from './Header'

class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <Header />
        <main className="home-main">
          <div className="home-message">
            <p>You successfully logged in. Congratulations!</p>
            <p>Now enjoy your beautiful face.</p>
          </div>
          <img
            className="profile-image"
            src="https://images.unsplash.com/photo-1542099720-6a8998d675d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=57382326a862347ca5c113fa30be535f&auto=format&fit=crop&w=802&q=80"
            alt="profile"
          />
        </main>
      </div>
    )
  }
}

export default Home

import React, { Component } from 'react'

import Header from './Header'

class Home extends Component {
  state = {
    profile: ''
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      this.props.auth.getProfile((err, profile) => {
        this.setState({ profile, err })
      })
    }
  }

  render() {
    return (
      <div className="home-body">
        <Header name={this.state.profile.given_name} />
        <main className="home-main">
          <div className="home-message">
            <p>You successfully logged in. Congratulations!</p>
            <p>
              Now enjoy your beautiful face <i className="far fa-grin-alt" />
            </p>
          </div>
          <img
            className="profile-image"
            src={this.state.profile.picture}
            alt="profile"
          />
        </main>
      </div>
    )
  }
}

export default Home

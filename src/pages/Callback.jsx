import React, { Component } from 'react'

class Callback extends Component {
  render() {
    return (
      <div className="loading-container">
        <p className="loading">loading...</p>
        <img
          className="loading-image"
          src="https://media2.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=3640f6095bec7b6a4c59474b59d44064"
          alt="loading"
        />
      </div>
    )
  }
}

export default Callback

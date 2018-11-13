import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Splash from './pages/Splash'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App

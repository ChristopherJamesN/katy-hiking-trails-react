import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Navigation from './containers/Navigation';
import TrailsPage from '.containers/TrailsPage'
import './App.css';

class App extends Component {
  render() {
    return ( <
      Router >
      <
      div className = "Nav-home" >
      <
      Navigation / >
      <
      div className = "App" >
      <
      Route path = "/trails"
      component = {
        TrailsPage
      }
      /> <
      Route exact path = "/"
      component = {
        Homepage
      }
      /> <
      br > < /br> <
      Footer / >
      <
      /div> <
      /div> <
      /Router>
    )
  }
}
}

export default App;

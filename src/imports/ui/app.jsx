import React, { Component } from 'react';
import Navbar from './components/nav/navbar';
import Dashboard from './pages/dashboard';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    )
  }
}


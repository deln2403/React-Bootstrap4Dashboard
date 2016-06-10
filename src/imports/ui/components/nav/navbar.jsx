import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {};
  componentDidMount() {};
  componentWillUpdate() {};
  componentDidUpdate() {};


  // RENDER
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
        <button
          className="navbar-toggler hidden-sm-up pull-right"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar"
        >
            ☰
        </button>
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-toggleable-xs" id="collapsingNavbar">
            <ul className="nav navbar-nav pull-right">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#features">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#myAlert" data-toggle="collapse">Wow</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                </li>
            </ul>
            <form className="nav navbar-nav form-inline pull-xs-right">
              <input type="text" className="form-control nav-item" placeholder="Username"/>
              <input type="text" className="form-control nav-item" placeholder="Password"/>
              <button className="btn btn-success-outline nav-item" type="submit">Search</button>
            </form>
          </div>
      </nav>
    );
  }
}  
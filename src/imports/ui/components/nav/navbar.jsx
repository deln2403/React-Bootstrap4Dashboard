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
      <nav className="navbar navbar-fixed-top navbar-dark bg-primary">
        <button
          className="navbar-toggler hidden-sm-up pull-right"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar"
        >
            ☰
        </button>
        <a className="navbar-brand" href="#">
          <i className="fa fa-circle-o"></i>
          <i className="fa fa-circle-o"></i>
          <i className="fa fa-circle-o"></i>
        </a>
        <div className="collapse navbar-toggleable-xs" id="collapsingNavbar">
            <ul className="nav navbar-nav pull-right">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#myAlert" data-toggle="collapse">Wow</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                </li>
            </ul>
          </div>
      </nav>
    );
  }
}  

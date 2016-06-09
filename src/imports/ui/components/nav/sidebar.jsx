import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

export default class Sidebar extends Component {
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
     <div className="sidebar col-md-3 col-lg-2 sidebar-offcanvas" id="sidebar" role="navigation">
        <ul className="nav nav-sidebar nav-pills nav-stacked">
          <li className="nav-item"><a className="nav-link" href="#">Overview</a></li>
          <li className="nav-item active"><a className="nav-link" href="#">Reports</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Analytics</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Export</a></li>
          <li className="nav-item"><a className="nav-link" href="">Nav item</a></li>
          <li className="nav-item"><a className="nav-link" href="">Nav item</a></li>
          <li className="nav-item"><a className="nav-link" href="">Another</a></li>
          <li className="nav-item"><a className="nav-link" href="">Nav item</a></li>
          <li className="nav-item"><a className="nav-link" href="">One more</a></li>
        </ul>
      </div>
    );
  }
}  

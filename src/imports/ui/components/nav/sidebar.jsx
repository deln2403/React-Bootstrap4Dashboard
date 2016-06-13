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
          <li className="nav-item">
            <a className="nav-link" href="#cardsSimple">Simple Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#circles">Circular Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gridLayout">GridLayout</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cardsDeck">Cards Deck</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#masonryStyle">MasonryStyle</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#variousLayouts">VariousLayouts</a>
          </li>

        </ul>
      </div>
    );
  }
}  

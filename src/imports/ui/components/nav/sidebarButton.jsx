import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

export default class SidebarButton extends Component {
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
      <p className="hidden-md-up">
        <button type="button" className="btn btn-primary-outline btn-sm" data-toggle="offcanvas"><i className="fa fa-chevron-left"></i> Menu</button>
      </p>
    );
  }
}  

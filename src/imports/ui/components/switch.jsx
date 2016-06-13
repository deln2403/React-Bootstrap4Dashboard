import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';

export default class Switch extends Component {
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
      <div className="onoffswitch">
        <input
          type="checkbox"
          readOnly
          className="onoffswitch-checkbox"
          checked={this.props.checked}
          ref="onoffswitch"
          id="myonoffswitch"
        />
        <label
          className="onoffswitch-label"
          for="myonoffswitch"
          onClick={this.props.toggle}
        ></label>
      </div>
    );
  }
}  


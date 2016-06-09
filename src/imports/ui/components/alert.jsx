import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';

export default class Alert extends Component {
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
     <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
       <button type="button" className="close" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true">×</span>
         <span className="sr-only">Close</span>
       </button>
       <strong>Holy guacamole!</strong> It's free.. this is an example theme.
     </div>
    );
  }
}  


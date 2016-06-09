import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';

export default class CardsSimple extends Component {
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
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="card card-inverse card-primary">
            <div className="card-block bg-primary">
              <div className="rotate">
                <i className="fa fa-hand-spock-o fa-5x"></i>
              </div>
              <h6 className="text-uppercase">Users</h6>
              <h1 className="display-1">134</h1>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card card-inverse card-success">
            <div className="card-block bg-success">
              <div className="rotate">
                <i className="fa fa-user fa-5x"></i>
              </div>
              <h6 className="text-uppercase">Users</h6>
              <h1 className="display-1">134</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card card-inverse card-danger">
            <div className="card-block bg-danger">
              <div className="rotate">
                <i className="fa fa-list fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Posts</h6>
              <h1 className="display-1">87</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card card-inverse card-info">
            <div className="card-block bg-info">
              <div className="rotate">
                <i className="fa fa-twitter fa-5x"></i>
              </div>
              <h6 className="text-uppercase">Tweets</h6>
              <h1 className="display-1">125</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card card-inverse card-warning">
            <div className="card-block bg-warning">
              <div className="rotate">
                <i className="fa fa-share fa-5x"></i>
              </div>
              <h6 className="text-uppercase">Shares</h6>
              <h1 className="display-1">36</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}  


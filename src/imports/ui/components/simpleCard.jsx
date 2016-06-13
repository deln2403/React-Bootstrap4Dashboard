import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';
import {SimpleCards } from '../../api/collections';

export default class SimpleCard extends Component {
  constructor(props) {
    super(props);
    this.removeCard = this.removeCard.bind(this);
  }

  componentWillMount() {};
  componentDidMount() {};
  componentWillUpdate() {};
  componentDidUpdate() {};

  removeCard(event) {
    event.preventDefault();
    SimpleCards.remove(this.props.card._id);
  }

  // RENDER
  render() {

    const cstyle = classnames({
      [`card-${this.props.card.alert.toLowerCase()}`]: true,
    },'card card-inverse');
 
    const ccolor = classnames({
      [`bg-${this.props.card.alert.toLowerCase()}`]: true,
    },'card-block');

    const cicon = classnames(
    'fa', {
      [`${this.props.card.icon}`]: true, 
    }, 'fa-5x');

    return (
      <div className="col-lg-3 col-md-6">
        <div className={cstyle}>
          <div className={ccolor}>
            <button
              id="rmItemBtn"
              className="btn btn-secondary btn-sm pull-right"
              onClick={this.removeCard}>
              &times;
            </button>
            <div className="rotate">
              <i className={cicon}></i>
            </div>
            <h6 className="text-uppercase">{this.props.card.alert}</h6>
            <h1 className="display-1">{this.props.card.number}</h1>
          </div>
        </div>
      </div>
    );
  }
}  



import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';
import {CircleCards } from '../../api/collections';

export default class CircleCard extends Component {
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
    CircleCards.remove(this.props.card._id);
  }
// `card-${this.props.card.alert.toLowerCase()}`
  // RENDER
  render() {
    return (
      <div className="col-xs-6 col-sm-3 placeholder text-xs-center">
        <img
          src={"//placehold.it/200/dddddd/fff?text="+this.props.card.number}
          className="center-block img-responsive img-circle"
          alt="Generic placeholder thumbnail"
        />
        <h4>{this.props.card.title}</h4>
        <span className="text-muted">{this.props.card.description}</span>
        <button
          id="rmItemBtn"
          className="btn btn-secondary btn-sm pull-right"
          onClick={this.removeCard}>
          &times;
        </button>
      </div>
    );
  }
}  



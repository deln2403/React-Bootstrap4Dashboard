import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';

/* Collection */
import {DeckCards } from '../../api/collections';

export default class DeckCard extends Component {
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
    DeckCards.remove(this.props.card._id);
  }

  // RENDER
  render() {
    const cstyle = classnames(
    'card card-inverse', {
      [`card-${this.props.card.alert.toLowerCase()}`]: true,
    }, 'text-center');
 
    return (
      <div className={cstyle}>
        <div className="card-block">

          <blockquote className="card-blockquote">
            <p>{this.props.card.paragraph}</p>
            <footer>
              {this.props.card.sentence} <cite title="Source Title">
                {this.props.card.word}
              </cite>
              <button
                id="rmItemBtn"
                className="btn btn-secondary btn-sm pull-right"
                onClick={this.removeCard}>
                &times;
              </button>
            </footer>
          </blockquote>

        </div>
      </div>
    );
  }
}  



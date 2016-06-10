import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';
import { Random } from 'meteor/random';
import { CardAlerts, FaIcons, SimpleCards } from '../../api/collection';
import SimpleCard from '../components/simpleCard.jsx';

export default class CardsSimple extends Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.insertCard = this.insertCard.bind(this);
  }

  componentWillMount() {
    if (this.SimpleCardsCount < 4) {
      this.insertCard();  
    }    
  };

  componentDidMount() {};
  componentWillUpdate() {};
  componentDidUpdate() {};

  renderCards() {
    return this.props.SimpleCards.map((card) => (
      <SimpleCard key={card._id} card={card}/>
    ));
  }

  newNumber() {
    numbers = "0123456789";
    num1 = String(Random.choice(numbers));
    num2 = String(Random.choice(numbers));
    num3 = String(Random.choice(numbers));
    return num1+num2+num3
  }  

  insertCard(event) {
    event.preventDefault();
    SimpleCards.insert({
      createdAt: new Date(), // current time
      number: this.newNumber(),
      alert: (Random.choice(this.props.CardAlerts)).name,
      icon: (Random.choice(this.props.FaIcons)).className,
    });

  }

  // RENDER
  render() {
    return (
      <div>

        <button
          type="button"
          className="newItemBtn btn btn-secondary btn-md"
          onClick={this.insertCard}>
          New Card <i className="fa fa-chevron-right"></i>
        </button>

        <div className="row">
          {this.renderCards()}
        </div>

      </div>
    );
  }
}  


CardsSimple.propTypes = {
  CardAlerts: PropTypes.array.isRequired,
  FaIcons: PropTypes.array.isRequired,
  SimpleCards: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    CardAlerts: CardAlerts.find({}).fetch(),
    FaIcons: FaIcons.find({}).fetch(),
    SimpleCards: SimpleCards.find({}, { sort: { createdAt: -1 } }).fetch(),
    SimpleCardsCount: SimpleCards.find({}).count(),
  };
}, CardsSimple);



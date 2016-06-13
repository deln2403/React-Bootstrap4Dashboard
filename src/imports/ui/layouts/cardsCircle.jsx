import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';
import { Random } from 'meteor/random';

/* Collection */
import { CircleCards } from '../../api/collections';

/* Components */
import Switch from '../components/switch';
import CircleCard from '../components/circleCard';


export default class CardsCircle extends Component {
  constructor(props) {
    super(props);
    this.toggleDisplayContent = this.toggleDisplayContent.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.insertCard = this.insertCard.bind(this);
  
    this.state = {
      displayContent: true,
    }
  }

  componentWillMount() {};
  componentDidMount() {};
  componentWillUpdate() {};
  componentDidUpdate() {};

  toggleDisplayContent() {
    this.setState({displayContent: !this.state.displayContent});
  }

  renderCards() {
    return this.props.CircleCards.map((card) => (
      <CircleCard key={card._id} card={card} />
    ));
  }

  insertCard(event) {
    event.preventDefault();
    CircleCards.insert({
      createdAt: new Date(), // current time
      title: Fake.word(),
      description: Fake.sentence(3),
      number: String(Random.choice("0123456789")),
    });
  }

  // RENDER
  render() {
    return (
      <section>
        <a id="circles"></a>
        <hr />
        <Switch
          checked={this.state.displayContent}
          toggle={this.toggleDisplayContent}
        />
        <h2 className="sectionTitle">Circular Cards</h2>

        { this.state.displayContent ? (
        <div>
          <button
            className="newItemBtn btn btn-secondary btn-md"
            onClick={this.insertCard}>
            New <i className="fa fa-chevron-right"></i>
          </button>
          <div className="row placeholders">
           {this.renderCards()} 
          </div>
        </div>
        ) : '' }
      </section>
    );
  }
}  

CardsCircle.propTypes = {
  CircleCards: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    CircleCards: CircleCards.find({}, { sort: { createdAt: -1} }).fetch(),
    cardCount: CircleCards.find({}).count(),
  }
}, CardsCircle);



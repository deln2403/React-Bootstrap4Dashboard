import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';
import { Random } from 'meteor/random';

/* Collections */
import { AlertTypes, DeckCards } from '../../api/collections';

/* Components */
import Switch from '../components/switch';
import DeckCard from '../components/deckCard.jsx';


export default class CardsDeck extends Component {
  constructor(props) {
    super(props);
    this.toggleDisplayContent = this.toggleDisplayContent.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.toggleInsert = this.toggleInsert.bind(this);
    this.insertCard = this.insertCard.bind(this);

    this.state = {
      displayContent: false,
      allowInsert: true,
    }
  }

  componentWillMount() {};
  componentDidMount() {};
  componentWillReceiveProps() {};
  componentWillUpdate() {};
  componentDidUpdate() {
    this.toggleInsert();
  }

  toggleDisplayContent() {
    this.setState({displayContent: !this.state.displayContent});
  }

  toggleInsert() {
    if (this.state.allowInsert && (this.props.CardCount >= 6)) {
      this.setState({ allowInsert: false });
    } else if (!this.state.allowInsert && (this.props.CardCount <= 5)) { 
      this.setState({ allowInsert: true });
    }
  }

  renderCards() {
    return this.props.DeckCards.map((card) => (
      <DeckCard key={card._id} card={card} />
    ));
  }

  insertCard(event) {
    event.preventDefault();
   
    DeckCards.insert({
      createdAt: new Date(), // current time
      alert: (Random.choice(this.props.AlertTypes)).className,
      paragraph: Fake.paragraph(1),
      sentence: Fake.sentence(1),
      word: Fake.word(),
    });
  }

  // RENDER
  render() {
    return (
      <section>
        <a id="cardsDeck"></a>
        <hr />
        <Switch
          checked={this.state.displayContent}
          toggle={this.toggleDisplayContent}
        />
        <h2 className="sectionTitle">Card Deck</h2>

        { this.state.displayContent ? (
        <div>
          <h4 className="sub-header">Use card decks for equal height rows of cards</h4>
          <button
            type="button"
            disabled={!this.state.allowInsert}
            className="newItemBtn btn btn-secondary btn-md"
            onClick={this.insertCard}>
            New <i className="fa fa-chevron-right"></i>
          </button>

          <div className="card-deck-wrapper">
            <div className="card-deck">
              {this.renderCards()}
            </div>
          </div>

        </div>
        ) : '' }
      </section>
    );
  }
}  

CardsDeck.propTypes = {
  AlertTypes: PropTypes.array.isRequired,
  DeckCards: PropTypes.array.isRequired,
  CardCount: PropTypes.number.isRequired,
}

export default createContainer(() => {
  return {
    AlertTypes: AlertTypes.find({}).fetch(),
    DeckCards: DeckCards.find({}, { sort: { createdAt: -1 } }).fetch(),
    CardCount: DeckCards.find({}).count(),
  }
}, CardsDeck);





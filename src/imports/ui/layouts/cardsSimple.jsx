import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';
import { Random } from 'meteor/random';

/* Collections */
import { AlertTypes, FaIcons, SimpleCards } from '../../api/collections';

/* Components */
import Switch from '../components/switch';
import SimpleCard from '../components/simpleCard.jsx';


export default class CardsSimple extends Component {
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
      alert: (Random.choice(this.props.AlertTypes)).className,
      icon: (Random.choice(this.props.FaIcons)).className,
    });

  }

  // RENDER
  render() {
    return (
      <section>
        <a id="cardsSimple"></a>
        <hr />
        <Switch
          checked={this.state.displayContent}
          toggle={this.toggleDisplayContent}
        />
        <h2 className="sectionTitle">Simple Cards</h2>

        { this.state.displayContent ? (
        <div>
          <button
            type="button"
            className="newItemBtn btn btn-secondary btn-md"
            onClick={this.insertCard}>
            New <i className="fa fa-chevron-right"></i>
          </button>

          <div className="row">
            {this.renderCards()}
          </div>
        </div>
        ) : '' }
      </section>
    );
  }
}  


CardsSimple.propTypes = {
  AlertTypes: PropTypes.array.isRequired,
  FaIcons: PropTypes.array.isRequired,
  SimpleCards: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    AlertTypes: AlertTypes.find({}).fetch(),
    FaIcons: FaIcons.find({}).fetch(),
    SimpleCards: SimpleCards.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, CardsSimple);



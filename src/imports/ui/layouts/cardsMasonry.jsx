import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';
import { Random } from 'meteor/random';

/* Collections */
import { AlertTypes, MasonCards } from '../../api/collections';

/* Components */
import Switch from '../components/switch';
import MasonCard from '../components/masonCard';


export default class CardsMasonry extends Component {
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
    return this.props.MasonCards.map((card) => (
      <MasonCard key={card._id} card={card} />
    ));
  }

  camelCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getFakeTitle() {
    let size = Random.choice([1,2,3,4]);
    let title;

    for (i = 0; i < size; i++) {
      title += Fake.word() + " ";
    }
    return title;
  }

  insertCard(event) {
    event.preventDefault();
    MasonCards.insert({
      createdAt: new Date(),
      title: this.camelCase(this.getFakeTitle()).trim(),
      text: Fake.paragraph(2),
      footer: (Fake.sentence(5)).replace('.','')
    });
  }

  // RENDER
  render() {
    return (
      <section>
        <a id="masonryStyle"></a>
        <hr />
        <Switch
          checked={this.state.displayContent}
          toggle={this.toggleDisplayContent}
        />
        <h2 className="sectionTitle">Masonry-style grid columns</h2>
    
        { this.state.displayContent ? (
        <div>
          <h4>with Bootstrap 4 flexbox</h4>
          <button
            type="button"
            className="newItemBtn btn btn-secondary btn-md"
            onClick={this.insertCard}>
            New <i className="fa fa-chevron-right"></i>
          </button>

          <div className="card-columns">
           {this.renderCards()}
          </div>
        </div>
      ) : '' }
      </section>
    );
  }
}  

CardsMasonry.propTypes = {
  AlertTypes: PropTypes.array.isRequired,
  MasonCards: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    AlertTypes: AlertTypes.find({}).fetch(),
    MasonCards: MasonCards.find({}, { sort: { createdAt: -1 } }).fetch(),
  }
}, CardsMasonry);

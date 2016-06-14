import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';
import { Random } from 'meteor/random';

/* Collections */
import { MasonCards } from '../../api/collections';

export default class MasonCard extends Component {
  constructor(props) {
    super(props);
    this.removeCard = this.removeCard.bind(this);


    const c10 = [true,false,false,false,false,
                 false,false,false,false,false];
    const c20 = [true,false,false,false,false];                 
    const c25 = [true,false,false,false];                 
    const c33 = [true,true,false];
    const c50 = [true,false];
    const c66 = [true,true,false];
    const c100 = [true];

    this.state = {
      imageOnly: Random.choice(c10),
      color: Random.choice(c20),
      image: Random.choice(c20),
      title: Random.choice(c25),
      text: Random.choice(c66),
      footer: Random.choice(c50),
    }
  }

  componentWillMount() {};
  componentDidMount() {

    if (!this.state.title && !this.state.text) {
      this.setState({text: true});
    }

    if (this.state.title) {
      this.setState({text: true});
    }

    if (this.state.text && !this.state.title) {
      this.setState({footer: true});
    }

    if (this.state.footer) {
      this.setState({text: true});
    }

    if (this.state.imageOnly) {
      this.setState({
        color: false
      });
    }

    if (this.state.color) {
      this.setState({
        image: false,
        title: false,
        text: true,
        footer: true,
      });
    }
  };
  componentWillUpdate() {};
  componentDidUpdate() {};

  removeCard(event) {
    event.preventDefault();
    MasonCards.remove(this.props.card._id);
  }

  // RENDER
  render() {
    const ccolor = classnames(
    'card', {
      'card-inverse': !( this.state.color ) ? false : true,
      'card-primary': !( this.state.color ) ? false : true,
      'text-xs-center': !( this.state.color ) ? false : true,
    });

    return (
      <div className={ccolor}> {/* start card */}

        {/* image only */}
        { this.state.imageOnly ? ( 
        <img
          className="card-img-top img-responsive"
          src="//placehold.it/600x200/444/fff?text=..."
          alt="Card image cap"/>
        ) : (  
        <div> {/* card content */}

          {/* image */}
          { this.state.image ? ( 
          <img
            className="card-img-top img-responsive"
            src="//placehold.it/600x200/444/fff?text=..."
            alt="Card image cap"/>
          ) : '' }

          <div className="card-block"> {/* start card block */}

            { this.state.title ? (
            <h4 className="card-title">{this.props.card.title}</h4>
            ) : '' }

            { this.state.text ? (
            <p className="card-text">{this.props.card.text}</p>
            ) : '' }

          </div>
        </div>
        )}
        <div className="card-block"> {/* start card block */}
          <footer>
            { this.state.footer ? (
              <small className="text-muted">{this.props.card.footer}</small>
            ) : '' }
            <button
              id="rmItemBtn"
              className="btn btn-secondary btn-sm pull-right"
              onClick={this.removeCard}>
              &times;
            </button>
          </footer>
        </div>
      </div>
    );
  }
}  


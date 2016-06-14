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

    this.state = {
      imageOnly: Random.choice([true,false,false,false,false,false,false]),
      image: Random.choice([true,false,false,false]),
      title: Random.choice([true,true,true,false]),
      text: Random.choice([true,true,false]),
      footer: Random.choice([true,false]),
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
  };
  componentWillUpdate() {};
  componentDidUpdate() {};

  removeCard(event) {
    event.preventDefault();
    MasonCards.remove(this.props.card._id);
  }

  // RENDER
  render() {
    const someClassName = classnames(
    'card', {
      dynamicClass: !( this.state.someFlag ) ? true : false,
    },'staticClass');
 
    return (
      <div className="card"> {/* start card */}

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
        <footer>
          <p className="card-text">
          { this.state.footer ? (
            <small className="text-muted">{this.props.card.footer}</small>
          ) : '' }
          <button
            id="rmItemBtn"
            className="btn btn-secondary btn-sm pull-right"
            onClick={this.removeCard}>
            &times;
          </button>
          </p>
        </footer>
      </div>
    );
  }
}  

/*
<!-- Card 1 -->
<div className="card">
  <img
    className="card-img-top img-responsive"
    src="//placehold.it/600x200/444/fff?text=..."
    alt="Card image cap"/>
  <div className="card-block">
    <h4 className="card-title">Card title that wraps to a new line</h4>
    <p className="card-text">
      This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    </p>
  </div>
</div>


<!-- Card 2 -->
<div className="card card-block">
  <blockquote className="card-blockquote">
    <p>Bootstrap 4 will be lighter and easier to customize.</p>
    <footer>
      <small className="text-muted">
        Someone famous like <cite title="Source Title">Mark Otto</cite>
      </small>
    </footer>
  </blockquote>
</div>

<!-- Card 3 -->
<div className="card card-block card-inverse card-primary text-center">
  <blockquote className="card-blockquote">
    <p>Create masonry or Pinterest-style card layouts in Bootstrap 4.</p>
    <footer>
      <small>
        Someone famous in <cite title="Source Title">Bootstrap</cite>
      </small>
    </footer>
  </blockquote>
</div>

<!-- Card 4 -->
<div className="card card-block text-center">
  <h4 className="card-title">Clever heading</h4>
  <p className="card-text">
    This card has supporting text below as a natural lead-in to additional content.
  </p>
  <p className="card-text">
    <small className="text-muted">Last updated 5 mins ago</small>
  </p>
</div>

<!-- Card 5 -->
<div className="card">
  <img
    className="card-img img-responsive"
    src="//placehold.it/600x200/777/fff?text=..."
    alt="Card image"/>
</div>

<!-- Card 6  -->
<div className="card">
  <div className="card-block">
    <ul className="list-unstyled">
      <li className="text-capitalize">
        <code className="text-lowercase">text-capitalize</code> Capitalize each word
      </li>
      <li className="text-uppercase">
        <code className="text-lowercase">text-uppercase</code> Uppercase text
      </li>
      <li className="text-success"><code>text-success</code> Contextual colors for text</li>
      <li><code>text-muted</code> <span className="text-muted">Lighten with muted</span></li>
      <li><code>text-info</code> <span className="text-muted">Info text color</span></li>
      <li><code>text-danger</code> <span className="text-muted">Danger text color</span></li>
      <li><code>text-warning</code> <span className="text-muted">Warning text color</span></li>
      <li><code>text-primary</code> <span className="text-primary">Primary text color</span></li>
    </ul>
  </div>
</div>

*/

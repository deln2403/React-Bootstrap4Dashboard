import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';

export default class CardsDeck extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {};
  componentDidMount() {};
  componentWillUpdate() {};
  componentDidUpdate() {};

  // RENDER
  render() {
    return (
      
      <div className="card-deck-wrapper">
          <div className="card-deck">
              <div className="card card-inverse card-success text-center">
                  <div className="card-block">
                      <blockquote className="card-blockquote">
                          <p>It's really good news that the new Bootstrap 4 now has support for CSS 3 flexbox.</p>
                          <footer>Makes flexible layouts <cite title="Source Title">Faster</cite></footer>
                      </blockquote>
                  </div>
              </div>
              <div className="card card-inverse card-danger text-center">
                  <div className="card-block">
                      <blockquote className="card-blockquote">
                          <p>The Bootstrap 3.x element that was called "Panel" before, is now called a "Card".</p>
                          <footer>All of this makes more <cite title="Source Title">Sense</cite></footer>
                      </blockquote>
                  </div>
              </div>
              <div className="card card-inverse card-warning text-center">
                  <div className="card-block">
                      <blockquote className="card-blockquote">
                          <p>There are also some interesting new text classes for uppercase and capitalize.</p>
                          <footer>These handy utilities make it <cite title="Source Title">Easy</cite></footer>
                      </blockquote>
                  </div>
              </div>
              <div className="card card-inverse card-info text-center">
                  <div className="card-block">
                      <blockquote className="card-blockquote">
                          <p>If you want to use cool icons in Bootstrap 4, you'll have to find your own such as Font Awesome or Ionicons.</p>
                          <footer>The Glyphicons are not <cite title="Source Title">Included</cite></footer>
                      </blockquote>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}  


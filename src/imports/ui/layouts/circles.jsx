import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';

/* Components */
import Switch from '../components/switch';

export default class Circles extends Component {
  constructor(props) {
    super(props);
    this.toggleDisplayContent = this.toggleDisplayContent.bind(this);
  
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
        <div className="row placeholders">
          <div className="col-xs-6 col-sm-3 placeholder text-xs-center">
            <img src=" http://placehold.it/200/dddddd/fff?text=1" className="center-block img-responsive img-circle" alt="Generic placeholder thumbnail"/>
            <h4>Responsive</h4>
            <span className="text-muted">Device agnostic</span>
          </div>
          <div className="col-xs-6 col-sm-3 placeholder text-xs-center">
            <img src="//placehold.it/200/e4e4e4/fff?text=2" className="center-block img-responsive img-circle" alt="Generic placeholder thumbnail"/>
            <h4>Frontend</h4>
            <span className="text-muted">UI / UX oriented</span>
          </div>
          <div className="col-xs-6 col-sm-3 placeholder text-xs-center">
            <img src="//placehold.it/200/d6d6d6/fff?text=3" className="center-block img-responsive img-circle" alt="Generic placeholder thumbnail"/>
            <h4>HTML5</h4>
            <span className="text-muted">Standards-based</span>
          </div>
          <div className="col-xs-6 col-sm-3 placeholder text-xs-center">
            <img src="//placehold.it/200/e0e0e0/fff?text=4" className="center-block img-responsive img-circle" alt="Generic placeholder thumbnail"/>
            <h4>Framework</h4>
            <span className="text-muted">CSS and JavaScript</span>
          </div>
        </div>
        ) : '' }
      </section>
    );
  }
}  


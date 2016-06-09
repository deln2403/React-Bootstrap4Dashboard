import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';

export default class <TEMPLATE> extends Component {
  constructor(props) {
    super(props);
    this.someMethod = this.someMethod.bind(this);
 
    this.state = {
      someFlag: false,
    };
  }

  componentWillMount() {};
  componentDidMount() {};
  componentWillUpdate() {};
  componentDidUpdate() {};

  someMethod() {
      // do something
  }

  // RENDER
  render() {

    const someClassName = classnames({
      dynamicClass: !( this.state.someFlag ) ? true : false,
    },'staticClass');
 
    return (
      <div className={someClassName}>
        Template
      </div>
    );
  }
}  

<TEMPLATE>.propTypes = {
  someObjects: PropTypes.array.isRequired,
};

// to pass Meteor objects
export default createContainer(({someObjectFromParent}) => {
  Meteor.suscribe('collectionName');

  return {s
    someObjects: Collection.find({});
  };

}, <TEMPLATE>);



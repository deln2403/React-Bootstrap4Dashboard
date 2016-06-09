import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, context } from 'react-router';
import Routes from '../imports/startup/client/routes';


Meteor.startup(() => {
  render(<Routes />, document.getElementById('render-app'));
});

Tracker.autorun(function() {
//  console.log(browserHistory);
});

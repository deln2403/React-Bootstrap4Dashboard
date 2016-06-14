# React-Bootstrap4Dashboard
Meteor-React version of Codeply's Bootstrap4Dashboard

#Meteor #React #ReactRouter #Bootstrap4

Not all dashboard elements have been converted to React, but most. Most notably, the GridLayout and VariousLayouts have not.

The site works with mobile devices, although I've noticed that some cards (e.g. Masonry) don't show up in some browsers/devices.

The cards can all be generated from the site itself. Only AlertTypes and Font Awesome Icon lists need to be imported into the database. The 'Data' folder contains the data as well as example commands.

Have fun!




The following sequence of packages were imported to create the Meteor project.

# Create project
  meteor create React-Bootstrap4Dashboard

  cd React-Bootstrap4Dashboard


# Add React
  meteor npm install react-bootstrap --save

  meteor npm install --save react-addons-transition-group react-addons-css-transition-group react-addons-linked-state-mixin react-addons-create-fragment react-addons-update react-addons-pure-render-mixin react-addons-test-utils react-addons-perf

  meteor npm install --save react-addons-pure-render-mixin

  meteor add react-meteor-data

# Add React-Router
  meteor npm install --save deep-equal query-string

  meteor npm install --save react-router

  meteor npm install --save react-router-active-component classnames


# Device detection for uix
  meteor add mystor:device-detection


# SCSS for bootstrap
  meteor add seba:minifiers-autoprefixer

  meteor remove standard-minifier-css

  meteor add fourseven:scss


# Bootstrap 4 alpha 2
  meteor npm install tether --save

  meteor add orgztion:meteor-global-tether

  meteor add twbs:bootstrap@=4.0.0-alpha2

  meteor add fortawesome:fontawesome



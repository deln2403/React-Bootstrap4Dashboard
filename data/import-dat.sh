#!/bin/bash

HOSTNAME=localhost
PORT=27017
DATABASE=bootstrap4dashboard

function importFontAwesomeIcons() {
  mongoimport --host $HOSTNAME --port $PORT --db $DATABASE --type csv --headerline --file ./faIcons.dat
}

function importAlertTypes() {
  mongoimport --host $HOSTNAME --port $PORT --db $DATABASE --type csv --headerline --file ./alertTypes.dat
}


function importAll() {
  importFontAwesomeIcons
  importAlertTypes
}




#!/bin/bash

HOSTNAME=debdb01
PORT=27017
DATABASE=bootstrap4dashboard

function importFontAwesomeIcons() {
  mongoimport --host $HOSTNAME --port $PORT --db $DATABASE --type csv --headerline --file ./faIcons.dat
}

function importCardAlerts() {
  mongoimport --host $HOSTNAME --port $PORT --db $DATABASE --type csv --headerline --file ./cardAlerts.dat
}



function importAll() {
  importFontAwesomeIcons
  importCardAlerts
}




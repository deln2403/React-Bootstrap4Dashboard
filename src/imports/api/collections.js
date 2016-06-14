import { Meteor } from 'meteor/meteor';

export const AlertTypes = new Mongo.Collection('alertTypes');
export const FaIcons = new Mongo.Collection('faIcons');
export const SimpleCards = new Mongo.Collection('simpleCards');
export const CircleCards = new Mongo.Collection('circleCards');
export const DeckCards = new Mongo.Collection('deckCards');
export const MasonCards = new Mongo.Collection('masonCards');


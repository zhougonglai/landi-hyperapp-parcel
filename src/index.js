import {app} from 'hyperapp';
// import fundebug from 'fundebug-javascript';
import {location} from '@hyperapp/router';
import logger from "@hyperapp/logger";

import {view} from './view/';
import {actions} from './actions/';
import {state} from './state/';

import './styles/app.styl';

// fundebug.apikey="22838d2212946f1ef64a586edb1c987504e088c08bd885a6e199474274933969";
// export const debuger = fundebug;


let main
if(process.env.NODE_ENV !== 'production'){
  main = logger()(app)(state, actions, view, document.body);
} else {
  main= app(state, actions, view, document.body);
}

export const unsubscribe = location.subscribe(main.location);
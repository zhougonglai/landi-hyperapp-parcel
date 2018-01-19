import {app} from 'hyperapp';
// import fundebug from 'fundebug-javascript';

import {view} from './view/';
import {actions} from './actions/';
import {state} from './state/';

import './styles/app.styl';

// fundebug.apikey="22838d2212946f1ef64a586edb1c987504e088c08bd885a6e199474274933969";
// export const debuger = fundebug;

const main= app(state, actions, view, document.body);
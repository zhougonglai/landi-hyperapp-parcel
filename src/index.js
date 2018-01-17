import {app} from 'hyperapp';
import {view} from './view/';
import {actions} from './actions/';
import {state} from './state/';

import './styles/app.styl';

window.main = app(state, actions, view, document.body)
import {h} from 'hyperapp';
import {PageOne} from './page-one';
import {PageTwo} from './page-two';
import {PageThree} from './page-three';
import {PageFour} from './page-four';
import {PageFive} from './page-five';
import {PageSix} from './page-six';
import {PageSeven} from './page-seven';

export const view = (state, actions) =>
  <div class="d-flex span-1" id="app">
    <PageOne   state={state} actions={actions} />
    <PageTwo   state={state} actions={actions} />
    <PageThree state={state} actions={actions} />
    <PageFour  state={state} actions={actions} />
    <PageFive  state={state} actions={actions} />
    <PageSix   state={state} actions={actions} />
    <PageSeven state={state} actions={actions} />
  </div>
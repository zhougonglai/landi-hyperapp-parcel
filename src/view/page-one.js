import {h} from 'hyperapp';

export const PageOne = ({state, actions}) => (
  <section class="span-1 d-flex page" id="page-one">
    <div class="span-1 flex-center">
      <h1 class="header">2017 Landi学习足迹</h1>
    </div>
    <div class="span-1 flex-center">
      <h3>学而实习之</h3>
      <h3>一起进入Jay的记忆城堡</h3>
    </div>
    <div class="span-1 flex-end">
      <div>开启旅程</div>
      <div class="material-icons">keyboard_arrow_down</div>
    </div>
  </section>
)
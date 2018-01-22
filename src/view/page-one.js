import {h} from 'hyperapp';

export const PageOne = ({stay, userInfo}) =>
  <section class="span-1 d-flex page" id="page-one">
    <div class={stay ? "span-1 flex-center focus-in-contract-bck": "span-1 flex-center blur-out-contract-bck"}>
      <h1 class="header">2017 Landi学习足迹</h1>
    </div>
    <div class="span-1 flex-center">
      <h3>学而实习之</h3>
      <div class="span-1 text-center">
        一起进入
        <div class={stay ? "d-inline-block text-focus-in text-gold": "d-inline-block blur-out-contract-bck text-gold"}>
        {userInfo.nickename}
        </div>
        的记忆城堡
      </div>
    </div>
    <div class="span-1 flex-end">
      <div>开启旅程</div>
      <div class="material-icons">keyboard_arrow_down</div>
    </div>
  </section>
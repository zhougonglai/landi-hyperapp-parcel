import {h} from 'hyperapp';

export const PageSeven = ({state, actions}) => 
  <section class="span-1 d-flex page" id="page-seven">
    <div class="span-1 pa-2">
      <div>梦想是缤纷的糖果色</div>
      <div>愿时间 赋予你智慧和勇气</div>
      <div>一点一滴累积更好的自己</div>
      <br/>
      <div>Goodbye 2017</div>
      <div>Hello 2018</div>
    </div>
    <div class="span-1 d-flex flex-center">
      <div class="letter">
        <div>亲爱的Jay家长</div>
        <div>感谢你2017对宝贝的陪伴与支持,熊小迪邀请你向全世界分享宝贝的努力!</div>
      </div>
    </div>
    <div class="span-1 d-flex flex-center">
      <div class="share">
        <button type="button" class={state.btnClick? 'btn blue round btn-share btn-click': 'btn blue round btn-share'} onclick={actions.onTap}>那必须的</button>
      </div>
    </div>
  </section>
  
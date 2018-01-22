import {h} from 'hyperapp';

export const PageFive = ({stay, userInfo, defaultUser}) =>
  <section class="span-1 d-flex page row" id="page-five">
      <div class="span-1"></div>
      <div class="span-1 flex-left-center">
        <div>滴答滴答</div>
        <div>时间总是悄悄地流逝</div>
        <div>这一年</div>
        <div>你有超过 
          <div class="text-gold d-inline-block text-center">
            {defaultUser.TerminalClassMinute} 
          </div>
        分钟</div>
        <div>沉侵在英语的世界</div>
      </div>
  </section>
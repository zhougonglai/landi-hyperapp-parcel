import {h} from 'hyperapp';

export const PageFour = ({stay, userInfo, defaultUser}) =>
  <section class="span-1 d-flex page flex-center" id="page-four">
    <div class="flex-left-center">
      <div>缘分是件奇妙的事情</div>
      <div>2017 你的年度老师是 
        <div class={`d-inline-block text-center text-gold ${stay ?" text-focus-in": "blur-out-contract-bck"}`}>
          {userInfo.tname}
        </div>
      </div>
      <div>你们一起度过了 
        <div class="d-inline-block text-center text-gold">
          {defaultUser.classMinute}
        </div>
       分钟 愉快的 时光</div>
    </div>
    <div class="flex-left-center">
      <div>还记得
        <div class={`d-inline-block text-center text-gold ${stay ?" text-focus-in": "blur-out-contract-bck"}`}>
          Sharon
        </div>
      小伙伴吗</div>
      <div>那些曾经互帮互助的 
        <div  class="text-gold d-inline-block text-center">
          {defaultUser.endTogetherclassNum}
        </div>
       节课</div>
      <div>被灌装成甜蜜的回忆</div>
      <div>成为你们之间的专属小秘密</div>
    </div>
  </section>
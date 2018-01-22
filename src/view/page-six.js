import {h} from 'hyperapp';

export const PageSix = ({stay, userInfo, defaultUser}) =>
  <section class="span-1 d-flex page" id="page-six">
    <div class="span-1 flex-fill row d-flex">
      <div class="span-2 flex-left-center">
        <div>
          <div>2017</div>
          <div> 
            <div class="text-gold d-inline-block text-center">
              {defaultUser.ClassMinute}
            </div>
               节常规课</div>
          <div> 
            <div class="text-gold d-inline-block text-center">
              {defaultUser.Advance}
            </div> 
          次预习</div>
          <div> 
            <div class="text-gold d-inline-block text-center">
              {defaultUser.Review}
            </div> 
            次复习</div>
        </div>
        <div>
          <div>在兰迪的学习舞台上</div>
          <div>班主任
            <div class={`d-inline-block text-center text-gold ${stay ?" text-focus-in": "blur-out-contract-bck"}`}>
              {userInfo.tutornickname}
            </div>
            老师 扬起指挥棒</div>
          <div>你奏响了最好的乐曲</div>
        </div>
      </div>
    </div>
    <div class="flex-fill row d-flex span-1">
      <div className="span-1">
      </div>
      <div class="span-2 flex-left-center">
        <div>
          <div>生有涯 知无涯</div>
          <div>2017 你的年度关键词是</div>
        </div>
        <div>
          <div>这一年 坚持不懈的你</div>
          <div>掌握了
            <div class={`d-inline-block text-center text-gold ${stay ?" text-focus-in": "blur-out-contract-bck"}`}>
              XXX
            </div>
            个单词 
            <div class={`d-inline-block text-center text-gold ${stay ?" text-focus-in": "blur-out-contract-bck"}`}>
              XXX
            </div>
            个句子</div>
          <div>涓涓细流汇成海</div>
          <div>每一个单词和句子的累积</div>
          <div>都将是宝贵的财富</div>
        </div>
      </div>
    </div>
  </section>
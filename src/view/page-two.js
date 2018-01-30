import {h} from 'hyperapp';

export const PageTwo = ({stay}) =>
  <section class="span-1 d-flex page" id="page-two">
    <div class="span-1 flex-fill row d-flex">
      <div class="span-2 flex-left-center">
        <div class={`d-inline-block text-gold text-center ${stay ?" text-focus-in ": "blur-out-contract-bck"}`}>
        2017年10月2日
        </div>
        <div>是一个特别的让日子</div>
        <div>终于等到你----</div>
        <div>
          <div class={`d-inline-block text-gold text-center ${stay ?" text-focus-in ": "blur-out-contract-bck"}`}>
            Jay
          </div>
        , 可爱的小伙伴</div>
      </div>
      <div class="span-1"></div>
    </div>
    <div class="span-1">
    </div>
  </section>
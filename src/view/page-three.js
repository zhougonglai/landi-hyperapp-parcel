import {h} from 'hyperapp';

export const PageThree = ({stay}) =>
  <section class="span-1 d-flex page" id="page-three">
    <div class="span-1">
    </div>
    <div class="flex-fill row d-flex span-1">
      <div className="span-1">
      </div>
      <div class="span-2 flex-left-center">
        <div>
          <div class={`d-inline-block text-center text-gold ${stay ?" text-focus-in ": "blur-out-contract-bck"}`}>
            10月2日
          </div>
        的你</div>
        <div>真是个勇敢的小天使</div>
        <div>在
          <div class={`d-inline-block text-center text-gold ${stay ?" text-focus-in ": "blur-out-contract-bck"}`} >
          Jane
          </div>
          老师和
          <div class={`d-inline-block text-center text-gold ${stay ?" text-focus-in ": "blur-out-contract-bck"}`} >
          Chris
          </div>
          同学的陪伴下迈出了在兰迪的第一步</div>
        <div>看! 整平星空因你而闪耀</div>
      </div>
    </div>
  </section>
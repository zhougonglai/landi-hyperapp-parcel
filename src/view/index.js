import {h} from 'hyperapp';
import _ from 'lodash';
import anime from 'animejs';

import {PageOne} from './page-one';
import {PageTwo} from './page-two';
import {PageThree} from './page-three';
import {PageFour} from './page-four';
import {PageFive} from './page-five';
import {PageSix} from './page-six';
import {PageSeven} from './page-seven';
import {Music} from './components/music';
import {FireWork} from './components/firework';

const wxConfig = () => {
  wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: '', // 必填，公众号的唯一标识
      timestamp: '', // 必填，生成签名的时间戳
      nonceStr: '', // 必填，生成签名的随机串
      signature: '',// 必填，签名，见附录1
      jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })
}

const scrollBehavior = (state, action) => {
  if(window.scrollY < window.innerHeight * 1/2){
    action.stayToggler({index:'pageOne', status:true});
    action.stayToggler({index:'pageTwo', status:false});
  } else if(window.scrollY > window.innerHeight * 1/2 && window.scrollY < window.innerHeight * 2) {
    action.stayToggler({index:'pageOne', status:false});
    action.stayToggler({index:'pageTwo', status:true});
    action.stayToggler({index:'pageThree', status:false});
  } else if(window.scrollY > window.innerHeight * 2 && window.scrollY < window.innerHeight * 5/2) {
    action.stayToggler({index:'pageTwo', status:false});
    action.stayToggler({index:'pageThree', status: true});
    action.stayToggler({index:'pageFour', status: false});
  } else if(window.scrollY > window.innerHeight * 5/2 && window.scrollY < window.innerHeight * 7/2) {
    action.stayToggler({index:'pageThree', status:false});
    action.stayToggler({index:'pageFour', status: true});
    action.stayToggler({index:'pageFive', status: false});
  } else if(window.scrollY > window.innerHeight * 7/2 && window.scrollY < window.innerHeight * 9/2) {
    action.stayToggler({index:'pageFour', status: false});
    action.stayToggler({index:'pageFive', status: true});
    action.stayToggler({index:'pageSix', status: false});
  } else if(window.scrollY > window.innerHeight * 9/2 && window.scrollY < window.innerHeight * 11/2) {
    action.stayToggler({index:'pageFive', status: false});
    action.stayToggler({index:'pageSix', status: true});
    action.stayToggler({index:'pageSeven', status: false});
  } else if(window.scrollY > window.innerHeight * 11/2 && window.scrollY < window.innerHeight * 13/2) {
    action.stayToggler({index:'pageSix', status: false});
    action.stayToggler({index:'pageSeven', status: true});
  }
}

const initContent = (el, state, action)=> {
  wxConfig();
  document.addEventListener('scroll', e => {
    scrollBehavior(state, action);
  });
}

export const view = (state, actions) =>
  <div class="d-flex span-1" id="app" 
    oncreate={el => initContent(el, state, actions)}>
    <Music playing={state.playing} musicCtrl={actions.musicCtrl}/>
    {/* <FireWork human={state.human} handle={actions.humanHandle}/> */}
    <PageOne   stay={state.pageOne} userInfo={state.userInfo} />
    <PageTwo   stay={state.pageTwo} />
    <PageThree stay={state.pageThree} />
    <PageFour  stay={state.pageFour} userInfo={state.userInfo} defaultUser={state.defaultUser}/>
    <PageFive  stay={state.pageFive} userInfo={state.userInfo} defaultUser={state.defaultUser}/>
    <PageSix   stay={state.pageSix} userInfo={state.userInfo} defaultUser={state.defaultUser}/>
    <PageSeven stay={state.pageSeven} btnClick={state.btnClick} onTap={actions.onTap}/>
  </div>
// import {debuger} from '../';
import _ from 'lodash';
import anime from 'animejs';

export const actions = {
  stayToggler: ({index, status}) => (state, actions) => {
    if(state[index] !== status){
      switch(index){
        case 'pageOne':
          return {[index]: status};
        case 'pageTwo':
          return {[index]: status};
        case 'pageThree':
          return {[index]: status};
        case 'pageFour':
            anime({
              targets: state.defaultUser,
              classMinute: status ? state.userInfo.classMinute : 0,
              endTogetherclassNum: status ? state.userInfo.endTogetherclassNum : 0,
              round: 1,
              easing: 'linear',
              update() {
                actions.countTo({attr:'classMinute',num: state.defaultUser.classMinute})
                actions.countTo({attr:'endTogetherclassNum',num: state.defaultUser.endTogetherclassNum})
              }
            });
          return {[index]: status};
        case 'pageFive':
            anime({
              targets: state.defaultUser,
              TerminalClassMinute: status ? state.userInfo.TerminalClassMinute: 0,
              round: 1,
              easing: 'linear',
              update() {
                actions.countTo({attr:'TerminalClassMinute',num: state.defaultUser.TerminalClassMinute})
              }
            });
          return {[index]: status};
        case 'pageSix':
            anime({
              targets: state.defaultUser,
              ClassMinute: status ? state.userInfo.ClassMinute: 0,
              Advance: status ? state.userInfo.Advance: 0,
              Review: status ? state.userInfo.Review: 0,
              round: 1,
              easing: 'linear',
              update() {
                actions.countTo({attr:'ClassMinute',num: state.defaultUser.ClassMinute})
                actions.countTo({attr:'Advance',num: state.defaultUser.Advance})
                actions.countTo({attr:'Review',num: state.defaultUser.Review})
              }
            });
          return {[index]: status};
        case 'pageSeven':
          return {[index]: status};
      }
    }
  },
  countTo: ({attr,num}) => state => {
    return ({
      defaultUser:{
        ...state.defaultUser,
        [attr]: num
      }
    })
  },
  // stayToggler: ({index, status}) => state => state[index] !== status && ({[index]: status}),
  musicCtrl: status => state => ({
    playing: status
  }),
  onTap: () => (state, actions) => {
    actions.clicked()
    clearTimeout(timer);
    const timer = setTimeout(() => {
      anime({
        targets: (document.body.scrollTop !== 0) && document.body  || (document.documentElement.scrollTop !== 0) && document.documentElement,
        scrollTop: 0,
        round: 1,
        easing: 'easeInOutCubic'
      });
      actions.btnreset();
    }, 600);
  },
  clicked: () => state => ({
    btnClick: true
  }),
  btnreset: () => state => ({
    btnClick: false
  })
}
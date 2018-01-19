// import {debuger} from '../';

export const actions = {
  onTap: () => (state, actions) => {
    actions.clicked()
    clearTimeout(timer);
    const timer = setTimeout(() => {
      // debuger.notify('share notify', '分享按钮被点击');
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


export const actions = {
  onTap: () => (state, actions) => {
    actions.clicked()
    setTimeout(actions.btnreset, 600);
  },
  clicked: () => state => ({
    btnClick: true
  }),
  btnreset: () => state => ({
    btnClick: false
  })
}
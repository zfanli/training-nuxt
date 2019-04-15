export const state = () => ({
  lang: 'zh'
})

export const mutations = {
  changeLang(state, l) {
    state.lang = l
  }
}

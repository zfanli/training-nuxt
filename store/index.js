export const state = () => ({
  lang: 'zh',
  list: new Array(3).fill(0).map((_, i) => ({
    title: `假装这是第${i + 1}篇文章`,
    path: `post-number-${i + 1}`
  }))
})

export const mutations = {
  changeLang(state, l) {
    state.lang = l
  }
}

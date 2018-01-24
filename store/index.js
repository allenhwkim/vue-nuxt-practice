export const state = () => ({
  locale: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    state.locale = locale
  }
}

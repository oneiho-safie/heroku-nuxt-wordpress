import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = () => ({
  isLoadedTop: false,
  news: [],
  example: []
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

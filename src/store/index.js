import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
function getObverseDeveloper(name) {
  return new URL(`../assets/obverse/developer/${name}.png`, import.meta.url)
    .href
}
function getReverse(name) {
  return new URL(`../assets/reverse/${name}.png`, import.meta.url).href
}

export default createStore({
  state: {
    gameData: {
      rows: 3,
      columns: 4,
      backDesign: 'default',
      cardDesign: 'developer'
    },
    obverseDesigns: [
      {
        name: 'developer',
        image: getObverseDeveloper('design-back-dev-6')
      }
    ],
    reverseDesigns: [
      { name: 'default', image: getReverse('default') },
      { name: 'royal', image: getReverse('royal') },
      { name: 'retro', image: getReverse('retro') },
      { name: 'flora', image: getReverse('flora') }
    ]
  },
  mutations: {
    changeBackDesign(state, design) {
      state.gameData.backDesign = design
    },
    changeRows(state, rows) {
      state.gameData.rows = rows
    },
    changeColumns(state, cols) {
      state.gameData.columns = cols
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
})

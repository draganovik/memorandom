import { createStore } from 'vuex'
import obDeveloper from '@/assets/obverse/developer/design-back-dev-6.png'

function getObverse(name) {
  return new URL(`../assets/reverse/${name}.png`, import.meta.url).href
}

export default createStore({
  state: {
    gameData: {
      rows: 3,
      columns: 3,
      backDesign: 'default',
      cardDesign: 'developer'
    },
    obverseDesigns: [
      {
        name: 'default',
        image: ''
      },
      {
        name: 'developer',
        image: obDeveloper
      },
      { name: 'animals', image: '' },
      { name: 'food', image: '' }
    ],
    reverseDesigns: [
      { name: 'default', image: getObverse('default') },
      { name: 'royal', image: getObverse('royal') },
      { name: 'retro', image: getObverse('retro') },
      { name: 'flora', image: getObverse('flora') }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})

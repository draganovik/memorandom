import { createStore } from 'vuex'

export default createStore({
  state: {
    gameData: {},
    obverseDesigns: [
      {
        name: 'default',
        image: ''
      },
      {
        name: 'developer',
        image: 'src/assets/obverse/developer/design-back-dev-6.png'
      },
      { name: 'animals', image: '' },
      { name: 'food', image: '' }
    ],
    reverseDesigns: [
      { name: 'default', image: "'src/assets/reverse/default.svg'" },
      { name: 'royal', image: "'src/assets/reverse/royal.svg'" },
      { name: 'retro', image: "'src/assets/reverse/retro.svg'" },
      { name: 'flora', image: "'src/assets/reverse/flora.svg'" }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})

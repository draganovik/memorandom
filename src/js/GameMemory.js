class GameMemory {
  constructor(gameData) {
    this._settings = gameData
    this.steps = 0
    this._loadAssets()
    this._prepareCards()
  }

  StartGame() {
    //this._prepareCards()
    this._gameState = 'running'
    this.steps = 0
  }

  getGameState() {
    return this._gameState
  }

  _prepareCards() {
    this._cards = []
    const size = Math.floor((this._settings.rows * this._settings.columns) / 2)
    let _shuffle = this._shuffleCards(this._cardSet).slice(0, size)
    _shuffle = _shuffle.concat(
      _shuffle.map((a) => {
        return { ...a }
      })
    )
    for (let i = 0; i < _shuffle.length; i++) {
      _shuffle[i].id = i
    }
    this._cards = this._shuffleCards(_shuffle)
  }

  getPlayingCards() {
    return this._cards
  }

  _loadAssets() {
    switch (this._settings.cardDesign) {
      case 'developer':
        this._loadObverseDeveloper()
        break
      default:
        this._loadObverseDefault()
        break
    }
  }

  _shuffleCards(cards) {
    return cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  async _loadObverseDeveloper() {
    this._cardSet = []
    for (var i = 1; i < 25; i++) {
      this._cardSet.push({
        faceUp: false,
        imageUrl: new URL(
          `../assets/obverse/developer/design-back-dev-${i}.png`,
          import.meta.url
        ).href
      })
    }
  }

  async _loadObverseDefault() {
    this._cardSet = []
    for (var i = 1; i < 25; i++) {
      this._cardSet.push(
        new URL(
          `../assets/obverse/developer/design-back-default-${i}.png`,
          import.meta.url
        ).href
      )
    }
  }
}
export default GameMemory

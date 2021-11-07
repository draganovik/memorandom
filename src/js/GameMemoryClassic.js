class GameMemoryClassic {
  constructor(gameSettings) {
    this._settings = gameSettings
    this.steps = 0
    this._loadAssets()
    this._prepareCards()
  }

  StartGame() {
    this._gameState = 'running'
    this.steps = 0
  }

  EndGame() {
    this._gameState = 'ended'
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

  FlipAll(faceUp) {
    this._cards.forEach((card) => {
      card.faceUp = faceUp
    })
  }

  _shuffleCards(cards) {
    return cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  _loadAssets() {
    switch (this._settings.obverseDesign) {
      case 'developer':
        this._loadObverseDeveloper()
        break
      default:
        this._loadObverseClassical()
        break
    }
    this._reverseURL = new URL(
      `../assets/reverse/${this._settings.reverseDesign}.png`,
      import.meta.url
    ).href
  }

  async _loadObverseDeveloper() {
    this._cardSet = []
    for (var i = 1; i < 37; i++) {
      this._cardSet.push({
        faceUp: false,
        imageUrl: new URL(
          `../assets/obverse/developer/design-back-dev-${i}.png`,
          import.meta.url
        ).href
      })
    }
  }

  async _loadObverseClassical() {
    this._cardSet = []
    for (var i = 1; i < 52; i++) {
      this._cardSet.push({
        faceUp: false,
        imageUrl: new URL(
          `../assets/obverse/classical/design-back-classic-${i}.png`,
          import.meta.url
        ).href
      })
    }
  }

  getGameState() {
    return this._gameState
  }

  getPlayingCards() {
    return this._cards
  }

  getReverseURL() {
    return this._reverseURL
  }
}
export default GameMemoryClassic

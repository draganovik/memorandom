class GameMemoryAdvanced {
  constructor(settings) {
    this._settings = settings
    this.steps = 0
    this._loadAssets()
    this._prepareCards()
    this.setMainCard()
  }

  setMainCard() {
    let temp = this._cards.map((a) => {
      return { ...a }
    })
    if (this._gameState == 'running') {
      temp = temp.filter((card) => card.found != true)
    }
    this._mainCard = temp[Math.floor(Math.random() * temp.length)]
    this._mainCard.faceUp = this._gameState == 'running' ? true : false
  }

  StartGame() {
    this.FlipAll(false)
    this._gameState = 'running'
    this.steps = 0
  }

  EndGame() {
    this._gameState = 'ended'
  }

  FlipAll(faceUp) {
    this._cards.forEach((card) => {
      card.faceUp = faceUp
    })
  }

  _prepareCards() {
    this._cards = []
    const size = this._settings.rows * this._settings.columns
    let _shuffle = this._cardSet.slice(0, size)
    for (let i = 0; i < _shuffle.length; i++) {
      _shuffle[i].id = i
    }
    this._cards = this._shuffleCards(_shuffle)
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
        faceUp: true,
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
        faceUp: true,
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

  getMainCard() {
    return this._mainCard
  }

  getReverseURL() {
    return this._reverseURL
  }
}
export default GameMemoryAdvanced

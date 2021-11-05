class GameMemory {
  constructor(gameData) {
    this._settings = gameData
    this._loadAssets()
  }

  getCards() {
    return this._cards
  }

  _loadAssets() {
    switch (this._settings.cardDesign) {
      case 'developer':
        this._loadObverseDeveloper()
        break
      default:
        this._loadObverseDeveloper()
        break
    }
  }
  async _loadObverseDeveloper() {
    this._cards = []
    for (var i = 1; i < 25; i++) {
      this._cards.push(
        new URL(
          `../assets/obverse/developer/design-back-dev-${i}.png`,
          import.meta.url
        ).href
      )
    }
  }

  async _loadObverseDefault() {
    this._cards = []
    for (var i = 1; i < 25; i++) {
      this._cards.push(
        new URL(
          `../assets/obverse/developer/design-back-default-${i}.png`,
          import.meta.url
        ).href
      )
    }
  }
}
export default GameMemory

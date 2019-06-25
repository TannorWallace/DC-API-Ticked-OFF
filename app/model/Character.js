//NOTE THIS IS WHERE YOU USE THE EXPORT DEFAULT

export default class Character {
  constructor(data) {
    this.image = data.image
    this.name = data.name
    this.alignment = data.alignment
    this.appearance = data.appearance
    this.powerstats = data.powerstats
  }

  get Template() {
    return `
    <div class=" col-12 col-md-3">
      <div class="card">
        <img class="center" src="${this.image}" alt="">
          <h5 class="card-title">Name:${this.name}</h5>
          <h5 class="card-text">Alignment:${this.alignment}</h5>
          <h5 class="card-test">Appearance:${this.appearance}</h5>
          <h5 class="card-text">Powerstats:${this.powerstats}</h5>
        </div>

      </div>
      `
  }
}
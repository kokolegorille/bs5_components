export class Bs5PhotoCarousel extends HTMLElement {
  connectedCallback() {
    console.log("WC mounted!")
    const name = "Meli7"
    this.innerHTML = `<h1>Hello ${name}</h1>`
  }
}


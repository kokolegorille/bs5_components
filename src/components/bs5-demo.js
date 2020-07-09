export class Bs5Demo extends HTMLElement {
  static get observedAttributes() {
    return ["koko"]
  }

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
    this.name = this.getAttribute("koko") || "DEMO"
  }

  connectedCallback() {
    console.log("WC mounted!")
    this.shadow.innerHTML = `<h1>Hello ${this.name}</h1>`
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "koko") {
      console.log(`${name} changed from ${oldVal} to ${newVal}`)
    }
  }
}
// Web component made with React!

import React from "react"
import ReactDOM from "react-dom"

export class Bs5React extends HTMLElement {
  connectedCallback() {
    console.log("WC mounted!")

    const mountPoint = document.createElement("span")
    this.attachShadow({ mode: "open" }).appendChild(mountPoint)
    const name = this.getAttribute("name")

    ReactDOM.render(<h1>{name}</h1>, mountPoint);
  }
}
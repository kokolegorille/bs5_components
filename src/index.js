console.log("STARTED...Yeah!")

import "./css/app.scss"

import { Bs5PhotoCarousel } from "./components/bs5-photo-carousel"
import { Bs5Demo } from "./components/bs5-demo"
import { Bs5React } from "./components/bs5-react"
import { Bs5Wasm } from "./components/bs5-wasm"

if (!customElements.get("bs5-photo-carousel")) {
  customElements.define("bs5-photo-carousel", Bs5PhotoCarousel)
}
if (!customElements.get("bs5-demo")) {
  customElements.define("bs5-demo", Bs5Demo)
}
if (!customElements.get("bs5-react")) {
  customElements.define("bs5-react", Bs5React)
}
if (!customElements.get("bs5-wasm")) {
  customElements.define("bs5-wasm", Bs5Wasm)
}
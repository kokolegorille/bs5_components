console.log("STARTED...Yeah!")

import { Bs5PhotoCarousel } from "./components/bs5-photo-carousel"
import { Bs5Demo } from "./components/bs5-demo"

if (!customElements.get("bs5-photo-carousel")) {
  customElements.define("bs5-photo-carousel", Bs5PhotoCarousel)
}
if (!customElements.get("bs5-demo")) {
  customElements.define("bs5-demo", Bs5Demo)
}
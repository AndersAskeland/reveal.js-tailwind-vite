/* CSS stuff */
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/reset.css'
import './tailwind.css'
import 'reveal.js/dist/theme/beige.css'

/* JS stuff */
import Reveal from 'reveal.js'

let deck = new Reveal()
deck.initialize({ hash: true, slideNumber: true })
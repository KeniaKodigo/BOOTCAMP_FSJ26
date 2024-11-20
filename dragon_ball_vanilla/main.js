import { getDragonBall } from './dragon_ball'
import './style.css'

getDragonBall()

/**
 * en el contendor_personajes va ir al lista de dragon ball
 */
document.querySelector('#app').innerHTML = `
  <div>
    <h1>API DRAGON BALL</h1>
    <div class="contenedor_personajes">
      
    </div>
  </div>
`


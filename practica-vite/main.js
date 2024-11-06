import './style.css'
import './main.css'
import logo from './javascript.svg'
import viteLogo from '/vite.svg'
import getData, { setupCounter, PI } from './counter.js'

let mensaje = "Hola desde javascript vanilla y vite";

document.querySelector('#app').innerHTML = `
  <div>
    <p class="parrafo_vite">${mensaje}</p>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${logo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
// saludar()
console.log(PI);
getData();

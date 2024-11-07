import './style.css'
import './main.css'
import logo from './javascript.svg'
import viteLogo from '/vite.svg'
import getData, { setupCounter, PI } from './counter.js'
import { sumar, operacionMatematica } from './operaciones.js'

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
    <div>
      <h3>Operacion Basicas</h3>
      <label>Ingrese el primer numero</label>
      <input type="text" id="num1" /> <br>
      <label>Ingrese el segundo numero</label>
      <input type="text" id="num2" /> <br>
      <button class="btn_sumar">Sumar</button>

      <p>Seleccione una operacion</p>
      <select class="operaciones">
          <option value="restar">restar</option>
          <option value="multiplicar">multiplicar</option>
          <option value="dividir">dividir</option>
      </select>
    </div>
  </div>
`
setupCounter(document.querySelector('#counter'))
// saludar()
console.log(PI);
getData();
//agregando un evento de escucha para la suma de numeros
document.querySelector('.btn_sumar').addEventListener('click', sumar)

//agregando un evento para la seleccion de operaciones
document.querySelector('.operaciones').addEventListener('change', operacionMatematica)

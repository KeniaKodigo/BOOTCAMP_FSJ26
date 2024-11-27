import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Coach } from './clase.ts'


//instanciando la clase coach
let coach_oscar = new Coach("Oscar Lemus","oscar@kodigo.org",6785432,"Scrum Master");
console.log(coach_oscar); 
// coach_oscar.nombre = "Oscar Lemus"; 
// console.log(coach_oscar); 

let coach_kenia = new Coach("Kenia Paiz","kenia@kodigo.org",654278,"Desarrollo Web");

coach_kenia.nombre = "Kenia Paiz";
console.log(coach_kenia);
// coach_kenia.correo = "kenia@gmail.com";
// coach_kenia.especialidad 
console.log(coach_kenia.saludar()); //Hola soy un coach y me llamo Kenia Paiz"

// let coach_karla = new Coach(); 

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

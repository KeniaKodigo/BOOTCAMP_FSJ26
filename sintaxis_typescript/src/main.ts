import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Coach } from './clase.ts'
import { Persona, Estudiante } from './persona.ts'

/*********** Clase Persona */
let angelica = new Persona("Angelica Rodriguez",765478,"Panama");
console.log(angelica.verInfo());
angelica.setDireccion("El Salvador");
console.log("Actualizando Data-------------");
console.log(angelica.verInfo());

/********* Clase Estudiante */
let guillermo = new Estudiante("Guillermo",678904,"San salvador","GL2024","FSJ26","guillermo@gmail.com");
console.log(guillermo.verInfo());
console.log("Direccion de guillermo: " + guillermo.getDireccion());
console.log(guillermo);







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

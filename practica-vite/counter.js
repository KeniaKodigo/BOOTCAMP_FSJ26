export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export const PI = 3.1416

function saludar(){
  console.log("Hola desde una funcion");
}

export default function obtenerDatos(){
  //CODE..
  console.warn("Esto es una exportacion predeterminada");
}

/**
 * export
 * export default: lo utilizamos una vez para cada modulo
 */

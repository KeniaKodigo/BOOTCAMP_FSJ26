import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Principal from './Principal'
import Encabezado from './Encabezado'

function App() {
  const [count, setCount] = useState(0)

  const sumar = () => {
    let suma = 2 + 34;
    return "La suma es: " + suma;
  }

  let data = ["hola"]

  return (
    <>
      {/** pasando props */}
      <Encabezado fullname="Geraldhy Messu" saludo="Hola desde una props" sumar={sumar()}/>
      <Encabezado fullname="Guillermo" saludo="Hola desde una props" sumar={sumar()} />
      <Principal />
    </>
  )
}

export default App

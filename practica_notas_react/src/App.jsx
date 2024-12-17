import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Principal from './Principal'
import Encabezado from './Encabezado'
import RegisterNote from './components/RegisterNote'
import ListNotes from './components/ListNotes'
import style from './assets/css/App.module.css'
import RegisterHook from './components/RegisterHook'

function App() {
  //declarando un estado
  //estados globales
  /**
   * count = 0 (lo que se guarda el estado), ahora vale 10
   * setCount = es el elemento que nos permite actualizar el estado
   */

  //estado para manejar la lista de las notas
  const [listNotes, setListNotes] = useState([])

  const sumar = () => {
    let suma = 2 + 34;
    return "La suma es: " + suma;
  }
  let data = ["hola"]
  console.log(listNotes);
  return (
    <>
      {/** pasando props */}
      <Encabezado fullname="Geraldhy Messu" saludo="Hola desde una props" sumar={sumar()}/>
      {/* <Encabezado fullname="Guillermo" saludo="Hola desde una props" sumar={sumar()} /> */}
      <Principal />
      <section className={style.container}>
        <div>
          {/** pasando como props el estado de la lista de notas */}
          {/* <RegisterNote listNotes={listNotes} setListNotes={setListNotes}/> */}
          <RegisterHook listNotes={listNotes} setListNotes={setListNotes}/>
        </div>
        <div>
          <ListNotes listNotes={listNotes} setListNotes={setListNotes}/>
        </div>
      </section>
    </>
  )
}

export default App

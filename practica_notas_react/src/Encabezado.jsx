import React from 'react'
import style from './assets/css/Encabezado.module.css'
import './assets/prueba.css'

//recibiendo propiedades de otro componente
export default function Encabezado({fullname, saludo, sumar}) {
  return (
    <div>
        <h1 className={style.titulo}>Bienvenido {fullname}</h1>
        <p>{saludo}</p>

        <h3 id='subtitulo'>{sumar}</h3>
    </div>
  )
}

import React from 'react'
import style from './Encabezado.module.css'

//recibiendo propiedades de otro componente
export default function Encabezado({fullname, saludo, sumar}) {
  return (
    <div>
        <h1 className={style.titulo}>Bienvenido {fullname}</h1>
        <p>{saludo}</p>

        <h3>{sumar}</h3>
    </div>
  )
}

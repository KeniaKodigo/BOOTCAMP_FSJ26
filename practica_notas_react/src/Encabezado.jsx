import React from 'react'

//recibiendo propiedades de otro componente
export default function Encabezado({fullname, saludo, sumar}) {
  return (
    <div>
        <h1>Bienvenido {fullname}</h1>
        <p>{saludo}</p>

        <h3>{sumar}</h3>
    </div>
  )
}

import React from 'react'
import style from './assets/css/Principal.module.css'

export default function Principal() {
    const PI = 3.1416

    return (
        <div>
            <h1 className={style.titulo}>Hola soy el index</h1>
            <p>El valor de PI es {PI}</p>
        </div>
    )
}




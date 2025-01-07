import React from 'react'
import { Link } from 'react-router'

export default function Bienvenida() {
    return (
        <div>
            <h1>Bienvenido a Firebase</h1>
            <h3>Gestion de productos (CRUD)</h3>

            <Link to='/random'>Click Aqui</Link>
        </div>
    )
}

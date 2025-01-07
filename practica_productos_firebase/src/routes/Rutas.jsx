import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Bienvenida from '../components/Bienvenida'
import RegistrarProducto from '../components/RegistrarProducto'
import Prueba from '../components/Prueba'

export default function Rutas() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/registro'>Registrar Producto</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        {/** englobamos todas las rutas que vamos a crear */}
        <Routes>
            {/** creando ruta por ruta 
             * path => indica el nombre de la ruta
             * element => indica el componente que tiene la ruta
             * 
            */}
            <Route path='/' element={<Bienvenida />} />
            <Route path='/registro' element={<RegistrarProducto />} />
            <Route path='/random' element={<Prueba />}/>
        </Routes>

        </BrowserRouter>
    )
}

//react router dom => componentes, funciones
/**
 * <BrowserRouter /> => engloba tu proyecto para el manejo de rutas
 * <Routes /> => engloba todas las rutas de nuestro proyecto
 * <Route />
 * <Link /> => redirecciona a la ruta deseada
 * 
 */
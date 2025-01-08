import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from '../firebase/appConfig'

export default function Productos() {
    //estado para los productos
    const [productos, setProductos] = useState([]);

    //haciendo el efecto de obtener todos los productos
    useEffect(() => {
        //funcion que nos permite visualizar la informacion a tiempo real bd
        onSnapshot(
            //obtener la coleccion
            collection(db, "productos"),
            //funcion que nos va permitir acceder a los documentos
            (snapshot) => {
                //snapshot.docs => mandarme un arreglo con los documentos
                console.log(snapshot.docs[0].data());

                //creando un arreglo para los productos (documentos de la coleccion)
                const arreglo_productos = snapshot.docs.map((doc) => {
                    //copiando la informacion de cada documento + el id
                    return {...doc.data(), id: doc.id}
                });

                console.log(arreglo_productos);
                //actualizando el estado con los productos
                setProductos(arreglo_productos);
            }
        )
    }, [])

    return (
        <div>
            <h1>Lista de Productos</h1>
        </div>
    )
}

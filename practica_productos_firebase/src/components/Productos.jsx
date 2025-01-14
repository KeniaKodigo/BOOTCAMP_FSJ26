import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from '../firebase/appConfig'
import { Link } from 'react-router';
import Swal from 'sweetalert2';

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

    //metodo para eliminar un producto
    const eliminarProducto = (id_producto) => {
        console.log(id_producto);
        
        try{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //eliminando el producto
                    deleteDoc(doc(db, "productos", id_producto));
                    
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        }catch(error){
            console.error('Error al eliminar un producto', error)
        }
    }

    return (
        <div>
            <h1>Lista de Productos</h1>
            {
                /** iterando los productos de firebase */
                productos.map((producto) => {
                    return (
                        <div key={producto.id}>
                            <h3>{producto.nombre}</h3>
                            <p><strong>Descripcion: </strong>{producto.descripcion}</p>
                            <p><strong>Precio: </strong>{producto.precio}</p>
                            <Link to={`/editar/${producto.id}`}>Editar</Link>
                            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

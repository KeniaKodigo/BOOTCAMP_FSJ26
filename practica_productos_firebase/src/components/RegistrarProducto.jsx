import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useForm } from 'react-hook-form'
import db from '../firebase/appConfig';
import { useNavigate } from 'react-router';

export default function RegistrarProducto() {
    const { register, handleSubmit, formState: { errors }} = useForm()

    //constante que nos va permitir redirigirnos a otros componentes
    const navigate = useNavigate()

    //funcion asincrona para guardar los datos del producto
    const guardarProducto = async (data) => {
        console.log(data); //{}

        //validar los errores
        try{
            /**
             * agregamos un nuevo producto a firebase, se pide la bd, coleccion y los datos
             * a enviar
             */
            await addDoc(collection(db,"productos"), {
                nombre: data.nombre,
                descripcion: data.descripcion,
                precio: data.precio
            });

            console.log('Si funciono');
            
        }catch(error){
            console.error("Error al guardar el producto", error)
        }

        //redirecciona para la lista productos
        navigate('/lista')
    }

    return (

        <div>
            <h1>Registro de Productos</h1>
            <form action="" onSubmit={handleSubmit(guardarProducto)}>
                <div>
                    <label htmlFor="">Nombre del producto</label>
                    <input type="text" {...register("nombre")}/>
                </div>

                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" {...register("descripcion")}/>
                </div>

                <div>
                    <label htmlFor="">Precio</label>
                    <input type="text" {...register("precio")}/>
                </div>

                <div>
                    <input type="submit" value='Guardar Producto'/>
                </div>
            </form>
        </div>
    )
}

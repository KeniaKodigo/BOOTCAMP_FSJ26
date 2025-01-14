import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import db from '../firebase/appConfig';
import { useForm } from 'react-hook-form';

export default function EditarProducto() {
    //obtenemos el valor del parametro de la ruta
    const { id_producto } = useParams();
    const { register, handleSubmit, setValue ,formState: { errors }} = useForm()
    //setValue => devuelve el valor de una entrada de dato

    //constante que nos va permitir redirigirnos a otros componentes
    const navigate = useNavigate()

    //obteniendo la informacion del documento
    useEffect(() => {

        //funcion para obtener
        const obtenerProducto = async () => {
            const producto = await getDoc(doc(db, "productos", id_producto));
            console.log(producto);
            
            //validando si el documento existe
            if(producto.exists()){
                const producto_data = producto.data()
                console.log(producto_data);
                
                //Devolvemos la informcion del producto al formulario
                setValue("nombre", producto_data.nombre)
                setValue("descripcion", producto_data.descripcion)
                setValue("precio", producto_data.precio)

            }else{
                console.log("No existe tal producto");
            }
        }

        obtenerProducto()
    }, [])

    //editando un producto
    const editarProducto = async (data) => {
        console.log(data); //{}

        //validar los errores
        try{
            /**
             * agregamos un nuevo producto a firebase, se pide la bd, coleccion y los datos
             * a enviar
             */
            await updateDoc(doc(db,"productos",id_producto), {
                nombre: data.nombre,
                descripcion: data.descripcion,
                precio: data.precio
            });

            console.log('Si funciono');
            
        }catch(error){
            console.error("Error al actualizar el producto", error)
        }

        //redirecciona para la lista productos
        navigate('/lista')
    }

    return (
        <div>
            <h1>Editar Producto</h1>
            <form action="" onSubmit={handleSubmit(editarProducto)}>
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
                    <input type="submit" value='Actualizar Producto'/>
                </div>
            </form>

        </div>
    )
}

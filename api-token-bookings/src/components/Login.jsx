import React from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../services/autenticacionServices';

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    //metodo para utilizar el inicio de sesion
    const loginForm = async (data) => {
        console.log(data);
        const response = await login(data)
        console.log(response);

        //validando si la respuesta es un OK(200)
        if(response?.token){
            //almacenamos en el sessionstorage su token
            sessionStorage.setItem('api-token',response.token)
        }
    }

    return (
        <div>
            <h1>Iniciar sesion</h1>

            <form action="" onSubmit={handleSubmit(loginForm)}>
                <div>
                    <label htmlFor="">Correo</label>
                    <input type="text" {...register("email")}/>
                </div>

                <div>
                    <label htmlFor="">Contraseña</label>
                    <input type="text" {...register("password")}/>
                </div>
                <div>
                    <button type='submit'>Iniciar sesion</button>
                </div>
            </form>
        </div>
    )
}

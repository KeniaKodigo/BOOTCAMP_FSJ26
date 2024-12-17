import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../assets/css/Form.module.css'
import { v4 as uuidv4} from 'uuid'

export default function RegisterHook({listNotes, setListNotes}) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm()

    /**
     * register: guarda la informacion de cada entrada de dato
     * ... (spread operator)
     * handleSubmit = accion o el evento que se encarga de mantener la informacion
     * reset => es una funcion que limpia el formulario
     * watch => testeamos cada entrada de dato
     * formState {errors} => validar la entrada de datos y devolver errores
     */
    //funcion para guardar las notas
    const saveNote = (data) => {
        //data => representa el objeto del formulario (de la entrada de datos)
        console.log(data);

        setListNotes([...listNotes, {
            id: uuidv4(),
            titleNote: data.title,
            descriptionNote: data.description 
        }])
        //resetiamos el formulario
        reset()
    }
    //evaluando la entrada del titulo
    //console.log(watch('title'));
    

    return (
        <div>
            <h1>Registrar Notas</h1>

            <form action="" onSubmit={handleSubmit(saveNote)}>
                <div>
                    <label htmlFor="">Titulo</label><br />
                    <input type="text" className={styles.input} {...register("title", { required: true, maxLength: 20 })}/>
                    {errors.title && <span className={styles.error}>Este campo es obligatorio y debe contener maximo 20 caracteres</span>}
                </div>

                <div>
                    <label htmlFor="">Descripcion</label><br />
                    <textarea  cols={41} rows={5} {...register('description', {required: true})}></textarea>
                    {errors.description && <span className={styles.error}>Este campo es obligatorio</span>}
                </div>
                <div>
                    <input type="submit" className={styles.btn} value="Guardar Nota"/>
                </div>
            </form>
        </div>
    )
}

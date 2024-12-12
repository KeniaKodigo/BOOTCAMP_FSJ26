import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'


//recibiendo props
export default function RegisterNote({listNotes, setListNotes}) {
    //declarando 2 estados para las entradas de datos
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    //funcion para capturar el titulo de la nota
    //e => evento desencadena algo
    const handleTitle = (e)=> {
        // console.log(e.target.value)
        setTitle(e.target.value)
    }

    //funcion para capturar la descripcion de la nota
    const handleDescription = (e)=> {
        // console.log(e.target.value)
        setDescription(e.target.value)
    }

    //funcion para guardar las notas
    const saveNote = (e) => {
        //cancelamos la accion del submit
        e.preventDefault()
        //guardando la nota en el estado de lista de notas
        //spread operator (...)
        //copiamos el arreglo anterior y agregamos la nueva nota
        setListNotes([...listNotes, {
            id: uuidv4(),
            titleNote: title,
            descriptionNote: description 
        }])
    }

    // console.log(`Estado del titulo: ${title}`);
    // console.log(listNotes)

    return (
        <div>
            <h1>Registrar Notas</h1>

            <form action="" onSubmit={saveNote}>
                <div>
                    <label htmlFor="">Titulo</label>
                    <input type="text" onChange={(e) => handleTitle(e)}/>
                </div>

                <div>
                    <label htmlFor="">Descripcion</label>
                    <textarea onChange={(e) => handleDescription(e)}></textarea>
                </div>
                <div>
                    <input type="submit" value="Guardar Nota"/>
                </div>
            </form>
        </div>
    )
}


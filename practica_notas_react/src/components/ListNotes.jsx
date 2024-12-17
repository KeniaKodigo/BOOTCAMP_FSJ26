import React from 'react'
import style from '../assets/css/Note.module.css'

export default function ListNotes({listNotes, setListNotes}) {
    console.log(`Estado compartido para el componente LisNotes:`);
    console.log(listNotes);

    //metodo para eliminar una nota por su Id
    const deleteNoteById = (id) => {
        //filtrar las notas que sean diferente al id seleccionado
        console.log(`Id de la nota: ${id}`);
        //setListNotes se encarga de actualizar el filtrado de las notas
        setListNotes(listNotes.filter((note) => note.id !== id))
    }
    
    return (
        
        <div>
            <h2>Lista de Notas</h2>

            {/** mostrar las notas que ingresa el usuario, foreach, map, for, while 
             * map() =>
             * 
             * iterando las notas del arreglo
            */}
            {
                //validar si el estado (arreglo) esta vacio
                //operador ternario (equivale al if): ? / :
                listNotes.length > 0 ?
                    //note representa cada elemento del arreglo
                    listNotes.map((note) => {
                        //fragmento = <>
                        return (
                            <>
                                {/** la key representa los elementos unicos del arreglo, es decir el id de cada nota */}
                                <div key={note.id} className={style.card}>
                                    <button className={style.btn} onClick={() => deleteNoteById(note.id)}>X</button>
                                    <h3 className={style.title_note}>{note.titleNote}</h3>
                                    <p className={style.description}>{note.descriptionNote}</p>
                                </div>
                            </>
                        )
                    })
                : <h4>No hay notas...</h4>
            }
        </div>
    )
}

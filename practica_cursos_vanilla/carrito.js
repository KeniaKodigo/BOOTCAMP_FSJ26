import Swal from "sweetalert2";

/**
 * agregar las clases al carrito
 * leer datos
 * eliminar una clase
 * vaciar el carrito
 */

//metodo para agregar un curso
//evento desencadenado (evento prederteminado)
export function agregarCurso(e){
    //solo tiene que devolver los elementos que contengan la clase "button-carrito"
    if(e.target.classList.contains('button-carrito')){
        //si esto es verdadero devuelve el boton seleccionado
        console.log(e.target) //elemento html seleccionado

        //parentElement
        //devolvemos el elemento padre (abuelo) del boton <div?
        const cursoSeleccionado = e.target.parentElement.parentElement;
        console.log(cursoSeleccionado);

        //desabilitamos el boton
        e.target.classList.add('disabled')
        //modificamos el texto del boton
        e.target.textContent = 'Ir al carrito'

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregado el curso",
            showConfirmButton: false,
            timer: 1500
        });
        
    }
    
}



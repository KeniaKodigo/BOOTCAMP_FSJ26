import Swal from "sweetalert2";

/**
 * agregar las clases al carrito
 * leer datos
 * eliminar una clase
 * vaciar el carrito
 */

//variable que va guardar los cursos
let arreglo_cursos = []
const body = document.querySelector('tbody')

//metodo para agregar un curso
//evento desencadenado (evento prederteminado)
export function agregarCurso(e){
    //solo tiene que devolver los elementos que contengan la clase "button-carrito"
    if(e.target.classList.contains('button-carrito')){
        //si esto es verdadero devuelve el boton seleccionado
        // console.log(e.target) //elemento html seleccionado

        //parentElement
        //devolvemos el elemento padre (abuelo) del boton <div?
        const cursoSeleccionado = e.target.parentElement.parentElement;
        // console.log(cursoSeleccionado);
        // console.log(e.target);
        

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
        
        //vamos a llamar la funcion para obtener el curso
        leerDatos(cursoSeleccionado)
    }
}

//Funcion para leer los datos del curso y agregarlo al arreglo
function leerDatos(curso){
    console.log("Cursos seleccionado: ", curso);

    //convirtiendo en un objeto el curso seleccionado
    const objetoCurso = {
        titulo: curso.querySelector('h5').textContent,
        imagen: curso.querySelector('img').src,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('button').getAttribute('data-id')
    }
    // console.log(objetoCurso);

    //metodo para agregar elementos a un arreglo
    arreglo_cursos.push(objetoCurso)
    console.table(arreglo_cursos);
    
    //llamando la funcion para dibujar la tabla
    carritoHTML()
}

//funcion para iterar el arreglo y mostrarlo en la tabla
function carritoHTML(){

    //limpiando (reseteando el tbody)
    body.innerHTML = ""
    //iterando el arreglo de los cursos
    arreglo_cursos.forEach(curso => {
        //iteraciones
        //creando la etiqueta tr (que va a mostrar cada fila para cada curso)
        const fila = document.createElement('tr') //<tr>

        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100" />
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <button>X</button>
            </td>
        `
        //agregando la fila al tbody
        body.appendChild(fila)
    })
}





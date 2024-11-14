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
                <button class="borrar_curso" data-id=${curso.id}>X</button>
            </td>
        `
        //agregando la fila al tbody
        body.appendChild(fila)
    })
}

//funcion para eliminar un curso por su id
export function eliminarCurso(e){
    //validando que seleccione la etiqueta del boton para eliminar un curso
    if(e.target.classList.contains('borrar_curso')){
        // console.log(e.target);
        
        console.log('este es el boton de eliminar');
        
        //obteniendo el id del curso que quiere eliminar la persona
        const idCurso = e.target.getAttribute('data-id');
        console.log('Curso que quiere eliminar la persona: ', idCurso);

        //obteniendo el boton para habilitarlo cuando la persona elimine el curso
        const habilitarBoton = document.querySelector(`.button-carrito[data-id="${idCurso}"]`);
        console.log("Boton que vamos habilitar:",habilitarBoton);
        
    
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
                //filtramos los cursos que sean diferentes al id que selecciono la persona
                arreglo_cursos = arreglo_cursos.filter(curso => curso.id != idCurso)

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                console.log(arreglo_cursos);

                //remover una clase a una etiqueta html
                if(habilitarBoton){
                    habilitarBoton.classList.remove('disabled')

                    habilitarBoton.textContent = "Agregar al carrito"
                }
                

                //llamando la funcion para que actualize el arreglo en la tabla
                carritoHTML()
            }
        });
    }
}





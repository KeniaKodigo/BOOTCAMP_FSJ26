//importamos bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { agregarCurso, eliminarCurso } from './carrito';


//utilizamos un evento de escucha para todo el documento HTML
//domcontentLoaded => esta atento a toda la pagina web (cuando se recargue o se monte)
document.addEventListener('DOMContentLoaded',() => {
    
    //accediendo en el main
    document.getElementById('lista-cursos').addEventListener('click', agregarCurso)

    //accediendo a la table
    document.getElementById('lista-carrito').addEventListener('click', eliminarCurso)
}) 
console.log(document);

//ARBOL DE NODOS => MUESTRA LOS ELEMENTOS DEL HTML

//API DE NAVEGACION

let resultado = document.getElementsByTagName('h1')
console.log(resultado);

let titulo = document.getElementById('titulo')
console.log(titulo.textContent);

/**
 * a traves de la etiqueta html
 * de una clase
 * de un id
 * de un atributo
 */
let titulo_query = document.querySelector('.subtitulo');
console.log(titulo_query);
console.log(document.querySelector('p'))
console.log(document.querySelector('#parrafo'))
console.log(document.querySelector('a[href="facebook"]').textContent);
//find

console.log(document.querySelectorAll('p'))


//API DE MANIPULACION

//quiero crear un nuevo elemento html
let nuevo_li = document.createElement('li')
let segundo_li = document.createElement('li')

//modificando / agregando texto al li
nuevo_li.textContent = "querySelectorAll"
segundo_li.textContent = "getElementsClassName"

//appendchild = agrega hijos al html

let lista = document.querySelector('.lista_metodos')
console.log(lista);
lista.appendChild(nuevo_li)
lista.appendChild(segundo_li)

function darClick(){
    alert("Utilizaste el evento onclick")
}

function verificarText(){
    console.log("verificando cambio....")
}

function lugarTuristico(){
    //accediendo al elemento select
    let lugar = document.getElementById('lugares'); //etiqueta

    alert(`Seleccionaste este lugar: ${lugar.value}`)
    console.log(lugar.value);
}







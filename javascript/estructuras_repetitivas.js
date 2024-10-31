/**
 * Podemos reutilizar un proceso
 * for, while, do while
 */

//contador 1 al 50
function contador(){
    for(let i = 1; i <= 50; i++){ //++ (indica que estas incrementando de uno en uno)
        document.write("Contador: " + i + "<br>");
    }
}
contador()

function contadorWhile(){
    let i = 1;
    while(i <= 50){
        document.write("Contador con WHILE: " + i + "<br>");
        i++;
    }

    // let dato = false;
    // while(dato){
    //     console.log("Hola")
    // }

}
contadorWhile()

function contadorDoWhile(){
    let i = 1;

    do{
        document.write("Contador con DO WHILE: " + i + "<br>");
        i++;
    }while(i <= 50)
}
/**
 * siempre se va ejecutar la primera vez
 */
contadorDoWhile();

//FOR OF / FOR IN

//for of: iteramos arreglos y nos devuelve sus valores
function iterarArreglo(){
    let hobbies = ["ver tele","dibujar","bailar","jugar play"]; //4 elementos
    let cadena = "Hola"; //4 caracteres

    /**
     * i = 0, 1, 2, 3, 4
     * hobbies[0] = ver tele 
     * hobbies[1] = dibujar
     * hobbies[2] = bailar
     * hobbies[3] = jugar play
     * hobbies[4] = undefined
     */
    //length = devuelve la longitud de una cadena y de un arreglo
    for(let i = 0; i < hobbies.length; i++){
        console.log("Hobbie: " + hobbies[i]);
    }
    console.log("------------- FOR OF -----------------")
    //iterar arreglo Y DEVUELVE EL ELEMENTO
    for(const item of hobbies){
        console.log("Hobbie: " + item);
    }
}
iterarArreglo()

function iterarArregloObjeto(){
    let estudiantes = [
        {nombre: "Luis Eduardo", bootcamp: "FSJ26"},
        {nombre: "Angelica Rodriguez", bootcamp: "FSJ26"},
        {nombre: "Mateo Canales", bootcamp: "FSJ24"}
    ]

    //itera arreglos y devuelve el indice
    for(const index in estudiantes){
        /**
         * estudiantes[0].nombre
         * estudiantes[1]
         * estudiantes[2]
         */
        console.log(index)
        console.log("Estudiante: " + estudiantes[index].nombre)
    }
}
iterarArregloObjeto()


//23.566767667
//23.57
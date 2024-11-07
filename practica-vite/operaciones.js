
export function sumar(){
    //obteniendo la entrada de datos
    let numero1 = document.getElementById('num1').value; //"10"
    let numero2 = document.getElementById('num2').value; //"20"

    /**
     * parseInt()
     * parseFloat()
     * Number()
     */
    let resultado = Number(numero1) + Number(numero2);
    console.log(`El resultado de la suma es ${resultado}`);
}


export function operacionMatematica(){
    console.log("hola");
    
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
    let opcion = document.querySelector('.operaciones').value;
    let resultado = 0;

    switch(opcion){
        case "restar":
            resultado = numero1 - numero2;
            break;
        case "multiplicar":
            resultado = numero1 * numero2;
            break;
        case "dividir":
            resultado = numero1 / numero2;
            break;
        default:
            console.log("Selecciona una operacion");
    }

    console.log(`Elegiste la operacion: ${opcion}`);
    console.log(`Resultado: ${resultado}`);
}

//ESTRUCTURA CONDICIONALES
function votar(edad){
    if(edad >= 18){
        alert("Puedes Votar");
    }else{
        alert("Intenta el otro año")
    }
}

//Operador Ternario (? | :)
function votarOperadorTernario(edad){
    console.log(edad >= 18 ? "Puedes Votar" : "Intenta el otro año")
}

votarOperadorTernario(23)

//Uso del if - else if - else
/**Elabore un algoritmo para una tienda de café que tenga una promoción de descuento para vender al por mayor, 
esto dependerá del número de café que compre las personas, si son más o igual de 5 café pero menor o igual a 10 tendrán un 20% de descuento, 
si compra más de 10 pero menor o igual a 20 tendrán un 40% de descuento, si compra más de 20 tendrá el 50% de descuento.

Nota: El precio del café es de $25.00 */
function tiendaCafe(cantidad_cafe){
    if(cantidad_cafe >=5 && cantidad_cafe <= 10){
        console.log("Tienes un 20% de descuento")
    }else if(cantidad_cafe > 10 && cantidad_cafe <= 20){
        console.log("Tienes un 40% de descuento")
    }else if(cantidad_cafe > 20){
        console.log("Tienes un 50% de descuento")
    }else{
        console.log("No tienes descuento")
    }
} 
tiendaCafe(14)
tiendaCafe(2)
tiendaCafe(25)

// votar(15)
// votar(30)
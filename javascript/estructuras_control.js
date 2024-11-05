
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
    const precio = 25;
    let total = 0;

    if(cantidad_cafe >=5 && cantidad_cafe <= 10){
        total = (cantidad_cafe * precio) * 0.80;
        console.log("Tienes un 20% de descuento y tu total a pagar es: " + total)
    }else if(cantidad_cafe > 10 && cantidad_cafe <= 20){
        total = (cantidad_cafe * precio) * 0.60;
        console.log("Tienes un 40% de descuento y tu total a pagar es: " + total)
    }else if(cantidad_cafe > 20){
        total = (cantidad_cafe * precio) * 0.50;
        console.log("Tienes un 50% de descuento y tu total a pagar es: " + total)
    }else{
        total = cantidad_cafe * precio;
        console.log("No tienes descuento, tu total es pagar es" + total)
    }
} 
tiendaCafe(14)
tiendaCafe(2)
tiendaCafe(25)

//uso de switch
function escogerPago($forma_pago){
    switch($forma_pago){
        case "Efectivo":
            alert("Has seleccionado efectivo");
            break;
        
        case "Depositar":
            alert("Has seleccionado deposito");
            break;
        
        case "Paypall":
            alert("Has seleccionado paypall");
            break;
        default:
            alert("Selecciona una forma de pago");
    }
}

escogerPago("Paypall");

//creando un <div>

// votar(15)
// votar(30)
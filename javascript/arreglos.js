let personas = [
    { nombre: 'Isaac', edad: 16 },
    { nombre: 'Cristian', edad: 18 },
    { nombre: 'Edgar', edad: 15 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];

for(const persona of personas){
    console.log(persona)
}

//foreach, map()
console.log("USO DE FOREACH");

personas.forEach(persona => {
    console.log(persona);
})

console.log("USO DE MAP");
/**
 * el map el primer argumento muestra los elementos del arreglo
 * el segundo argumento muestra la posicion del arreglo
 */
let arregloCopia = personas.map((persona, item) => {
    // if(item == 2){
        // console.log(item)
        
    // }
    return persona.nombre
})
console.log(personas)
console.log(arregloCopia);

//filter
let arregloMayores = personas.filter(persona => persona.edad > 20)
console.log(arregloMayores);

//find => devuelve un valor (devuelve el primer elemento que cumpla la condicion)
let objectFind = personas.find(persona => persona.edad > 20)
console.log(objectFind);

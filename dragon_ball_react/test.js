let favoritos = [
    {
        id: 1,
        name: "Goku",
        race: "Saiyan"
    },
    {
        id: 2,
        name: "Vegeta",
        race: "Saiyan"
    },
    {
        id: 3,
        name: "Krilin",
        race: "Human"
    }
]
//verificar si un elemento existe en el arreglo
//si existe el personaje -> quitarlo
//si no existe -> agregarlo

favoritos.name //{} - []
//filter -> find (devuelve el primer elemento) -> elemento (fresa)
//true / false

let buscar_personaje = favoritos.find((personaje) => personaje.id == 2) //{personaje}
//some() => buscar en base a una condicion => true/false (find)
//every() => buscar en base a una condicion => true/false (filter)
buscar_personaje = favoritos.some((personaje) => personaje.id == 2) //true / false

buscar_personaje ? alert("se encontro") : alert("no se encontro") 

if(buscar_personaje){
    alert("se encontro")
}else{
    alert("no se encontro")
}
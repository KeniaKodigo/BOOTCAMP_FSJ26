
//Declarando una funcion asincrona para obtener los personajes de la api dragon ball
export async function getDragonBall(){
    /**
     * funcion asincronica: son funciones que ejecutamos en segundo plano
     * fetch: metodo nativo que nos ayuda a consumir url externas
     * axios: es una libreria que nos ayuda a consumir una api, tiene varios metodos HTTP
     * 
     */

    //validando si la promesa se cumple o no
    try{
        const respuesta = await fetch("https://dragonball-api.com/api/characters") //promesa es como un objeto
        // console.log(respuesta);
        //mandamos la respuesta en un formato json, devuelve la info que necesitamos del endpoint
        const data = await respuesta.json()
        console.log(data); //{items, links, meta}

        //accediendo a la propiedad items
        // console.log(data.items);
        const arreglo_personajes = data.items; //[]
        console.log(arreglo_personajes);

        //LLAMANDO EL DIV QUE TENDRA LA INFO DE DRAGON BALL
        const divDragonBall = document.querySelector('.contenedor_personajes');

        //Iterando el arreglo
        for(const personaje of arreglo_personajes){
            //accediendo a los elementos del arreglo (atributos de cada objeto del personaje)
            console.log("Personaje:" + personaje.name);
            console.log("Raza:" + personaje.race);
            
            /** dentro del div tiene que aparecer el nombre, imagen, raza y ki de cada personaje */
        }
    }catch(error){
        console.error("Error al consumir los personajes de dragon ball", error);
    }
}
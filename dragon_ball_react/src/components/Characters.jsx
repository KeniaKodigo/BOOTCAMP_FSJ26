import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import style from '../assets/Characters.module.css'

export default function Characters({favorites, setFavorites}) {
    //estado para traer la info de la api
    const [characters, setCharacters] = useState([])

    //metodo para listar los personajes de la api
    //funciones asincronas
    const getCharacters = async () => {
        //await
        //manejar errores
        try{
            const response = await axios.get("https://dragonball-api.com/api/characters") //json
            //console.log(response); //{}
            //accedemos a los personajes de la api
            console.log(response.data.items);
            //actualizamos el estado de personajes
            setCharacters(response.data.items)
        }catch(error){
            console.log(error.message);
        }
    }

    //metodo para agregar o quitar favoritos
    const toggleFavorite = (character) => { //mandame un personaje
        console.log(character);
        //verificando si el personaje existe o no
        if(favorites.some((element) => element.id == character.id)){
            console.log('Ya existe');
            //si existe el personaje, lo quitamos de favoritos
            setFavorites(favorites.filter((element) => element.id != character.id))
        }else{
            //si no existe, agregamos el personaje a favoritos
            setFavorites([...favorites, character]);
        }
        
    }

    //haciendo un efecto secundario para montar los personajes de la API
    //funcion anonima => acciones
    //arreglo vacio => el efecto secundario solo se monta una vez
    useEffect(() => {
        //acciones => listar los personajes
        getCharacters();
    }, []) 

    console.log(favorites);
    

    return (
        <div>
            <h2>Personajes...</h2>
            <section>
                {
                    //iterando el estado de los personajes
                    //item => representa los elementos del arreglo
                    //index => posicion de cada elemento
                    characters.map((item, index) => {
                        //esta variable guarda si un elemento esta en favoritos o no
                        const isFavorite = favorites.some((element) => element.id == item.id)


                        return(
                            <div key={index}>
                                <img src={item.image} alt={item.name} style={{width: "30%"}}/>
                                <h3>{item.name}</h3>
                                <p>{item.ki <= 0 ? 'este personaje no tiene Ki' : `Ki: ${item.ki}`} </p>
                                <p><strong>Raza: </strong>{item.race}</p>
                                {/** pasamos item (porque item representa cada personaje del arreglo) */}
                                <button onClick={() => toggleFavorite(item)}><FaHeart className={isFavorite ? style.active : style.inactive} /></button>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}


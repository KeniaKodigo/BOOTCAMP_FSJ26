import React, { useEffect, useState } from 'react'
import { getAccomodations } from '../services/accomodationsServices'

export default function Accomodations() {
    //estado para los alojamientos
    const [accomodations, setAccomodations] = useState([])
    //estado para manejar si el usuario esta autenticado
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    //metodo que recibe los alojamientos
    const fetchData = async () => {
        const response = await getAccomodations()
        setAccomodations(response); //[lleno]
    }

    useEffect(() => {
        //validando si hay un token
        const session = sessionStorage.getItem('api-token');
        if(session){
            setIsAuthenticated(true)
            fetchData()
        }else{
            setIsAuthenticated(false)
        }
    }, [])

    console.log(accomodations);
    
    return (
        <div>
            {
                isAuthenticated ? (
                    <div>
                        <h1>Alojamientos</h1>
                        {
                            accomodations.map((item) => {
                                return (
                                    <div>
                                        <p>{item.name}</p>
                                        <img src={item.image} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : <h2>No estas autorizado para ver los alojamientos</h2>
            }
        </div>
    )
}

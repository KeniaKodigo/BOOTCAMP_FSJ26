import React, { useEffect, useState } from 'react'
import { getAccomodations } from '../services/accomodationsServices'

export default function Accomodations() {
    //estado para los alojamientos
    const [accomodations, setAccomodations] = useState([])
    //metodo que recibe los alojamientos
    const fetchData = async () => {
        const response = await getAccomodations()
        setAccomodations(response); //[lleno]
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(accomodations);
    
    return (
        <div>
            <h1>Alojamientos</h1>
        </div>
    )
}

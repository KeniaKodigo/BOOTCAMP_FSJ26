import React from 'react'

export default function Favorites({fav}) {
    return (
        <div>
            <h2>Seccion de Favoritos</h2>
            {
                fav.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.image} alt={item.name} style={{width: "30%"}}/>
                            <h3>{item.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}


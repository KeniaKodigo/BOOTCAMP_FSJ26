import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Characters from './components/Characters'
import Favorites from './components/Favorites'

function App() {
  //estado para manejar los favoritos
  //almancenamos los favoritos en el local storage (get, set)
  const storageFavorite = localStorage.getItem('DragonBallFavorites') ? JSON.parse(localStorage.getItem('DragonBallFavorites')) : [];

  const [favorites, setFavorites] = useState(storageFavorite)

  //montar el almacenamiento en el localstorage
  useEffect(() => {
    localStorage.setItem('DragonBallFavorites',JSON.stringify(favorites))
  }, [favorites])

  return (
    <>
      <h1>API DRAGON BALL</h1>
      <section>
        <div>
          <Characters favorites={favorites} setFavorites={setFavorites}/>

          <Favorites fav={favorites}/>
        </div>
      </section>
    </>
  )
}

export default App

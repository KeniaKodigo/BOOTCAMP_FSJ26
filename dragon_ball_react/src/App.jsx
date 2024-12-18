import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Characters from './components/Characters'

function App() {
  //estado para manejar los favoritos
  const [favorites, setFavorites] = useState([])

  return (
    <>
      <h1>API DRAGON BALL</h1>
      <section>
        <div>
          <Characters favorites={favorites} setFavorites={setFavorites}/>
        </div>
      </section>
    </>
  )
}

export default App

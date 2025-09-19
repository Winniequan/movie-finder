import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import FavoritesMovies from './pages/FavoritesMovies'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/favorites' element={<FavoritesMovies />} />
    </Routes>

    </>
  )
}

export default App

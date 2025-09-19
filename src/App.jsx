import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import FavoritesMovies from './pages/FavoritesMovies'
import MovieDetail from './pages/MovieDetail'
import Navbar from './components/Navbar'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<FavoritesMovies />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App

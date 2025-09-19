import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import { useTheme } from '../contexts/ThemeContext'
import MovieCard from '../components/MovieCard' 

const FavoritesMovies = () => {
  const{ favorites } = useMovieContext();
  const { colors } = useTheme();
  
  return (
    <div className={`min-h-screen ${colors.primary}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold ${colors.text.primary}`}>My Favorite Movies</h1>
        </div>
      
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full">
            {favorites.map(movie => (
              <MovieCard key={movie.id || movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className='justify-center text-center mt-20'>
            <h2 className={`text-2xl font-semibold ${colors.text.primary} mb-4`}>No Favorite Movies Yet</h2>
            <p className={colors.text.secondary}>Start adding movies and they will appear here!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoritesMovies
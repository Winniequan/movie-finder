import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useMovieContext} from '../contexts/MovieContext'
import { useTheme } from '../contexts/ThemeContext'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();
  const { colors } = useTheme();
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) {
      removeFromFavorite(movie.id);
    } else {
      addToFavorite(movie);
    }
  };

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div 
      className={`${colors.card} rounded-lg overflow-hidden shadow-lg cursor-pointer hover:transform hover:scale-105 transition-transform duration-200 h-full flex flex-col`}
      onClick={handleCardClick}
    >
      <div className="relative flex-shrink-0">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
          className="w-full h-80 object-cover" 
        />
        <div className="absolute top-2 right-2">
          <button 
            className="text-xl hover:scale-110 transition-transform duration-200 bg-black bg-opacity-50 rounded-full p-1" 
            onClick={handleFavoriteClick}
            style={{ color: favorite ? 'red' : 'white' }}
          > 
            ♥ 
          </button>
        </div>
      </div>
      <div className={`p-4 ${colors.text.primary} flex-grow flex flex-col justify-between`}>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{movie.title}</h3>
        <p className={`${colors.text.secondary} text-sm`}>Release Date: {movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard;
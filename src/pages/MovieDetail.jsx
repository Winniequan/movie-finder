import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { useMovieContext } from '../contexts/MovieContext';
import { useTheme } from '../contexts/ThemeContext';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();
  const { colors } = useTheme();
  const favorite = movie ? isFavorite(movie.id) : false;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        setError('Failed to fetch movie details');
        console.error('Error fetching movie details:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFromFavorite(movie.id);
    } else {
      addToFavorite(movie);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className={`min-h-screen ${colors.primary} flex items-center justify-center`}>
        <p className={`${colors.text.primary} text-xl`}>Loading movie details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen ${colors.primary} flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">{error}</p>
          <button 
            onClick={handleBackClick}
            className={`${colors.button.primary} text-white px-6 py-2 rounded-lg`}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className={`min-h-screen ${colors.primary} flex items-center justify-center`}>
        <p className={`${colors.text.primary} text-xl`}>Movie not found</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${colors.primary} ${colors.text.primary}`}>
      {/* Back Button */}
      <div className="p-4">
        <button 
          onClick={handleBackClick}
          className={`${colors.button.secondary} ${colors.text.primary} px-4 py-2 rounded-lg mb-4 flex items-center gap-2`}
        >
          ← Back
        </button>
      </div>

      {/* Movie Details */}
      <div className="container mx-auto px-4 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Movie Poster */}
          <div className="lg:w-1/3">
            <div className="relative">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className="w-full rounded-lg shadow-lg"
              />
              <button 
                onClick={handleFavoriteClick}
                className="absolute top-4 right-4 text-3xl hover:scale-110 transition-transform duration-200 bg-black bg-opacity-50 rounded-full p-2"
                style={{ color: favorite ? 'red' : 'white' }}
              >
                ♥
              </button>
            </div>
          </div>

          {/* Movie Info */}
          <div className="lg:w-2/3">
            <h1 className={`text-4xl font-bold mb-4 ${colors.text.primary}`}>{movie.title}</h1>
            
            {movie.tagline && (
              <p className={`text-xl ${colors.text.secondary} italic mb-6`}>"{movie.tagline}"</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${colors.text.primary}`}>Release Date</h3>
                <p className={colors.text.secondary}>{new Date(movie.release_date).toLocaleDateString()}</p>
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${colors.text.primary}`}>Runtime</h3>
                <p className={colors.text.secondary}>{movie.runtime} minutes</p>
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${colors.text.primary}`}>Rating</h3>
                <p className={colors.text.secondary}>⭐ {movie.vote_average.toFixed(1)}/10</p>
              </div>
              
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${colors.text.primary}`}>Budget</h3>
                <p className={colors.text.secondary}>
                  {movie.budget ? `$${movie.budget.toLocaleString()}` : 'N/A'}
                </p>
              </div>
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${colors.text.primary}`}>Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map(genre => (
                    <span 
                      key={genre.id}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {movie.overview && (
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${colors.text.primary}`}>Overview</h3>
                <p className={`${colors.text.secondary} leading-relaxed`}>{movie.overview}</p>
              </div>
            )}

            {movie.production_companies && movie.production_companies.length > 0 && (
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${colors.text.primary}`}>Production Companies</h3>
                <div className="flex flex-wrap gap-4">
                  {movie.production_companies.map(company => (
                    <span key={company.id} className={colors.text.secondary}>
                      {company.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

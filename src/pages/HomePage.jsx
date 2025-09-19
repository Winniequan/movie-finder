import { useEffect, useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import { useTheme } from '../contexts/ThemeContext';

const HomePage = () => {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const popularMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        setError('Failed to fetch popular movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    popularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      setError(null);
    } catch (error) {
      setError('Failed to fetch search results. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`min-h-screen ${colors.primary}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="justify-center text-center mt-12">
          <form className="flex w-full max-w-md mx-auto mt-6 gap-2" onSubmit={handleSearch}>
            <input type="text"
              className={`flex-1 px-4 py-2 rounded-l-md ${colors.border} ${colors.secondary} ${colors.text.primary} focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400`}
              placeholder='Search for movies'
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            <button type="submit" className="bg-red-500 text-white font-semibold px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors">Search</button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {loading ? (
            <p className={`mt-4 ${colors.text.primary}`}>Loading...</p>) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 max-w-full">
              {movies.map(movie => (
                <MovieCard key={movie.id || movie.imdbID} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage
import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorite = (movie) => {
        if (!favorites.find(fav => fav.id === movie.id)) {
            setFavorites([...favorites, movie]);
        }
    };

    const removeFromFavorite = (movieId) => {
        setFavorites(favorites.filter(movie => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);   
    };

    return (
        <MovieContext.Provider value={{ favorites, addToFavorite, removeFromFavorite, isFavorite }}>
            {children}
        </MovieContext.Provider>
    );
}

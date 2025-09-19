import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
    const { isDarkMode, toggleTheme, colors } = useTheme();
    
    return (
        <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white px-8 py-6 flex justify-between items-center`}>
            <h1 className="text-2xl font-bold">MovieApp</h1>
            <div className="flex items-center gap-8">
                <div className='flex gap-8 text-lg'>
                    <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
                    <Link to="/favorites" className="hover:text-gray-300 transition-colors">Favorites</Link>
                </div>
                <button
                    onClick={toggleTheme}
                    className="ml-4 p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
                    title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                    {isDarkMode ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white px-8 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">MovieApp</h1>
            <div className="links">
                <div className='flex gap-8 text-lg'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/favorites">Favorites</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
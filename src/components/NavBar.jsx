import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const NavBar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? 'flex flex-col items-center justify-center bg-black text-white hover:bg-gray-900 hover:text-white rounded-md sm:px-1 md:px-3 md:text-base lg:text-xl py-2 text-center'
            : 'flex flex-col items-center justify-center text-white hover:bg-gray-900 hover:text-white rounded-md sm:px-1 md:px-3 md:text-base lg:text-xl py-2 text-center';

    return (
        <div className="bg-indigo-600 w-full border-b border-indigo-300">
            <nav className="w-full px-2 sm:px-6 lg:px-8">
                <div className="h-20 flex items-center justify-center">
                    <div className="flex items-center gap-4">
                        <NavLink className="flex items-center" to="/">
                            <img
                                className="h-10 w-auto rounded-full"
                                src={logo}
                                alt="Chain Action"
                            />
                            <span
                                className="hidden lg:block text-blue-300 text-xl ml-2"
                                style={{
                                    fontFamily: "'Faster One', cursive",
                                    fontStyle: "italic",
                                    color: "rgb(32,156,238)",
                                }}
                            >
                                Coin Action
                            </span>
                        </NavLink>
                        <div className="flex space-x-2 ml-6">
                            <NavLink to="/" className={linkClass}>Home</NavLink>
                            <NavLink to="/exchange" className={linkClass}>Exchange</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

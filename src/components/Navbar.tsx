import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-10">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-white tracking-wide">ASTU Gym</h1>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                        <a href="#about" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                        <a href="#services" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                        <a href="#contact" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-200 hover:text-white focus:outline-none">
                            <FaBars className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
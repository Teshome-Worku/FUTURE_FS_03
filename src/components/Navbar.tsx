import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const targetId = href.replace('#', '');
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Facilities', href: '#facilities' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-10">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-3 text-2xl font-bold text-white tracking-wide group">
                                <img 
                                    src="/logo.png" 
                                    alt="ASTU Gym Logo" 
                                    className="h-12 w-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-md" 
                                />
                                <span className="hover:text-gray-200 transition-colors">ASTU Gym</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={toggleMobileMenu}
                            className="text-gray-200 hover:text-white focus:outline-none p-2"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-zinc-800 shadow-2xl">
                    <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-gray-200 hover:text-white hover:bg-zinc-800/50 block px-4 py-4 rounded-xl text-base font-medium transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
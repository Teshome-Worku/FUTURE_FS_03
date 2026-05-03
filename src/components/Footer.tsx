import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-black py-12 border-t border-zinc-900 text-center flex flex-col items-center">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex justify-center mb-4">
                    <img src="/logo.png" alt="ASTU Gym Logo" className="h-16 w-auto" />
                </div>
                <h2 className="text-2xl font-extrabold text-white tracking-widest mb-3">ASTU GYM</h2>
                <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Premium fitness facility located near ASTU campus. Build strength, increase endurance, and stay consistent with us.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-gray-400 hover:text-red-500 font-medium transition-colors text-sm">Home</a>
                    <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="text-gray-400 hover:text-red-500 font-medium transition-colors text-sm">Pricing</a>
                    <a href="#facilities" onClick={(e) => handleScroll(e, 'facilities')} className="text-gray-400 hover:text-red-500 font-medium transition-colors text-sm">Facilities</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-gray-400 hover:text-red-500 font-medium transition-colors text-sm">Contact</a>
                </div>

                <div className="flex justify-center gap-6 mb-8">
                    <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                        <FaFacebook size={20} />
                    </a>
                    <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                        <FaTwitter size={20} />
                    </a>
                </div>

                <div className="border-t border-zinc-800/50 pt-8 mt-2 w-full max-w-xs mx-auto">
                    <p className="text-zinc-600 text-xs">
                        &copy; {new Date().getFullYear()} ASTU Gym. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
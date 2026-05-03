import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-8">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-wide"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Build Strength.<br />
                    <span className="text-red-500 block mt-2">Stay Consistent.</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Join ASTU GYM and start your fitness journey with the best equipment and environment designed for your success.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/30 hover:shadow-lg">
                        Join Now
                    </button>
                    <button className="border-2 border-gray-300 text-white hover:border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                        View Pricing
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
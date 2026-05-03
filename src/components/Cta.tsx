import React from 'react';
import { motion } from 'framer-motion';

const Cta: React.FC = () => {
    return (
        <section className="bg-black py-24 px-6 lg:px-8 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto">
                <motion.div 
                    className="relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-red-900/20 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Subtle background glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            Ready to Transform <br className="hidden md:block" />
                            <span className="text-red-500 mt-2 block">Your Body?</span>
                        </h2>
                        
                        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Join ASTU GYM today and take the first step toward a stronger, healthier you.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <button className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30">
                                Join Now
                            </button>
                            <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-zinc-700">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Cta;

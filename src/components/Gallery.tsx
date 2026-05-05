import React from 'react';
import { motion } from 'framer-motion';

const images = [
    {
        src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
        alt: 'Gym interior with modern equipment'
    },
    {
        src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80',
        alt: 'Weight training area'
    },
    {
        src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
        alt: 'Cardio machines zone'
    },
    {
        src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80',
        alt: 'Dumbbell rack'
    },
    {
        src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
        alt: 'Athlete training'
    },
    {
        src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
        alt: 'Group workout session'
    }
];

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="bg-black py-24 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Inside ASTU GYM
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Take a look at the space where your transformation begins.
                    </motion.p>
                </div>
            </div>

            {/* Horizontal scroll container — full-bleed */}
            <motion.div
                className="flex gap-5 overflow-x-auto px-6 lg:px-8 pb-4 scrollbar-hide"
                style={{ scrollSnapType: 'x mandatory' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-72 md:w-80 lg:w-96 aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                        style={{ scrollSnapAlign: 'start' }}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                        />
                    </div>
                ))}
            </motion.div>

            {/* Note */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8">
                <p className="text-zinc-600 text-xs text-center italic">
                    * Images are for preview purposes and can be replaced with actual gym photos.
                </p>
            </div>
        </section>
    );
};

export default Gallery;

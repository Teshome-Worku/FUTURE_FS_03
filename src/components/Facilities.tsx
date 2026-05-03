import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaUsers, FaShower, FaCogs, FaBroom } from 'react-icons/fa';

interface Facility {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const facilities: Facility[] = [
    {
        id: 1,
        title: 'Modern Equipment',
        description: 'Train with state-of-the-art machines and free weights designed for all fitness levels.',
        icon: <FaCogs className="w-8 h-8 text-red-500" />
    },
    {
        id: 2,
        title: 'Strength Zone',
        description: 'Dedicated area with heavy weights, squat racks, and benches to build serious muscle.',
        icon: <FaDumbbell className="w-8 h-8 text-red-500" />
    },
    {
        id: 3,
        title: 'Cardio Area',
        description: 'Elevate your heart rate with our premium treadmills, ellipticals, and stationary bikes.',
        icon: <FaRunning className="w-8 h-8 text-red-500" />
    },
    {
        id: 4,
        title: 'Group Classes',
        description: 'Join energetic group sessions ranging from high-intensity interval training to relaxing yoga.',
        icon: <FaUsers className="w-8 h-8 text-red-500" />
    },
    {
        id: 5,
        title: 'Locker Rooms',
        description: 'Spacious, secure lockers with pristine shower facilities for your post-workout refresh.',
        icon: <FaShower className="w-8 h-8 text-red-500" />
    },
    {
        id: 6,
        title: 'Clean Environment',
        description: 'We maintain the highest standards of hygiene with continuous cleaning throughout the day.',
        icon: <FaBroom className="w-8 h-8 text-red-500" />
    }
];

const Facilities: React.FC = () => {
    return (
        <section id="facilities" className="bg-black py-24 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Facilities
                    </motion.h2>
                    <motion.p 
                        className="text-gray-400 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Everything you need to crush your goals in a premium, motivating environment.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={facility.id}
                            className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-500/50 hover:bg-zinc-800/50 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-black/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {facility.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {facility.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {facility.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;

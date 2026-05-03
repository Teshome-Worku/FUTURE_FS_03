import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaUsers, FaCogs, FaMusic, FaClipboardList } from 'react-icons/fa';

interface FacilityItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const equipment: FacilityItem[] = [
    {
        id: 1,
        title: 'Modern Machines',
        description: 'Train safely and effectively with our state-of-the-art guided weight machines.',
        icon: <FaCogs className="w-8 h-8 text-red-500" />
    },
    {
        id: 2,
        title: 'Strength Zone',
        description: 'Dedicated free-weight area with squat racks, benches, and dumbbells to build muscle.',
        icon: <FaDumbbell className="w-8 h-8 text-red-500" />
    },
    {
        id: 3,
        title: 'Cardio Area',
        description: 'Elevate your heart rate using our premium treadmills, ellipticals, and stationary bikes.',
        icon: <FaRunning className="w-8 h-8 text-red-500" />
    }
];

const programs: FacilityItem[] = [
    {
        id: 4,
        title: 'Aerobics & Zumba',
        description: 'Burn calories and have fun with our rhythm-based, high-energy cardio dance sessions.',
        icon: <FaMusic className="w-8 h-8 text-red-500" />
    },
    {
        id: 5,
        title: 'Group Classes',
        description: 'Join motivating group sessions ranging from intense HIIT to relaxing yoga and pilates.',
        icon: <FaUsers className="w-8 h-8 text-red-500" />
    },
    {
        id: 6,
        title: 'Guided Workouts',
        description: 'Work with our expert personal trainers for customized plans and one-on-one coaching.',
        icon: <FaClipboardList className="w-8 h-8 text-red-500" />
    }
];

const FacilityCard: React.FC<{ item: FacilityItem; index: number }> = ({ item, index }) => (
    <motion.div
        className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-500/50 hover:bg-zinc-800/50 group flex flex-col h-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <div className="bg-black/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">
            {item.title}
        </h4>
        <p className="text-gray-400 leading-relaxed flex-grow">
            {item.description}
        </p>
    </motion.div>
);

const Facilities: React.FC = () => {
    return (
        <section id="facilities" className="bg-black py-24 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Facilities & Programs
                    </motion.h2>
                    <motion.p 
                        className="text-gray-400 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Explore our top-tier equipment and motivating classes designed to help you crush your fitness goals.
                    </motion.p>
                </div>

                <div className="mb-16">
                    <motion.h3 
                        className="text-2xl font-bold text-white mb-8 border-l-4 border-red-500 pl-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Equipment
                    </motion.h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {equipment.map((item, index) => (
                            <FacilityCard key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>

                <div>
                    <motion.h3 
                        className="text-2xl font-bold text-white mb-8 border-l-4 border-red-500 pl-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Programs
                    </motion.h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((item, index) => (
                            <FacilityCard key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;

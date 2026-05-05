import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Schedule {
    day: string;
    hours: string;
    isClosed: boolean;
}

const schedule: Schedule[] = [
    { day: 'Monday – Friday', hours: '6:00 AM – 9:00 PM', isClosed: false },
    { day: 'Saturday', hours: '7:00 AM – 8:00 PM', isClosed: false },
    { day: 'Sunday', hours: 'Closed', isClosed: true }
];

const getIsOpen = (): boolean => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
    const currentHour = now.getHours() + now.getMinutes() / 60;

    if (dayOfWeek === 0) return false;
    if (dayOfWeek === 6) return currentHour >= 7 && currentHour < 20;
    return currentHour >= 6 && currentHour < 21;
};

const OpeningHours: React.FC = () => {
    const [isOpen, setIsOpen] = useState(getIsOpen());

    useEffect(() => {
        const interval = setInterval(() => {
            setIsOpen(getIsOpen());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-black py-20 border-t border-zinc-900">
            <div className="max-w-2xl mx-auto px-6 lg:px-8">
                <motion.div
                    className="bg-zinc-900 rounded-2xl p-8 md:p-10 border border-zinc-800 text-center shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                        Opening Hours
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-400 text-sm md:text-base mt-3">
                        Visit us at the right time and start your fitness journey.
                    </p>

                    {/* Real-time status badge */}
                    <div className="mt-6">
                        <span
                            className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                                isOpen
                                    ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                                    : 'bg-red-500/10 text-red-400 border border-red-500/30'
                            }`}
                            style={{
                                filter: isOpen
                                    ? 'drop-shadow(0 0 6px rgba(34,197,94,0.4))'
                                    : 'drop-shadow(0 0 6px rgba(239,68,68,0.4))'
                            }}
                        >
                            <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                                isOpen ? 'bg-green-400' : 'bg-red-400'
                            }`}></span>
                            {isOpen ? 'Open Now' : 'Closed'}
                        </span>
                        <p className="text-xs text-gray-500 mt-2">
                            Visit us during open hours for the best experience.
                        </p>
                    </div>

                    {/* Schedule list */}
                    <div className="space-y-3 max-w-sm mx-auto mt-8">
                        {schedule.map((item) => (
                            <div
                                key={item.day}
                                className="flex justify-between items-center text-sm md:text-base"
                            >
                                <span className="text-gray-300 font-medium">{item.day}</span>
                                <span className={`font-semibold ${
                                    item.isClosed ? 'text-red-400' : 'text-white'
                                }`}>
                                    {item.hours}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OpeningHours;

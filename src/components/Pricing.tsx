import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
    name: string;
}

interface Plan {
    id: string;
    name: string;
    description: string;
    price: string;
    duration: string;
    features: Feature[];
    isPopular?: boolean;
}

const plans: Plan[] = [
    {
        id: 'daily',
        name: 'Daily Pass',
        description: 'Perfect for visitors or a quick workout.',
        price: '100 ETB',
        duration: '/day',
        features: [
            { name: 'Full access to gym equipment' },
            { name: 'Locker room access' },
            { name: 'Free Wi-Fi' }
        ],
    },
    {
        id: 'student',
        name: 'Student Plan',
        description: 'Affordable monthly plan for ASTU students.',
        price: '400 ETB',
        duration: '/month',
        features: [
            { name: 'All Daily Pass features' },
            { name: 'Flexible training hours' },
            { name: 'Group fitness classes' },
            { name: 'Student ID required' }
        ],
        isPopular: true,
    },
    {
        id: 'standard',
        name: 'Standard Plan',
        description: 'Our most comprehensive membership for locals.',
        price: '700 ETB',
        duration: '/month',
        features: [
            { name: 'All Student Plan features' },
            { name: 'Personalized workout plan' },
            { name: '1 Free PT session/month' },
            { name: 'Priority support' }
        ],
    }
];

const CheckIcon = () => (
    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Membership Plans
                    </motion.h2>
                    <motion.p 
                        className="text-gray-400 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Choose the perfect plan for your fitness journey. No hidden fees, cancel anytime.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            className={`relative bg-zinc-900 rounded-3xl p-8 border ${plan.isPopular ? 'border-red-500 shadow-2xl shadow-red-500/10 scale-100 md:scale-105 z-10' : 'border-zinc-800'} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-zinc-700 flex flex-col h-full`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                            </div>
                            
                            <div className="mb-8 flex items-baseline">
                                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                                <span className="text-gray-400 ml-2">{plan.duration}</span>
                            </div>
                            
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-300">
                                        <CheckIcon />
                                        <span className="leading-tight">{feature.name}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.isPopular ? 'bg-red-600 hover:bg-red-500 text-white hover:shadow-lg hover:shadow-red-500/30' : 'bg-zinc-800 hover:bg-zinc-700 text-white hover:text-white'}`}>
                                Join Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

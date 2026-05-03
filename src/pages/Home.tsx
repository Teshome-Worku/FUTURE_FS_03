import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Hero />
            <Pricing />
            <Footer />
        </div>
    );
};

export default Home;
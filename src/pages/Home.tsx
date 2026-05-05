import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import Pricing from '../components/Pricing';
import Cta from '../components/Cta';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Hero />
            <Facilities />
            <Gallery />
            <Pricing />
            <Cta />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
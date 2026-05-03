import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-black py-24 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Find Us & Get Started
                    </motion.h2>
                    <motion.p 
                        className="text-gray-400 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Ready to begin? Drop by our gym near ASTU campus or send us a message. We're here to help you crush your goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Contact Info & Form */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center text-gray-300 group">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 border border-zinc-800 group-hover:border-red-500 transition-colors">
                                        <FaMapMarkerAlt className="text-red-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Location</p>
                                        <p className="text-sm">Near ASTU Campus, Adama</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-300 group">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 border border-zinc-800 group-hover:border-red-500 transition-colors">
                                        <FaPhoneAlt className="text-red-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Phone</p>
                                        <p className="text-sm">+251 911 234 567</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-300 group">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 border border-zinc-800 group-hover:border-red-500 transition-colors">
                                        <FaEnvelope className="text-red-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <p className="text-sm">info@astugym.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-600/20">
                                    <FaWhatsapp className="text-2xl" />
                                    WhatsApp Us
                                </button>
                                <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300">
                                    Call Now
                                </button>
                            </div>
                        </div>

                        {/* Optional Simple Form */}
                        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-4">Send us a message</h3>
                            <form className="space-y-4">
                                <div>
                                    <input type="text" placeholder="Your Name" className="w-full bg-black text-white border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Your Email" className="w-full bg-black text-white border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" />
                                </div>
                                <div>
                                    <textarea placeholder="How can we help?" rows={4} className="w-full bg-black text-white border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors resize-none"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-red-500/30">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right Column: Map */}
                    <motion.div 
                        className="h-full min-h-[400px] lg:min-h-[800px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 relative group shadow-xl"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0645607335626!2d39.28822007469792!3d8.541571295982888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1f6db9e73549%3A0xcadcc6cebe7338e3!2sAdama%20Science%20and%20Technology%20University!5e0!3m2!1sen!2set!4v1714496245997!5m2!1sen!2set" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        ></iframe>
                        
                        <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-zinc-700 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                            <p className="text-white font-bold flex items-center gap-2">
                                <FaMapMarkerAlt className="text-red-500" />
                                ASTU GYM
                            </p>
                            <p className="text-gray-400 text-sm mt-1">Hover to explore map</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

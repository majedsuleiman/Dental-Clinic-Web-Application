import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="relative overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center bg-gray-50 dark:bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent dark:from-gray-900/95 dark:to-gray-900/40 z-10" />
                    {/* Placeholder for Hero Image */}
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068"
                        alt="Dental Clinic"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {t('hero.headline')}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            {t('hero.subheadline')}
                        </p>
                        <div className="flex gap-4">
                            <Link to="/appointment" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 transition-all hover:scale-105 transform active:scale-95 ring-offset-2 focus:ring-2 ring-primary">
                                {t('hero.cta_book')}
                            </Link>
                            <Link to="/contact" className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:-translate-y-1">
                                {t('hero.cta_contact')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview or Highlights could go here */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">We use various technologies and modern equipment to ensure the best dental care.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow cursor-pointer">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">
                                    🦷
                                </div>
                                <h3 className="text-xl font-bold mb-3 dark:text-gray-100">Modern Equipment</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaHeart } from 'react-icons/fa';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-0 min-h-screen bg-gray-50 dark:bg-gray-950">

            {/* Banner */}
            <div className="relative h-[400px] flex items-center justify-center text-center text-white">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=2000"
                        alt="About Clinic"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/70" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 p-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">{t('about.subtitle')}</p>
                </motion.div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                            {t('about.desc')}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <img src="https://images.unsplash.com/photo-1481277133748-03f39d115e6b?auto=format&fit=crop&q=80&w=800" alt="Clinic Interior" className="rounded-2xl shadow-lg w-full h-full object-cover translate-y-8" />
                        <img src="https://images.unsplash.com/photo-1598256989494-0263851500b6?auto=format&fit=crop&q=80&w=800" alt="Doctor" className="rounded-2xl shadow-lg w-full h-full object-cover" />
                    </motion.div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center border-t-4 border-primary">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-6"><FaHeart /></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('about.mission')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('about.mission_desc')}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center border-t-4 border-secondary">
                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-2xl mx-auto mb-6"><FaUsers /></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('about.vision')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('about.vision_desc')}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center border-t-4 border-accent">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent text-2xl mx-auto mb-6"><FaAward /></div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Excellence</h3>
                        <p className="text-gray-600 dark:text-gray-400">Award-winning clinic recognized for outstanding service.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

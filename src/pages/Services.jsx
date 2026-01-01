import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaTooth, FaMagic, FaSmile, FaTools, FaUserMd, FaChild } from 'react-icons/fa';

const servicesList = [
    { id: 'cleaning', icon: FaTooth, titleKey: 'services.cleaning', descKey: 'services.cleaning_desc' },
    { id: 'whitening', icon: FaMagic, titleKey: 'services.whitening', descKey: 'services.whitening_desc' },
    { id: 'braces', icon: FaSmile, titleKey: 'services.braces', descKey: 'services.braces_desc' },
    { id: 'implants', icon: FaTools, titleKey: 'services.implants', descKey: 'services.implants_desc' },
    { id: 'surgery', icon: FaUserMd, titleKey: 'services.surgery', descKey: 'services.surgery_desc' },
    { id: 'kids', icon: FaChild, titleKey: 'services.kids', descKey: 'services.kids_desc' },
];

const Services = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 }
        }
    };

    return (
        <div className="pt-16 pb-24 min-h-screen bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        {t('services.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-400"
                    >
                        {t('services.subtitle')}
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {servicesList.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 transition-colors duration-300">
                                <service.icon />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                {t(service.titleKey)}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {t(service.descKey)}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Services;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-24 pb-24 min-h-screen bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('contact.title')}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">{t('contact.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md flex items-start gap-4">
                            <div className="bg-primary/10 p-4 rounded-xl text-primary text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Location</h3>
                                <p className="text-gray-600 dark:text-gray-400">123 Dental Street, Medical City<br />Kingdom of Saudi Arabia</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md flex items-start gap-4">
                            <div className="bg-primary/10 p-4 rounded-xl text-primary text-xl">
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
                                <p className="text-gray-600 dark:text-gray-400">+966 50 000 0000</p>
                                <p className="text-gray-600 dark:text-gray-400">+966 11 000 0001</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md flex items-start gap-4">
                            <div className="bg-primary/10 p-4 rounded-xl text-primary text-xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                                <p className="text-gray-600 dark:text-gray-400">info@dentalclinic.com</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.form.name')}</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.form.email')}</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.form.message')}</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-primary dark:text-white"></textarea>
                            </div>
                            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-colors">
                                {t('contact.form.submit')}
                            </button>
                        </form>

                        <div className="mt-8 rounded-xl overflow-hidden h-48 bg-gray-200">
                            {/* Google Maps Embed Placeholder - using iframe for realism/demo */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14498.058309990525!2d46.675295!3d24.7135515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh!5e0!3m2!1sen!2sa!4v1680000000000!5m2!1sen!2sa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Map"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

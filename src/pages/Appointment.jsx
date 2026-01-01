import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Appointment = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Required';
        if (!formData.phone) newErrors.phone = 'Required';
        if (!formData.service) newErrors.service = 'Required';
        if (!formData.date) newErrors.date = 'Required';
        if (!formData.time) newErrors.time = 'Required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Simulate API call
            setTimeout(() => {
                setSubmitted(true);
                setFormData({ name: '', phone: '', service: '', date: '', time: '' });
            }, 1000);
        }
    };

    return (
        <div className="pt-16 pb-24 min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
            <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Image Side */}
                    <div className="md:w-1/2 bg-primary relative hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                            alt="Appointment"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                        />
                        <div className="relative z-10 p-12 text-white h-full flex flex-col justify-center">
                            <h2 className="text-4xl font-bold mb-6">{t('appointment.title')}</h2>
                            <p className="text-lg opacity-90">{t('appointment.subtitle')}</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-1/2 p-8 md:p-12">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-2xl font-bold md:hidden text-gray-900 dark:text-white mb-6">{t('appointment.title')}</h2>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('appointment.form.name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white`}
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('appointment.form.phone')}</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white`}
                                    />
                                    {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('appointment.form.service')}</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.service ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white`}
                                    >
                                        <option value="">Select...</option>
                                        <option value="cleaning">{t('services.cleaning')}</option>
                                        <option value="whitening">{t('services.whitening')}</option>
                                        <option value="checkup">General Checkup</option>
                                    </select>
                                    {errors.service && <span className="text-red-500 text-xs mt-1">{errors.service}</span>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('appointment.form.date')}</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.date ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white`}
                                        />
                                        {errors.date && <span className="text-red-500 text-xs mt-1">{errors.date}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('appointment.form.time')}</label>
                                        <input
                                            type="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${errors.time ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white`}
                                        />
                                        {errors.time && <span className="text-red-500 text-xs mt-1">{errors.time}</span>}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
                                >
                                    {t('appointment.form.submit')}
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center p-8"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mb-6">
                                    <FaCheckCircle />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Success!</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8">{t('appointment.form.success')}</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Book Another
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Appointment;

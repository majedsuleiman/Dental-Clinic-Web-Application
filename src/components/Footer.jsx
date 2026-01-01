import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaTooth, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 pt-16 pb-8 border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4 text-primary dark:text-primary-light">
                            <FaTooth className="text-2xl" />
                            <span className="font-bold text-xl text-gray-800 dark:text-white">{t('title')}</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Providing top-quality dental care with advanced technology and a gentle touch.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaFacebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaTwitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaWhatsapp size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-800 dark:text-white font-semibold mb-4 text-lg">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-primary transition-colors">{t('nav.home')}</a></li>
                            <li><a href="/doctors" className="hover:text-primary transition-colors">{t('nav.doctors')}</a></li>
                            <li><a href="/services" className="hover:text-primary transition-colors">{t('nav.services')}</a></li>
                            <li><a href="/appointment" className="hover:text-primary transition-colors">{t('nav.appointment')}</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-800 dark:text-white font-semibold mb-4 text-lg">Our Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Whitening</li>
                            <li>Cleaning</li>
                            <li>Implants</li>
                            <li>Braces</li>
                            <li>Surgery</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-800 dark:text-white font-semibold mb-4 text-lg">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>123 Dental Street, Medical City</li>
                            <li>contact@dentalclinic.com</li>
                            <li>+966 50 000 0000</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} {t('title')}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

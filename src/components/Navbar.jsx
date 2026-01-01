import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { FaTooth, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        // document.dir is handled by a useEffect in App or Layout usually, but let's do it here or globally
        document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.doctors'), path: '/doctors' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-primary dark:text-primary-light">
                        <FaTooth className="text-2xl" />
                        <span className="font-bold text-xl tracking-tight text-gray-800 dark:text-white">
                            {t('title')}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary-light ${isActive ? 'text-primary dark:text-primary-light' : 'text-gray-600 dark:text-gray-300'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            {i18n.language === 'en' ? 'AR' : 'EN'}
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-yellow-400"
                        >
                            {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
                        </button>
                        <Link
                            to="/appointment"
                            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full font-medium text-sm transition-colors shadow-lg shadow-primary/30"
                        >
                            {t('nav.appointment')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-600 dark:text-yellow-400"
                        >
                            {theme === 'dark' ? <FaSun /> : <FaMoon />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-white focus:outline-none"
                        >
                            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                            ? 'bg-primary/10 text-primary dark:text-primary-light'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <div className="pt-2 flex flex-col gap-2">
                                <button
                                    onClick={toggleLanguage}
                                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                                >
                                    {i18n.language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                                </button>
                                <Link
                                    to="/appointment"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-primary text-white px-3 py-2 rounded-md font-medium"
                                >
                                    {t('nav.appointment')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Layout = () => {
    const { i18n } = useTranslation();
    const { pathname } = useLocation();

    useEffect(() => {
        document.dir = i18n.dir();
        window.scrollTo(0, 0);
    }, [i18n.language, pathname]);

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 font-sans">
            <Navbar />
            <main className="flex-grow">
                {/* Animate page transitions setup could go here */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

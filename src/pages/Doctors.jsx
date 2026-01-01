import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const doctorsList = [
    { id: 1, nameKey: 'doctors.doc1_name', specKey: 'doctors.doc1_spec', expKey: 'doctors.doc1_exp', img: 'https://images.unsplash.com/photo-1559839734-2b71ea860485?auto=format&fit=crop&q=80&w=800' },
    { id: 2, nameKey: 'doctors.doc2_name', specKey: 'doctors.doc2_spec', expKey: 'doctors.doc2_exp', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800' },
    { id: 3, nameKey: 'doctors.doc3_name', specKey: 'doctors.doc3_spec', expKey: 'doctors.doc3_exp', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800' },
    { id: 4, nameKey: 'doctors.doc4_name', specKey: 'doctors.doc4_spec', expKey: 'doctors.doc4_exp', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800' },
];

const Doctors = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
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
                        {t('doctors.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-400"
                    >
                        {t('doctors.subtitle')}
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {doctorsList.map((doc) => (
                        <motion.div
                            key={doc.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={doc.img}
                                    alt={t(doc.nameKey)}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t(doc.nameKey)}</h3>
                                <p className="text-primary font-medium mb-2">{t(doc.specKey)}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t(doc.expKey)}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Doctors;

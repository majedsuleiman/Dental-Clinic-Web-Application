import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import About from './pages/About';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="services" element={<Services />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;

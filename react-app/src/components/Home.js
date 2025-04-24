import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import ServicesSection from './ServicesSection';
import Gallery from './Gallery';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ModalForm from './ModalForm';

import '../styles/templatemo-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
      <div>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Testimonials />
        <ServicesSection />
        <Gallery />
        <ContactSection />
        <Footer />
        <ModalForm />
      </div>
  );
};

export default HomePage;

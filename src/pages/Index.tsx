
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;

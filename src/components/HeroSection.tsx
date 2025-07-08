
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-cream via-white to-brand-cream">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-brand-blue mb-6">
            Usman Traders
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark mb-8 font-inter">
            Your Trusted Partner in Mobile Accessories, Marble, Leather Products & Gem Stone
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            With years of excellence in international trade, we deliver premium quality products 
            that meet the highest standards across diverse industries.
          </p>
          <Button 
            onClick={scrollToProducts}
            size="lg" 
            className="bg-brand-blue hover:bg-brand-yellow hover:text-brand-blue text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

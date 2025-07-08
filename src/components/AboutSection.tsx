
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white shadow-inner">
              <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-brand-cream/50">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-blue mb-8">
            About Us
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mb-8"></div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="text-left lg:w-2/3">
              <h3 className="text-2xl font-playfair font-semibold text-brand-blue mb-4">
                Excellence in International Trade
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With years of excellence in international trade, we deliver premium quality products 
                that meet the highest standards across diverse industries. Usman Traders 
                has been a cornerstone in the international trade industry, specializing 
                in premium quality products across multiple sectors.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Affiliated with Gujarat Chamber of Commerce since 2015, we have actively participated 
                in international events and fairs, establishing ourselves as a trusted name in export. 
                Our commitment to excellence and customer satisfaction has made us a reliable partner 
                worldwide.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We pride ourselves on our comprehensive product range, from mobile accessories to exquisite 
                gem stones, ensuring that our clients receive only the finest quality materials for their projects.
              </p>
            </div>
            
            <div className="bg-brand-cream p-8 rounded-lg shadow-lg lg:w-1/3 lg:ml-auto">
              <h3 className="text-2xl font-playfair font-semibold text-brand-blue mb-6">
                Our Values
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-yellow rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-brand-dark">Quality First</h4>
                    <p className="text-gray-600 text-sm">Premium products that exceed expectations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-yellow rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-brand-dark">Global Reach</h4>
                    <p className="text-gray-600 text-sm">International presence with local service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-yellow rounded-full mt-2 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-brand-dark">Trust & Reliability</h4>
                    <p className="text-gray-600 text-sm">Building lasting partnerships through integrity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

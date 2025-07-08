import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-brand-yellow mb-6">
              Usman Traders
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in international trade, specializing in premium quality 
              mobile accessories, marble, leather products, and gem stones.
            </p>
            <div className="flex space-x-4">
              {/* Social media links can be added here */}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-playfair font-semibold text-brand-yellow mb-6">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-white mb-2">Address</h5>
                <p className="text-gray-300">
                  Opposite UBL Bank, Bhimber Road<br />
                  Kotla Arab Ali Khan<br />
                  Gujrat Kharian (50990)
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Phone</h5>
                <p className="text-gray-300">
                  Proprietor: <a href="tel:03005900709" className="hover:text-brand-yellow transition-colors underline">03005900709</a><br />
                  Manager: <a href="tel:03424332300" className="hover:text-brand-yellow transition-colors underline">03424332300</a>
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Email</h5>
                <p className="text-gray-300">usmantradersgujrat@gmail.com</p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Business Hours</h5>
                <p className="text-gray-300">
                  Monday - Thursday & Saturday: 9:00 AM - 6:00 PM<br />
                  Friday: 9:00 AM - 12:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-semibold text-brand-yellow mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {['Home', 'About', 'Products', 'Gallery'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-300 hover:text-brand-yellow transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Usman Traders. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Developed by</span>
              <span className="text-brand-yellow font-semibold">DevHawks</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

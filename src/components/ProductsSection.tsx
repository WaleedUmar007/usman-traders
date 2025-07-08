import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProductsSection = () => {
  const products = [
    {
      title: 'Marble',
      description: 'Exquisite marble stones in various colors and patterns, perfect for construction, decoration, and architectural applications.',
      image: '/marble1.jpg',
      features: [
        'Natural Stone',
        'Premium Quality',
        'Custom Cutting',
        'Wide Variety'
      ]
    },
    {
      title: "Leather Products",
      description: "Finest leather goods including bags, accessories, and custom leather products for various industries.",
      image: "/lovable-uploads/6372db13-b6cb-4128-9925-3897c0a65f5d.png",
      features: ["Genuine Leather", "Handcrafted", "Custom Designs", "Premium Quality"]
    },
    {
      title: "Gem Stone",
      description: "Exquisite collection of precious and semi-precious stones sourced from around the world.",
      image: "/lovable-uploads/8d795e0b-ad18-403f-9381-4ab1312e138e.png",
      features: ["Certified Authentic", "Rare Collections", "Expert Sourcing", "Global Origins"]
    },
    {
      title: 'Mobile Accessories',
      description: 'High-quality mobile accessories including phone cases, screen protectors, chargers, and wireless accessories for all major smartphone brands.',
      image: '/wirelessCharger.jpg',
      features: [
        'Premium Quality',
        'Universal Compatibility', 
        'Latest Technology',
        'Durable Design'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-blue mb-8">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of premium products, each carefully selected 
            to meet the highest standards of quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-brand-blue">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

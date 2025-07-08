import React, { useState } from 'react';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      category: 'mobile-accessory',
      title: 'Wireless Chargers',
      image: '/wirelessCharger.jpg',
      description: 'Premium wireless charging pads'
    },
    {
      category: 'mobile-accessory',
      title: 'Phone Cases',
      image: '/phoneCases.jpg',
      description: 'Protective phone cases and covers'
    },
    {
      category: 'mobile-accessory',
      title: 'Earbuds',
      image: '/earBuds.jpg',
      description: 'Premium wireless earbuds and headphones'
    },
    {
      category: 'marble',
      title: 'White Carrara Marble',
      image: '/marble1.jpg',
      description: 'Premium white marble flooring'
    },
    {
      category: 'marble',
      title: 'Black Marble Tiles',
      image: '/marble2.jpg',
      description: 'Elegant black marble surfaces'
    },
    {
      category: 'marble',
      title: 'Veined Marble',
      image: '/marble3.jpg',
      description: 'Natural veined marble patterns'
    },
    {
      category: 'leather',
      title: 'Leather Wallets',
      image: '/lovable-uploads/6372db13-b6cb-4128-9925-3897c0a65f5d.png',
      description: 'Premium leather wallets'
    },
    {
      category: 'leather',
      title: 'Leather Jacket',
      image: '/lovable-uploads/4d5ab733-e70c-4366-95b5-de2b4b079597.png',
      description: 'Handcrafted leather jacket'
    },
    {
      category: 'leather',
      title: 'Leather Bags',
      image: '/lovable-uploads/96194ee6-e2f6-4a50-a604-5f3d384bd098.png',
      description: 'Professional leather bags'
    },
    {
      category: 'gemstone',
      title: 'Diamond Rings',
      image: '/lovable-uploads/8d795e0b-ad18-403f-9381-4ab1312e138e.png',
      description: 'Exquisite diamond jewelry'
    },
    {
      category: 'gemstone',
      title: 'Emerald Rings',
      image: '/lovable-uploads/a5f29320-8bf2-45de-bfe1-0f1f1851422f.png',
      description: 'Premium emerald collection'
    },
    {
      category: 'gemstone',
      title: 'Precious Stone Collection',
      image: '/lovable-uploads/55408f2b-7e41-4ada-885d-5206c3713c3f.png',
      description: 'Assorted precious gemstones'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'mobile-accessory', label: 'Mobile Accessory' },
    { id: 'marble', label: 'Marble' },
    { id: 'leather', label: 'Leather' },
    { id: 'gemstone', label: 'Gem Stone' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-blue mb-8">
            Product Gallery
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our extensive collection of premium products through our curated gallery.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-brand-blue text-white shadow-lg'
                    : 'bg-brand-cream text-brand-dark hover:bg-brand-yellow hover:text-brand-blue'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

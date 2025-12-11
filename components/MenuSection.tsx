import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MENU_ITEMS } from '../constants';
import { Category, MenuItem } from '../types';

const CATEGORIES: Category[] = ['Signature', 'Classic', 'Non - Coffee', 'Freezy'];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Signature');

  const handleCategoryChange = (newCategory: Category) => {
    if (activeCategory === newCategory) return;
    setActiveCategory(newCategory);
  };

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="min-h-screen flex flex-col justify-center bg-brand-cream relative py-20">
      <div className="container mx-auto px-4 md:px-8 w-full">
        <div className="text-center mb-16">
          <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Our Collections</h4>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-espresso mb-6">Explore Our Menu</h2>
          <p className="text-brand-espresso/60 max-w-2xl mx-auto">
            From our signature Kenangan Latte to artisanal pastries, every item is crafted with passion and precision.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative ${activeCategory === cat
                ? 'text-white'
                : 'text-brand-espresso/60 hover:text-brand-espresso bg-white border border-brand-latte/50'
                }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brand-espresso rounded-full"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/menu" className="text-brand-espresso font-semibold border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  // Brief descriptions for drinks
  const getDescription = (name: string): string => {
    const descriptions: Record<string, string> = {
      'Kenangan Latte': 'Our signature palm sugar latte',
      'Classic Latte': 'Smooth espresso with steamed milk',
      'Caramel Latte': 'Rich caramel with creamy milk',
      'Americano': 'Bold double shot espresso',
      'Avocado Coffee': 'Creamy avocado meets espresso',
      'Salted Caramel Macchiato': 'Sweet meets salty perfection',
      'Mocha': 'Chocolate lovers\' favorite',
      'Creamy Latte': 'Extra creamy, extra smooth',
    };
    return descriptions[name] || 'Crafted with love';
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
      {/* Image - flush to edges */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-latte/30 to-brand-cream aspect-square w-full">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {item.isBestSeller && (
          <span className="absolute top-3 right-3 bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            ★ Best Seller
          </span>
        )}
        {item.isNew && (
          <span className="absolute top-3 right-3 bg-brand-espresso text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            New
          </span>
        )}
      </div>

      {/* Content - only has padding */}
      <div className="text-center px-4 py-5">
        <h3 className="font-serif text-xl font-bold text-brand-espresso mb-2">
          {item.name}
        </h3>
        <p className="text-brand-espresso/50 text-sm leading-relaxed">
          {getDescription(item.name)}
        </p>
      </div>
    </div>
  );
};

export default MenuSection;
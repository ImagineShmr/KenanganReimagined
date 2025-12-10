import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MENU_ITEMS } from '../constants';
import { Category, MenuItem } from '../types';
import { Heart } from 'lucide-react';

const CATEGORIES: Category[] = ['Signature', 'Classic', 'Freezy', 'Food'];

const cardVariants: Variants = {
  enter: (direction: number) => ({
    x: direction === 0 ? 0 : (direction > 0 ? 30 : -30),
    y: direction === 0 ? 20 : 0,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 30 : -30,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  })
};

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Signature');
  const [direction, setDirection] = useState(0);

  const handleCategoryChange = (newCategory: Category) => {
    if (activeCategory === newCategory) return;
    const currentIdx = CATEGORIES.indexOf(activeCategory);
    const newIdx = CATEGORIES.indexOf(newCategory);
    const newDirection = newIdx > currentIdx ? 1 : -1;
    
    setDirection(newDirection);
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
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative ${
                activeCategory === cat
                  ? 'text-white'
                  : 'text-brand-espresso/60 hover:text-brand-espresso bg-white border border-brand-latte/50'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brand-espresso rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout' custom={direction} initial={false}>
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} direction={direction} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
            <button className="text-brand-espresso font-semibold border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors">
                View Full Menu
            </button>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ item: MenuItem; direction: number }> = ({ item, direction }) => {
  return (
    <motion.div
      layout
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-brand-latte/20 flex flex-col"
    >
      <div className="relative mb-4 overflow-hidden rounded-xl bg-brand-latte/20 aspect-square w-full">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {item.isBestSeller && (
            <span className="absolute top-3 left-3 bg-brand-gold text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                Best Seller
            </span>
        )}
        {item.isNew && (
            <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                New
            </span>
        )}
        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full text-brand-espresso hover:text-brand-red transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
            <Heart size={18} />
        </button>
      </div>
      
      <div className="text-center mt-2">
        <h3 className="font-serif text-xl font-bold text-brand-espresso">{item.name}</h3>
      </div>
    </motion.div>
  );
};

export default MenuSection;
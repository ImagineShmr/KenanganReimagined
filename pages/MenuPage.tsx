import React, { useState } from 'react';
import { motion } from 'framer-motion';

type MenuCategory = 'All' | 'Coffee' | 'Freezy' | 'Non-Coffee';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: Exclude<MenuCategory, 'All'>;
  image: string;
}

const MENU_DATA: MenuItem[] = [
  // Coffee
  { id: 1, name: 'Creamy Latte', description: 'Extra creamy, extra smooth', category: 'Coffee', image: 'public/images/menu/creamy-latte.jpg' },
  { id: 2, name: 'Kenangan Latte', description: 'Our signature palm sugar latte', category: 'Coffee', image: 'public/images/menu/kenangan-latte.jpg' },
  { id: 3, name: 'Salted Caramel Macchiato', description: 'Sweet meets salty perfection', category: 'Coffee', image: 'public/images/menu/salted-caramel-macchiato.jpg' },
  { id: 4, name: 'Mocha', description: 'Chocolate lovers\' favorite', category: 'Coffee', image: 'public/images/menu/mocha.jpg' },
  { id: 5, name: 'Avocado Coffee', description: 'Creamy avocado meets espresso', category: 'Coffee', image: 'public/images/menu/avocado-coffee.jpg' },
  { id: 6, name: 'Americano', description: 'Bold double shot espresso', category: 'Coffee', image: 'public/images/menu/americano.jpg' },
  { id: 7, name: 'Classic Latte', description: 'Smooth espresso with steamed milk', category: 'Coffee', image: 'public/images/menu/classic-latte.jpg' },
  { id: 8, name: 'Caramel Latte', description: 'Rich caramel with creamy milk', category: 'Coffee', image: 'public/images/menu/caramel-latte.jpg' },
  // Freezy
  { id: 9, name: 'Thai Tea', description: 'Authentic Thai milk tea blend', category: 'Freezy', image: 'public/images/menu/thai-tea.jpg' },
  { id: 10, name: 'Watermelon Latte', description: 'Refreshing summer favorite', category: 'Freezy', image: 'public/images/menu/watermelon-latte.jpg' },
  { id: 11, name: 'Salted Caramel (Freezy)', description: 'Icy sweet and salty bliss', category: 'Freezy', image: 'public/images/menu/freezy-salted-caramel.jpg' },
  { id: 12, name: 'Mocha (Freezy)', description: 'Chocolatey frozen indulgence', category: 'Freezy', image: 'public/images/menu/freezy-mocha.jpg' },
  { id: 13, name: 'Double Chocolate', description: 'Double the chocolate, double the joy', category: 'Freezy', image: 'public/images/menu/double-chocolate.jpg' },
  // Non-Coffee
  { id: 14, name: 'Ice Shaken Roasted Tea', description: 'Aromatic roasted tea perfection', category: 'Non-Coffee', image: 'public/images/menu/roasted-tea.jpg' },
  { id: 15, name: 'Ice Shaken Strawberry Tea', description: 'Fruity and refreshing delight', category: 'Non-Coffee', image: 'public/images/menu/strawberry-tea.jpg' },
  { id: 16, name: 'Avocado Milk', description: 'Creamy avocado smoothie', category: 'Non-Coffee', image: 'public/images/menu/avocado-milk.jpg' },
  { id: 17, name: 'Chamomile Tea', description: 'Calming floral infusion', category: 'Non-Coffee', image: 'public/images/menu/chamomile-tea.jpg' },
  { id: 18, name: 'Green Tea', description: 'Classic Japanese green tea', category: 'Non-Coffee', image: 'public/images/menu/green-tea.jpg' },
  { id: 19, name: 'Chocolate', description: 'Rich and velvety chocolate', category: 'Non-Coffee', image: 'public/images/menu/chocolate.jpg' },
];

const CATEGORIES: MenuCategory[] = ['All', 'Coffee', 'Freezy', 'Non-Coffee'];

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');

  const filteredItems = activeCategory === 'All'
    ? MENU_DATA
    : MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-espresso via-brand-espresso to-[#1a0f0d] pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-red/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-brand-gold/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
              Explore Our Collection
            </h4>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Our Menu
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-4">
              From our signature Kenangan Latte to refreshing freezy drinks,
              every item is crafted with passion and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === cat
                  ? 'bg-brand-espresso text-white shadow-lg'
                  : 'bg-white text-brand-espresso/70 hover:text-brand-espresso border border-brand-latte/50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image - flush to edges */}
                <div className="relative overflow-hidden bg-gradient-to-br from-brand-latte/30 to-brand-cream aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content - only has padding */}
                <div className="text-center px-4 py-5">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-brand-espresso mb-2">
                    {item.name}
                  </h3>
                  <p className="text-brand-espresso/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-brand-espresso/60 text-lg">No items found in this category.</p>
            </div>
          )}

          {/* Download App CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-white rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-espresso mb-4">
              This is just a preview!
            </h3>
            <p className="text-brand-espresso/60 text-lg mb-6 max-w-xl mx-auto">
              Explore our full menu with 50+ drinks and snacks. Download the Kenangan Coffee app to see more and order directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://apps.apple.com/my/app/kenangan-coffee/id1643468374"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <img
                  src="/images/download/App-Store-Badge.png"
                  alt="Download on App Store"
                  className="h-12 w-auto transition-transform group-hover:scale-105"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.kenangan.my&hl=ms"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <img
                  src="/images/download/google-play-badge.png"
                  alt="Get it on Google Play"
                  className="h-12 w-auto transition-transform group-hover:scale-105"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;

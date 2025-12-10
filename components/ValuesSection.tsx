import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    id: 1,
    title: "Sourcing",
    quote: "Harvesting at 4 AM",
    text: "It means getting up at 4 AM to harvest Arabica beans from the heart of Java & Sumatra.",
    image: "https://images.unsplash.com/photo-1611566026373-c6c846365061?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2", // Tall card on left
  },
  {
    id: 2,
    title: "Curation",
    quote: "Triple Tasting Protocol",
    text: "Tasting the coffee samples three times before the beans even arrive at our roastery.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1", // Wide card top right
  },
  {
    id: 3,
    title: "Precision",
    quote: "0.1% Consistency",
    text: "Constantly working on improving even 0.1% consistency of the Probat P60.",
    image: "https://images.unsplash.com/photo-1504630083234-141d74f9ae92?q=80&w=2069&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1", // Square bottom middle
  },
  {
    id: 4,
    title: "Craft",
    quote: "To The Last Drop",
    text: "This is how we maintain excellence, to the very last drop of coffee.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2037&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1", // Square bottom right
  }
];

const ValuesSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl font-bold text-brand-espresso mb-4 md:mb-6"
          >
            "If you do what you love, <br/> you go <span className="text-brand-red italic">above and beyond</span>."
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 w-24 bg-brand-gold mx-auto rounded-full"
          />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[250px] gap-4 md:gap-6">
          {values.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-3xl ${item.className}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/90 via-brand-espresso/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-bold text-white uppercase tracking-wider mb-2 md:mb-3">
                    {item.title}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                    {item.quote}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 delay-75">
                    {item.text}
                  </p>
                  {/* Mobile always shows text in a smaller footprint */}
                  <p className="text-white/80 text-xs md:hidden mt-2 line-clamp-2">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;
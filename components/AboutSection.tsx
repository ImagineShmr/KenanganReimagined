import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="story" className="min-h-screen flex items-center bg-brand-latte/30 overflow-hidden py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Collage */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="public/images/home/cheers.avif"
                alt="Coffee Beans"
                className="rounded-2xl shadow-lg w-full h-80 object-cover mt-12"
              />
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                src="public/images/home/coffee_journey.jpg"
                alt="Happy Customer"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            {/* Decorative Circle */}
            <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl" />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Our Story</h4>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-espresso mb-6">
                From Indonesia to the World
              </h2>
              <p className="text-brand-espresso/70 text-lg mb-6 leading-relaxed">
                What started as a small "Kenangan" (memory) in 2017 has blossomed into a movement.
                We believe that high-quality coffee shouldn't be a luxury—it should be a daily ritual
                accessible to everyone.
              </p>
              <p className="text-brand-espresso/70 text-lg mb-10 leading-relaxed">
                Our beans are locally sourced, empowering farmers, and roasted to perfection
                to bring out that unique bold flavor you love.
              </p>

              <div className="grid grid-cols-3 gap-6 border-t border-brand-espresso/10 pt-8">
                {STATS.map((stat, idx) => (
                  <div key={idx}>
                    <h3 className="font-serif text-3xl font-bold text-brand-espresso">{stat.value}</h3>
                    <p className="text-sm text-brand-espresso/60 font-medium uppercase tracking-wide mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="public/images/home/heroBg.avif"
          alt="Barista pouring latte art"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-espresso/90 via-brand-espresso/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 lg:pt-20">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 lg:mb-6">
              One Cup, <br />
              <span className="text-brand-latte italic">A Million Memories.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 lg:mb-10 leading-relaxed font-light max-w-md lg:max-w-lg">
              Experience the fastest growing grab-and-go coffee chain from Southeast Asia.
              Premium beans, sustainable sourcing, and a taste that stays in your heart.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Link to="/download-app" className="px-6 lg:px-8 py-3 lg:py-4 bg-brand-red text-white rounded-full font-semibold text-base lg:text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-red/30">
                Order Now
              </Link>
              <Link to="/menu" className="px-6 lg:px-8 py-3 lg:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold text-base lg:text-lg hover:bg-white/20 transition-all text-center">
                View Menu
              </Link>
            </div>
          </motion.div>

          {/* Stats Badge */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-10 lg:mt-16 flex gap-6 lg:gap-8 border-t border-white/20 pt-6 lg:pt-8"
          >
            <div>
              <p className="text-2xl lg:text-3xl font-serif text-white font-bold">100M+</p>
              <p className="text-white/60 text-xs lg:text-sm">Revenue Generated</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-serif text-white font-bold">800+</p>
              <p className="text-white/60 text-xs lg:text-sm">Global Outlets</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
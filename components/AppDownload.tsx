import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Star, Zap, Coffee } from 'lucide-react';

const AppDownload: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-brand-espresso via-brand-espresso to-[#1a0f0d] min-h-screen flex items-center relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-72 h-72 border border-brand-gold/10 rounded-full"
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-brand-gold/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Your Coffee, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-400">
                Your Way.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Skip the queue, earn rewards, and get exclusive deals. Download now and <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-300 font-semibold">get your first coffee free!</span>
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10"
            >
              {[
                { icon: Zap, label: 'Quick Order' },
                { icon: Star, label: 'Earn Points' },
                { icon: Gift, label: 'Exclusive Deals' },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <feature.icon size={16} className="text-brand-latte" />
                  </div>
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </motion.div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-row gap-3 justify-center lg:justify-start"
            >
              <a href="https://apps.apple.com/my/app/kenangan-coffee/id1643468374" target="_blank" rel="noopener noreferrer" className="group">
                <img
                  src="/images/download/App-Store-Badge.png"
                  alt="Download on App Store"
                  className="h-10 md:h-14 w-auto transition-transform group-hover:scale-105"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.kenangan.my&hl=ms" target="_blank" rel="noopener noreferrer" className="group">
                <img
                  src="/images/download/google-play-badge.png"
                  alt="Get it on Google Play"
                  className="h-10 md:h-14 w-auto transition-transform group-hover:scale-105"
                />
              </a>
            </motion.div>
          </div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            {/* Floating elements - hidden on mobile */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:block absolute -top-4 left-10 bg-white rounded-2xl shadow-2xl p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Star size={20} className="text-brand-gold fill-brand-gold" />
                </div>
                <div>
                  <p className="font-bold text-brand-espresso text-sm">250 Points</p>
                  <p className="text-xs text-gray-500">Free Latte!</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:block absolute -bottom-4 right-10 bg-gradient-to-br from-brand-red to-red-600 rounded-2xl shadow-2xl p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <Coffee size={24} className="text-white" />
                <div>
                  <p className="font-bold text-white text-sm">Order Ready!</p>
                  <p className="text-xs text-white/80">Pick up</p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <div className="relative">
              <div className="w-56 h-[440px] md:w-72 md:h-[580px] bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl shadow-black/50 border border-gray-700">
                <div className="w-full h-full bg-brand-cream rounded-[2.2rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-20" />

                  {/* App Screen Content */}
                  <div className="p-6 pt-12 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-gray-500 text-xs">Good Morning</p>
                        <p className="font-serif text-xl font-bold text-brand-espresso">Sarah ☕</p>
                      </div>
                      <div className="w-10 h-10 bg-brand-latte rounded-full" />
                    </div>

                    {/* Promo Card */}
                    <div className="bg-gradient-to-br from-brand-espresso to-brand-red rounded-2xl p-4 mb-4">
                      <p className="text-brand-red font-bold text-xs uppercase mb-1">Limited Time</p>
                      <p className="text-white font-serif text-lg font-bold">Buy 1 Get 1 Free</p>
                      <p className="text-white/70 text-xs">On all Signature drinks</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {['Order', 'Rewards', 'Stores'].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <div className="w-8 h-8 bg-brand-latte rounded-lg mx-auto mb-1" />
                          <p className="text-xs font-medium text-brand-espresso">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Recent Order */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm flex-1">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-3">Recent Order</p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-brand-latte rounded-xl" />
                        <div className="flex-1">
                          <p className="font-bold text-brand-espresso text-sm">Kenangan Latte</p>
                          <p className="text-xs text-gray-500">Iced • Medium • Less Sugar</p>
                        </div>
                        <button className="bg-brand-espresso text-white text-xs font-bold px-3 py-2 rounded-lg">
                          Reorder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold/20 rounded-full blur-[80px] -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, Smartphone, Coffee, QrCode, ChevronDown, Check, Heart } from 'lucide-react';

const BENEFITS = [
  'Use the Kenangan Coffee app to order, you may select pickup or delivery to skip the queue',
  'Enjoy exclusive membership deals like free vouchers, birthday drinks, priority access to new products and more',
  'Extra convenience. Extra benefits. Only in Kenangan Coffee app.',
];

const DownloadAppPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section - Responsive Design */}
      <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-brand-espresso pt-24 pb-12 lg:pt-24 lg:pb-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-40 -right-40 w-96 h-96 border border-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-20 -left-20 w-72 h-72 border border-brand-gold/10 rounded-full"
          />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-red/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-brand-gold/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content - Full width on mobile, centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
                Download Now
              </h4>
              <h1 className="font-serif text-3xl md:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                Kenangan Coffee App
              </h1>
              <p className="text-white/60 text-base lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Get free vouchers, priority access and exclusive benefits.
              </p>

              {/* Benefits List - Compact on mobile */}
              <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10 text-left max-w-md mx-auto lg:mx-0">
                {BENEFITS.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-white lg:hidden" />
                      <Check size={14} className="text-white hidden lg:block" />
                    </div>
                    <span className="text-white/80 text-sm lg:text-base">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* App Store Buttons - Centered on mobile */}
              <div className="flex flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                <a href="https://apps.apple.com/my/app/kenangan-coffee/id1643468374" target="_blank" rel="noopener noreferrer" className="group">
                  <img
                    src="/images/download/AppStore.png"
                    alt="Download on App Store"
                    className="h-11 lg:h-14 w-auto transition-transform group-hover:scale-105"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.kenangan.my&hl=ms" target="_blank" rel="noopener noreferrer" className="group">
                  <img
                    src="/images/download/gPlay.png"
                    alt="Get it on Google Play"
                    className="h-11 lg:h-14 w-auto transition-transform group-hover:scale-105"
                  />
                </a>
              </div>
            </motion.div>

            {/* Right - QR Code Section - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:flex lg:w-1/2 justify-center"
            >
              <div className="bg-white rounded-3xl p-12 shadow-2xl text-center w-full max-w-md">
                {/* Header */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <QrCode size={24} className="text-brand-red" />
                  <span className="text-brand-espresso font-bold text-lg">Scan to Download</span>
                </div>
                <p className="text-brand-espresso/50 text-sm mb-6">
                  Quick & easy from your phone
                </p>

                {/* QR Code - No border, cleaner look */}
                <div className="bg-brand-cream/50 p-8 rounded-2xl mb-6">
                  <img
                    src="/images/download/qr-code.png"
                    alt="Scan QR Code to download Kenangan Coffee App"
                    className="w-56 h-56 mx-auto rounded-lg"
                  />
                </div>

                {/* Kenangan branding */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <img
                    src="/images/favicon.png"
                    alt="Kenangan Coffee"
                    className="h-10 w-auto"
                  />
                </div>

                {/* Platform badges */}
                {/* <div className="flex items-center justify-center gap-3">
                  <span className="bg-brand-espresso/10 text-brand-espresso text-xs font-medium px-3 py-1 rounded-full">iOS</span>
                  <span className="bg-brand-espresso/10 text-brand-espresso text-xs font-medium px-3 py-1 rounded-full">Android</span>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - Desktop only */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white/50" size={32} />
        </motion.div>
      </section>

      {/* Features - Alternating Layout - Continuous with hero */}
      <section className="relative pt-0 pb-20 bg-brand-espresso overflow-hidden -mt-1">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Continuation of hero's left circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-52 -left-20 w-72 h-72 border border-brand-gold/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 -right-32 w-80 h-80 border border-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-40 -left-40 w-96 h-96 border border-brand-gold/10 rounded-full"
          />
          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-brand-red/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-brand-gold/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-20"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
              App Features
            </h4>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
              Why <span className="text-brand-gold">Download?</span>
            </h2>
          </motion.div>

          <div className="space-y-20 max-w-3xl mx-auto">
            {/* Feature 1 - Skip The Queue */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8 max-w-2xl"
            >
              <div className="md:w-1/4 flex justify-center flex-shrink-0">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                  <Heart size={40} className="text-white/80" />
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-right">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                  Skip The Queue
                </h3>
                <p className="text-white/70 mb-2">
                  Order ahead and pick up when ready.
                </p>
                <p className="text-white/60 text-sm">
                  No more waiting in line - your coffee is ready when you arrive
                </p>
              </div>
            </motion.div>

            {/* Feature 2 - Earn Points */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-2xl ml-auto"
            >
              <div className="md:w-1/4 flex justify-center flex-shrink-0">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                  <Star size={40} className="text-white/80" />
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                  Earn Points
                </h3>
                <p className="text-white/70 mb-2">
                  Get rewards with every purchase.
                </p>
                <p className="text-white/60 text-sm">
                  Collect points and redeem them for free drinks and exclusive rewards
                </p>
              </div>
            </motion.div>

            {/* Feature 3 - Exclusive Deals */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8 max-w-2xl"
            >
              <div className="md:w-1/4 flex justify-center flex-shrink-0">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                  <Gift size={40} className="text-white/80" />
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-right">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                  Exclusive Deals
                </h3>
                <p className="text-white/70 mb-2">
                  Members-only offers and discounts.
                </p>
                <p className="text-white/60 text-sm">
                  Access special promotions, seasonal offers, and member-exclusive rewards
                </p>
              </div>
            </motion.div>

            {/* Feature 4 - Easy Payment */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-2xl ml-auto"
            >
              <div className="md:w-1/4 flex justify-center flex-shrink-0">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                  <Smartphone size={40} className="text-white/80" />
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                  Easy Payment
                </h3>
                <p className="text-white/70 mb-2">
                  Multiple payment options available.
                </p>
                <p className="text-white/60 text-sm">
                  Pay with e-wallets, cards, or Kenangan credits - fast and secure checkout
                </p>
              </div>
            </motion.div>

            {/* Feature 5 - Birthday Treats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8 max-w-2xl"
            >
              <div className="md:w-1/4 flex justify-center flex-shrink-0">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 relative">
                  <Gift size={40} className="text-white/80" />
                  <span className="absolute -top-2 -right-2 text-lg">🎂</span>
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-right">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                  Birthday Treats
                </h3>
                <p className="text-white/70 mb-2">
                  Free drinks on your special day.
                </p>
                <p className="text-white/60 text-sm">
                  Celebrate with us - enjoy complimentary treats during your birthday month
                </p>
              </div>
            </motion.div>

            {/* Feature 6 - Order History */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-2xl ml-auto"
            >
              <div className="md:w-1/4 flex justify-center flex-shrink-0">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                  <Coffee size={40} className="text-white/80" />
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                  Order History
                </h3>
                <p className="text-white/70 mb-2">
                  Quick reorder your favorites.
                </p>
                <p className="text-white/60 text-sm">
                  One-tap reorder from your past orders - no need to customize again
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-24"
          >
            <h3 className="font-serif text-xl md:text-4xl font-bold text-white">
              Extra Convenience. Extra Benefits.
            </h3>
          </motion.div>

          {/* CTA - Integrated into same section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16 pt-16 border-t border-white/10"
          >
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Download now and get your first coffee on us!
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <a href="https://apps.apple.com/my/app/kenangan-coffee/id1643468374" target="_blank" rel="noopener noreferrer" className="group">
                <img
                  src="/images/download/AppStore.png"
                  alt="Download on App Store"
                  className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.kenangan.my&hl=ms" target="_blank" rel="noopener noreferrer" className="group">
                <img
                  src="/images/download/gPlay.png"
                  alt="Get it on Google Play"
                  className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DownloadAppPage;

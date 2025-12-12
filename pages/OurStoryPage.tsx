import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Coffee, Building2, GraduationCap } from 'lucide-react';

const STATS = [
  { value: '6,000+', label: 'Employees', icon: Users },
  { value: '900+', label: 'Outlets', icon: Coffee },
  { value: '60+', label: 'Cities', icon: MapPin },
];

const OurStoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section - Full Height */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/aboutUs/kenanganPeople.jpg"
            alt="Kenangan Coffee Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-espresso/90 via-brand-espresso/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
              About Us
            </h4>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The People at<br />Kenangan
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              First new retail F&B Unicorn in Southeast Asia, bringing premium coffee experiences to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Day 1 Mentality - Image Left */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img
                  src="/images/aboutUs/Day1.jpg"
                  alt="Day 1 Mentality"
                  className="rounded-3xl shadow-xl w-full h-80 md:h-[450px] object-cover"
                />
                <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-brand-red text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                  <p className="font-serif text-2xl md:text-3xl font-bold">2017</p>
                  <p className="text-xs md:text-sm text-white/80">Founded</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-1/2"
            >
              <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
                Our Philosophy
              </h4>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-espresso mb-6">
                Day 1 Mentality
              </h2>
              <p className="text-brand-espresso/70 text-lg mb-6 leading-relaxed">
                We always treat every day as our day one. This mindset drives us to continuously innovate,
                serve our customers with fresh perspectives, and never become complacent.
              </p>
              <p className="text-brand-espresso/70 text-lg leading-relaxed">
                At Kenangan Coffee, we make sure you have the best coffee experience. We work relentlessly
                to guarantee we deliver on our promise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats + Collaboration Combined - Unique Layout */}
      <section className="py-24 bg-brand-espresso overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Big Numbers */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <span className="font-serif text-8xl md:text-[10rem] font-bold text-white leading-none">6K+</span>
                  <p className="text-brand-latte text-lg mt-2">people brewing happiness daily</p>
                </div>
                <div className="flex gap-12">
                  <div>
                    <span className="font-serif text-5xl md:text-6xl font-bold text-brand-red">900+</span>
                    <p className="text-white/60 text-sm mt-1">Outlets</p>
                  </div>
                  <div>
                    <span className="font-serif text-5xl md:text-6xl font-bold text-brand-gold">60+</span>
                    <p className="text-white/60 text-sm mt-1">Cities</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Image + Text Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <img
                src="/images/aboutUs/collaboration.jpg"
                alt="Team Collaboration"
                className="rounded-3xl w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-espresso via-brand-espresso/80 to-transparent rounded-b-3xl">
                <p className="text-white/90 text-lg leading-relaxed max-w-md">
                  From harvest to cup — our team works across borders,
                  blending Malaysian hospitality with Indonesian coffee mastery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Footprint */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
              Global Presence
            </h4>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-espresso">
              Our Footprint
            </h2>
          </motion.div>

          <div className="space-y-20">
            {/* Malaysia - Image Left, Text Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <div className="md:w-1/2">
                <div className="relative">
                  <img
                    src="/images/aboutUs/Footprint1.jpg"
                    alt="Kenangan Coffee Malaysia"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-4 right-4 md:-bottom-4 md:-right-4 bg-brand-red text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base shadow-lg">
                    100+ Outlets
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <span className="text-5xl mb-4 block">🇲🇾</span>
                <h3 className="font-serif text-3xl font-bold text-brand-espresso mb-3">Malaysia</h3>
                <div className="w-16 h-1 bg-brand-red mb-6"></div>
                <p className="text-brand-espresso/70 text-lg leading-relaxed mb-4">
                  We launched in Malaysia in 2022, bringing our signature Indonesian coffee experience to a new market.
                </p>
                <p className="text-brand-espresso font-semibold">
                  Expanding across Klang Valley, Penang, Johor and beyond.
                </p>
              </div>
            </motion.div>

            {/* Indonesia - Text Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row-reverse items-center gap-10"
            >
              <div className="md:w-1/2">
                <div className="relative">
                  <img
                    src="/images/aboutUs/Footprint2.jpg"
                    alt="Kenangan Coffee Indonesia"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-4 md:-bottom-4 md:-left-4 bg-brand-espresso text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base shadow-lg">
                    800+ Outlets
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <span className="text-5xl mb-4 block">🇮🇩</span>
                <h3 className="font-serif text-3xl font-bold text-brand-espresso mb-3">Indonesia</h3>
                <div className="w-16 h-1 bg-brand-red mb-6 md:ml-auto"></div>
                <p className="text-brand-espresso/70 text-lg leading-relaxed mb-4">
                  Where it all began in 2017. Indonesia remains our home and the heart of our coffee culture.
                </p>
                <p className="text-brand-espresso font-semibold">
                  Present in 60+ cities across the archipelago.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices & Academies - Bento Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
              Our Locations
            </h4>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-espresso">
              Offices & Academies
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Malaysia HQ - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 bg-brand-cream rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-full flex flex-col">
                <img
                  src="/images/aboutUs/myHq.jpg"
                  alt="Malaysia Headquarters"
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 size={18} className="text-brand-red" />
                    <span className="text-brand-red text-xs font-bold uppercase tracking-wider">Headquarters</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-espresso mb-2">Malaysia HQ</h3>
                  <p className="text-sm text-brand-espresso/60 leading-relaxed">
                    Unit 1302, Level 13, Uptown 2, Damansara Uptown, 47400 Petaling Jaya, Selangor
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Indonesia HQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-brand-cream rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex flex-col md:flex-row h-full">
                <img
                  src="/images/aboutUs/idHq.jpg"
                  alt="Indonesia Headquarters"
                  className="w-full md:w-1/2 h-48 md:h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 size={16} className="text-brand-red" />
                    <span className="text-brand-red text-xs font-bold uppercase tracking-wider">Headquarters</span>
                  </div>
                  <h3 className="font-bold text-brand-espresso text-lg mb-2">Indonesia HQ</h3>
                  <p className="text-sm text-brand-espresso/60 leading-relaxed">
                    Plaza Blok M, 7th Floor, Bulungan Rd. no. 76, Jakarta Selatan
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Singapore HQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="md:col-span-2 bg-brand-cream rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex flex-col md:flex-row h-full">
                <img
                  src="/images/aboutUs/sgHq.jpg"
                  alt="Singapore Headquarters"
                  className="w-full md:w-1/2 h-48 md:h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 size={16} className="text-brand-red" />
                    <span className="text-brand-red text-xs font-bold uppercase tracking-wider">Headquarters</span>
                  </div>
                  <h3 className="font-bold text-brand-espresso text-lg mb-2">Singapore HQ</h3>
                  <p className="text-sm text-brand-espresso/60 leading-relaxed">
                    10 Kallang Avenue, Aperia Tower 2, #05-13, Singapore 339510
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Malaysia Academy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 bg-brand-espresso rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex flex-col md:flex-row h-full">
                <img
                  src="/images/aboutUs/myAcad.jpg"
                  alt="Kenangan Academy Malaysia"
                  className="w-full md:w-1/2 h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={16} className="text-brand-red" />
                    <span className="text-brand-red text-xs font-bold uppercase tracking-wider">Academy</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Academy Malaysia</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    27A & 27B, Jalan SS21/1A, Damansara Utama, 47400 Petaling Jaya
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Indonesia Academy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="md:col-span-2 bg-brand-espresso rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex flex-col md:flex-row h-full">
                <img
                  src="/images/aboutUs/AcademyIndonesia.jpg"
                  alt="Kenangan Academy Indonesia"
                  className="w-full md:w-1/2 h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={16} className="text-brand-red" />
                    <span className="text-brand-red text-xs font-bold uppercase tracking-wider">Academy</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Academy Indonesia</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Jl. Sultan Iskandar Muda No.61, Kota Jakarta Selatan, 12240
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;


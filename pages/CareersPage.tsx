import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Heart, Coffee, Users, Briefcase, ArrowRight,
  Sparkles, GraduationCap, Clock, Wallet, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const JOB_OPENINGS = [
  { id: 1, title: 'Barista', location: 'Multiple Locations', type: 'Full-time' },
  { id: 2, title: 'Shift Supervisor', location: 'Kuala Lumpur', type: 'Full-time' },
  { id: 3, title: 'Store Manager', location: 'Penang', type: 'Full-time' },
  { id: 4, title: 'Marketing Executive', location: 'HQ - Petaling Jaya', type: 'Full-time' },
  { id: 5, title: 'Operations Manager', location: 'HQ - Petaling Jaya', type: 'Full-time' },
];

const CareersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);

  const filteredJobs = JOB_OPENINGS.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section - Video Background */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/careers/heroVide.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-espresso/95 via-brand-espresso/70 to-brand-espresso/40" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
              Join Our Team
            </h4>
            <h1 className="font-serif text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Brew Your
              <br />
              <span className="text-brand-gold">Career</span>
            </h1>
            <p className="text-white/70 text-xl mb-10 leading-relaxed">
              People are our asset and they come first. Join 6,000+ passionate individuals
              crafting memorable coffee experiences across Southeast Asia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                View Open Positions
                <ArrowRight size={18} />
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors border border-white/20"
              >
                Why Join Us
                <ChevronDown size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white/50" size={32} />
        </motion.div>
      </section>

      {/* Benefits Section - Full Height Bento Grid */}
      <section id="benefits" className="min-h-screen py-20 bg-white flex items-center">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
              Why Join Us
            </h4>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-espresso">
              Benefits & Perks
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Health Coverage - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredBenefit('health')}
              onMouseLeave={() => setHoveredBenefit(null)}
              className="col-span-2 row-span-2 bg-brand-red rounded-3xl p-8 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
            >
              <Heart
                size={48}
                className={`text-white mb-6 transition-transform duration-300 ${hoveredBenefit === 'health' ? 'scale-110' : ''}`}
              />
              <h3 className="font-serif text-3xl font-bold text-white mb-4">Health Coverage</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Comprehensive medical, dental, and vision coverage from day one.
                We believe healthy employees are happy employees.
              </p>
              <motion.div
                className="mt-6 flex items-center gap-2 text-white font-semibold"
                animate={{ x: hoveredBenefit === 'health' ? 10 : 0 }}
              >
                Learn more <ArrowRight size={18} />
              </motion.div>
            </motion.div>

            {/* Free Coffee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onMouseEnter={() => setHoveredBenefit('coffee')}
              onMouseLeave={() => setHoveredBenefit(null)}
              className="col-span-1 bg-brand-espresso rounded-3xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Coffee
                size={32}
                className={`text-brand-gold mb-4 transition-transform duration-300 ${hoveredBenefit === 'coffee' ? 'scale-110' : ''}`}
              />
              <h3 className="font-bold text-white text-lg mb-2">Free Coffee</h3>
              <p className="text-white/60 text-sm">Unlimited drinks during shifts</p>
            </motion.div>

            {/* Team Culture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              onMouseEnter={() => setHoveredBenefit('team')}
              onMouseLeave={() => setHoveredBenefit(null)}
              className="col-span-1 bg-brand-gold rounded-3xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Users
                size={32}
                className={`text-brand-espresso mb-4 transition-transform duration-300 ${hoveredBenefit === 'team' ? 'scale-110' : ''}`}
              />
              <h3 className="font-bold text-brand-espresso text-lg mb-2">Team Culture</h3>
              <p className="text-brand-espresso/60 text-sm">Work with passionate people</p>
            </motion.div>

            {/* Career Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onMouseEnter={() => setHoveredBenefit('growth')}
              onMouseLeave={() => setHoveredBenefit(null)}
              className="col-span-1 bg-brand-cream rounded-3xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Briefcase
                size={32}
                className={`text-brand-red mb-4 transition-transform duration-300 ${hoveredBenefit === 'growth' ? 'scale-110' : ''}`}
              />
              <h3 className="font-bold text-brand-espresso text-lg mb-2">Career Growth</h3>
              <p className="text-brand-espresso/60 text-sm">Clear advancement paths</p>
            </motion.div>

            {/* Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              onMouseEnter={() => setHoveredBenefit('training')}
              onMouseLeave={() => setHoveredBenefit(null)}
              className="col-span-1 bg-brand-espresso/80 rounded-3xl p-6 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <GraduationCap
                size={32}
                className={`text-brand-latte mb-4 transition-transform duration-300 ${hoveredBenefit === 'training' ? 'scale-110' : ''}`}
              />
              <h3 className="font-bold text-white text-lg mb-2">Training</h3>
              <p className="text-white/60 text-sm">Kenangan Academy certified</p>
            </motion.div>

            {/* Flexible Hours - Wide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onMouseEnter={() => setHoveredBenefit('hours')}
              onMouseLeave={() => setHoveredBenefit(null)}
              className="col-span-2 bg-brand-latte/40 rounded-3xl p-6 cursor-pointer transition-all duration-300 flex items-center gap-6 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
            >
              <Clock
                size={48}
                className={`text-brand-espresso transition-transform duration-300 ${hoveredBenefit === 'hours' ? 'scale-110' : ''}`}
              />
              <div>
                <h3 className="font-bold text-brand-espresso text-xl mb-1">Flexible Hours</h3>
                <p className="text-brand-espresso/60">Work-life balance that fits your lifestyle</p>
              </div>
            </motion.div>

            {/* Competitive Pay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              onMouseEnter={() => setHoveredBenefit('pay')}
              onMouseLeave={() => setHoveredBenefit(null)}
              className="col-span-2 bg-brand-espresso rounded-3xl p-6 cursor-pointer transition-all duration-300 flex items-center gap-6 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
            >
              <Wallet
                size={48}
                className={`text-brand-gold transition-transform duration-300 ${hoveredBenefit === 'pay' ? 'scale-110' : ''}`}
              />
              <div>
                <h3 className="font-bold text-white text-xl mb-1">Competitive Pay</h3>
                <p className="text-white/70">Industry-leading salaries + bonuses</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team - Full Height */}
      <section className="min-h-screen py-20 bg-brand-cream flex items-center">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
              Leadership
            </h4>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-espresso">
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* General Manager */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 bg-brand-latte/30">
                <img
                  src="/images/careers/gm.jpg"
                  alt="General Manager"
                  className="w-full h-[450px] object-cover object-right group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-espresso mb-1">Jordan</h3>
              <p className="text-brand-red font-semibold mb-4">General Manager</p>
              <p className="text-brand-espresso/70 italic leading-relaxed">
                "People are our asset and they come first; they are our partners in our growth. We involve our employees across all processes and decision-making."
              </p>
            </motion.div>

            {/* Marketing Manager */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 bg-brand-latte/30">
                <img
                  src="/images/careers/MarketingManager.jpg"
                  alt="Marketing Manager"
                  className="w-full h-[450px] object-cover object-right group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-espresso mb-1">Quennie</h3>
              <p className="text-brand-red font-semibold mb-4">Marketing Manager</p>
              <p className="text-brand-espresso/70 italic leading-relaxed">
                "The young vibes and the company's start-up culture of fast in decision-making and open for new ideas are what I like."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings - Full Height */}
      <section id="openings" className="min-h-screen py-20 bg-white flex items-center">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
              Open Positions
            </h4>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-espresso">
              Find Your Role
            </h2>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-espresso/40" size={20} />
            <input
              type="text"
              placeholder="Search for jobs by keyword or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-brand-cream border border-brand-latte/30 text-brand-espresso placeholder:text-brand-espresso/40 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
            />
          </motion.div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-brand-cream rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-lg transition-shadow"
              >
                <div>
                  <h3 className="font-bold text-brand-espresso text-lg">{job.title}</h3>
                  <p className="text-brand-espresso/60 text-sm">{job.location} • {job.type}</p>
                </div>
                <button className="bg-brand-espresso hover:bg-brand-espresso/90 text-white px-6 py-3 rounded-full font-medium text-sm transition-colors flex items-center gap-2 justify-center">
                  Apply Now
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-brand-espresso/60">No positions found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA - NOT full height */}
      <section className="py-20 bg-gradient-to-br from-brand-espresso to-[#1a0f0d]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make Memories?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join our family and be part of the fastest growing coffee chain in Southeast Asia.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-espresso px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

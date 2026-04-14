import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    outlet: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-espresso via-brand-espresso to-[#1a0f0d] pt-32 pb-12 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-red/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-brand-gold/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
              Get In Touch
            </h4>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Share your feedback, questions, or just say hello!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/3"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-espresso mb-6">
                Share Your Feedback With Us
              </h2>
              <p className="text-brand-espresso/70 mb-8 leading-relaxed">
                Your feedback means a lot to us. It helps us keep improving our service for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-espresso mb-1">Email</h4>
                    <a href="mailto:customerservice@kenangancoffee.my" className="text-brand-espresso/70 hover:text-brand-red transition-colors break-all">
                      customerservice@kenangancoffee.my
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-espresso mb-1">Malaysia HQ</h4>
                    <p className="text-brand-espresso/70 text-sm">
                      Unit 1302, Level 13, Uptown 2,<br />
                      No. 2, Jalan SS21/37, Damansara Uptown,<br />
                      47400 Petaling Jaya, Selangor
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-2/3"
            >
              {submitted ? (
                <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-brand-latte/20">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare size={28} className="text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-espresso mb-4">
                    Thank You!
                  </h3>
                  <p className="text-brand-espresso/70">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-brand-latte/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-espresso mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-latte/30 text-brand-espresso focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-espresso mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-latte/30 text-brand-espresso focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-brand-espresso mb-2">
                      Email <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-latte/30 text-brand-espresso focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-espresso mb-2">
                        Subject <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-latte/30 text-brand-espresso focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-espresso mb-2">
                        Outlet Location <span className="text-brand-red">*</span>
                      </label>
                      <select
                        name="outlet"
                        value={formData.outlet}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-latte/30 text-brand-espresso focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
                      >
                        <option value="">Select an outlet</option>
                        <option value="sunway-pyramid">Sunway Pyramid</option>
                        <option value="ioi-city-mall">IOI City Mall</option>
                        <option value="queensbay-mall">Queensbay Mall</option>
                        <option value="east-coast-mall">East Coast Mall</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-brand-espresso mb-2">
                      Message <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-latte/30 text-brand-espresso focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-espresso hover:bg-brand-espresso/90 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

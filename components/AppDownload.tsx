import React from 'react';
import { Smartphone } from 'lucide-react';

const AppDownload: React.FC = () => {
  return (
    <section className="bg-brand-espresso min-h-screen flex items-center relative overflow-hidden py-20">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Skip the Queue, <br />
              <span className="text-brand-gold">Order Ahead.</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg">
              Download the Kenangan Coffee app for exclusive deals, birthday treats, and earn points with every sip.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-brand-espresso px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-100 transition-colors">
                <Smartphone size={24} />
                <div className="text-left">
                  <p className="text-xs text-gray-500 uppercase font-bold">Download on</p>
                  <p className="font-bold text-lg leading-none">App Store</p>
                </div>
              </button>
              <button className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                <Smartphone size={24} />
                <div className="text-left">
                  <p className="text-xs text-white/50 uppercase font-bold">Get it on</p>
                  <p className="font-bold text-lg leading-none">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            {/* Abstract Phone Representation */}
            <div className="relative w-64 h-[500px] bg-brand-cream rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform rotate-6">
               <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 z-20 rounded-b-xl mx-16"></div>
               <img 
                 src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1000&auto=format&fit=crop" 
                 alt="App Interface" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white font-bold text-xl mb-1">Free Coffee!</p>
                  <p className="text-white/80 text-sm">On your first download</p>
               </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-red/20 rounded-full blur-[100px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;
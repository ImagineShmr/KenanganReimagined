import React from 'react';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream border-t border-brand-espresso/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-brand-espresso text-white rounded-full">
                     <Coffee size={20} />
                </div>
                <span className="font-serif text-xl font-bold text-brand-espresso">Kenangan</span>
            </div>
            <p className="text-brand-espresso/60 text-sm leading-relaxed mb-6">
              Brewing moments, creating memories. The fastest growing coffee chain in Southeast Asia.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-brand-espresso/10 flex items-center justify-center text-brand-espresso hover:bg-brand-red hover:text-white hover:border-transparent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-brand-espresso mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-espresso/70">
              <li><a href="#" className="hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-brand-espresso mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-brand-espresso/70">
              <li><a href="#" className="hover:text-brand-red transition-colors">Coffee</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Non-Coffee</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Food</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Merchandise</a></li>
            </ul>
          </div>

          {/* Location */}
          <div>
             <h4 className="font-bold text-brand-espresso mb-6">Headquarters</h4>
             <p className="text-sm text-brand-espresso/70 leading-relaxed">
               Level 10, Menara Kenangan,<br />
               Jalan Tun Razak,<br />
               50400 Kuala Lumpur,<br />
               Malaysia
             </p>
          </div>
        </div>

        <div className="border-t border-brand-espresso/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-espresso/50">
            © 2024 Kenangan Coffee Malaysia. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-espresso/50">
            <a href="#" className="hover:text-brand-espresso">Privacy Policy</a>
            <a href="#" className="hover:text-brand-espresso">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
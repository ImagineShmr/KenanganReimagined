import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

// Custom X (Twitter) Icon
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom TikTok Icon
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/kenangancoffee.my/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/KenanganCoffeeMY', label: 'Facebook' },
    { icon: XIcon, href: 'https://x.com/kenanganmy', label: 'X' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@kenangancoffee.my', label: 'TikTok' },
  ];

  return (
    <footer className="bg-brand-cream border-t border-brand-espresso/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand + Address */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/kcLogo.png"
                alt="Kenangan Coffee"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-brand-espresso/60 text-sm leading-relaxed mb-6 max-w-xs">
              Brewing moments, creating memories. The fastest growing coffee chain in Southeast Asia.
            </p>

            {/* Address */}
            <div className="mb-4">
              <div className="flex items-start gap-2 text-sm text-brand-espresso/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-brand-red" />
                <p className="leading-relaxed">
                  Unit 1302, Level 13, Uptown 2,<br />
                  No. 2, Jalan SS21/37, Damansara Uptown,<br />
                  47400, Petaling Jaya,<br />
                  Selangor Darul Ehsan
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <a
                href="mailto:customerservice@kenangancoffee.my"
                className="flex items-center gap-2 text-sm text-brand-espresso/70 hover:text-brand-red transition-colors"
              >
                <Mail size={16} className="flex-shrink-0 text-brand-red" />
                customerservice@kenangancoffee.my
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white border border-brand-espresso/10 flex items-center justify-center text-brand-espresso hover:bg-brand-red hover:text-white hover:border-transparent transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Container - pushed to right on desktop, left on mobile */}
          <div className="col-span-1 md:col-span-2 flex justify-start md:justify-end gap-20 md:gap-32 md:pt-20">
            {/* Links 1 */}
            <div>
              <h4 className="font-bold text-brand-espresso mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-brand-espresso/70">
                <li><Link to="/our-story" className="hover:text-brand-red transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-brand-red transition-colors">Careers</Link></li>
                <li><Link to="/locations" className="hover:text-brand-red transition-colors">Locations</Link></li>
                <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Links 2 */}
            <div>
              <h4 className="font-bold text-brand-espresso mb-6">Products</h4>
              <ul className="space-y-4 text-sm text-brand-espresso/70">
                <li><Link to="/menu" className="hover:text-brand-red transition-colors">Coffee</Link></li>
                <li><Link to="/menu" className="hover:text-brand-red transition-colors">Non-Coffee</Link></li>
                <li><Link to="/menu" className="hover:text-brand-red transition-colors">Freezy</Link></li>
                <li><Link to="/download-app" className="hover:text-brand-red transition-colors">Download App</Link></li>
              </ul>
            </div>
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
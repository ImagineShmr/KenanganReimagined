import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Navigation, X, ChevronDown } from 'lucide-react';

interface OutletData {
  name: string;
  address: string;
  state: string;
}

const OUTLETS_DATA: OutletData[] = [
  // Johor
  { name: 'Lotus Desa Tebrau', address: 'G6, Ground Floor, Desa Tebrau, Johor', state: 'Johor' },
  { name: 'General Post Office, JB', address: 'JKR 2521, Jln. Dato Onn, Johor Bahru', state: 'Johor' },
  { name: 'AEON Taman Universiti', address: 'LG 20A, Lower Ground Floor', state: 'Johor' },
  { name: 'Muar, Bakri', address: 'Lot No. 9, Ground Floor, Bakri, Muar', state: 'Johor' },
  { name: 'Kluang, Jalan Duku', address: 'No. 25 (Lower Ground Floor), Jalan Duku, Kluang', state: 'Johor' },
  { name: 'The Commune Mall', address: 'Lot G-20, The Commune Mall, Johor', state: 'Johor' },
  { name: 'SOGO Mid Valley Southkey', address: '1F-5A, First Floor, Mid Valley Southkey', state: 'Johor' },
  { name: 'Batu Pahat Mall', address: 'GK84, GK85, GK94, GK95, GK100 & GK101, Ground Floor', state: 'Johor' },
  { name: 'Larkin Junction', address: '1-09, Level 1, Larkin Junction', state: 'Johor' },
  { name: 'AEON Bandar Dato Onn', address: 'Lot GK12, AEON Bandar Dato Onn', state: 'Johor' },
  { name: 'Jalan Universiti 1, Parit Raja', address: 'No. G-25, Ground Floor, Parit Raja', state: 'Johor' },
  { name: 'Setia Tropika, JB', address: 'No. 69, Jln. Setia Tropika 1/15, Johor Bahru', state: 'Johor' },
  { name: 'Sunway Big Box', address: 'GL-14, Ground Floor, Sunway Big Box', state: 'Johor' },
  { name: 'Paradigm, JB', address: 'UGK-01, Upper Ground Floor, Paradigm Mall JB', state: 'Johor' },
  { name: 'Pusat Perniagaan Emas', address: 'No. 1-G, Jalan Emas 2, 82000 Pontian', state: 'Johor' },
  { name: 'Jalan Rahmat', address: '95-2, Jalan Rahmat, 83000 Batu Pahat', state: 'Johor' },

  // Kuala Lumpur
  { name: 'Suria KLCC', address: 'C70, Concourse, Suria KLCC', state: 'Kuala Lumpur' },
  { name: 'Pavilion Kuala Lumpur', address: 'P1.05, Level 1, Pavilion KL', state: 'Kuala Lumpur' },
  { name: 'MyTOWN', address: 'G.047, Ground Floor, MyTOWN Shopping Centre', state: 'Kuala Lumpur' },
  { name: 'Nu Sentral', address: 'LG.09, Lower Ground Floor, Nu Sentral', state: 'Kuala Lumpur' },
  { name: 'Wangsa Walk Mall', address: 'Lot GL-08 and FL-08, Wangsa Walk Mall', state: 'Kuala Lumpur' },
  { name: 'Jalan Tun Perak', address: 'No. 45-3, Ground Floor, Jalan Tun Perak', state: 'Kuala Lumpur' },
  { name: 'SOGO Kuala Lumpur', address: 'Lower Ground Floor, SOGO KL', state: 'Kuala Lumpur' },
  { name: 'Mid Valley Megamall', address: 'Lot F-027A & 027B, 1st Floor, Mid Valley', state: 'Kuala Lumpur' },
  { name: 'The Vertical Podium Bangsar South', address: 'Unit G-13, Ground Floor', state: 'Kuala Lumpur' },
  { name: 'Setapak Central', address: 'GK-7A, Ground Floor, Setapak Central', state: 'Kuala Lumpur' },
  { name: 'KL East Mall', address: 'Lot G1-29, Ground Floor, KL East Mall', state: 'Kuala Lumpur' },
  { name: 'Plaza Mont Kiara', address: 'Lot C/0G/03 & C/0G/04, Courtyard Level', state: 'Kuala Lumpur' },
  { name: 'Singgah Sana @ TRX', address: 'Retail 04, Plaza Singgah Sana at Exchange 106', state: 'Kuala Lumpur' },
  { name: 'Queensville', address: 'R-G-05, Ground Floor, Kompleks Permaisuri Q, Bandar Sri Permaisuri', state: 'Kuala Lumpur' },

  // Kelantan
  { name: 'KB Mall', address: 'GK2A-GK2F, Ground Floor, KB Mall, Kota Bharu', state: 'Kelantan' },
  { name: 'Humaira Tanah Merah', address: 'PT 711, Ground Floor, Kompleks Perniagaan Humaira', state: 'Kelantan' },
  { name: 'Pengkalan Chepa', address: 'Lot 1093, Ground Floor, Taman Bendahara', state: 'Kelantan' },
  { name: 'Aeon Mall Kota Bharu', address: 'Lot F35A & F35B, AEON Mall Kota Bharu', state: 'Kelantan' },
  { name: 'Pasir Puteh Sentral', address: 'PT3047, Tingkat Bawah, Jalan Pasir Puteh Sentral 2/4', state: 'Kelantan' },

  // Kedah
  { name: 'Amanjaya Mall Sungai Petani', address: 'Lot 13, 2nd Floor, Amanjaya Mall', state: 'Kedah' },
  { name: 'Kompleks Jetty Point', address: 'Zone 2 - Lot 9, Kompleks Jetty Point, Langkawi', state: 'Kedah' },
  { name: 'Maha Tower Langkawi', address: 'L1A-02, Level 1A, Maha Tower', state: 'Kedah' },
  { name: 'Kelang Lama Square', address: 'No. 7 Ground Floor, Kelang Lama Square, 09000 Kulim', state: 'Kedah' },

  // Melaka
  { name: 'Taman Kota Laksamana', address: 'No. 93, Ground Floor, Taman Kota Laksamana', state: 'Melaka' },
  { name: 'AEON Melaka Shopping Centre', address: 'Lot-GK1, Ground Floor, AEON Melaka', state: 'Melaka' },
  { name: 'AEON Bandaraya Melaka', address: 'Lot FK10, First Floor, AEON Bandaraya', state: 'Melaka' },
  { name: 'Tarcor Park, Melaka', address: '188, Jln. Persisiran Pantai, Melaka', state: 'Melaka' },
  { name: 'Taman Duyung Bestari', address: '12 Ground Floor, Jalan TDB6, 75460 Ayer Molek', state: 'Melaka' },

  // Negeri Sembilan
  { name: 'Seremban Gateway', address: 'Lot C6-G, Seremban Gateway', state: 'Negeri Sembilan' },
  { name: 'AEON Nilai Mall', address: 'Lot KF02, AEON Nilai Mall', state: 'Negeri Sembilan' },
  { name: 'Bandar Enstek, Nilai', address: '36, Jalan Timur 6/1A Ground Floor', state: 'Negeri Sembilan' },
  { name: 'Bandar Prima Senawang', address: 'No. 36G, Jln. BPS 3, Senawang', state: 'Negeri Sembilan' },
  { name: 'PD Waterfront', address: '1-G-04 & 1-G-05, Persiaran Waterfront', state: 'Negeri Sembilan' },
  { name: 'Centrio Seremban 2', address: 'Ground Floor, No.19, Centrio Seremban 2', state: 'Negeri Sembilan' },
  { name: 'Bahau', address: 'No. 131, Jalan Gurney, 72100 Bahau', state: 'Negeri Sembilan' },
  { name: 'Rasah Prima', address: 'No. 45-G, Jalan Rasah Prima 3, 70300 Seremban', state: 'Negeri Sembilan' },

  // Pahang
  { name: 'Jalan Ahmad Shah, Temerloh', address: 'No. 54, Ground Floor, Jalan Ahmad Shah', state: 'Pahang' },
  { name: 'Pusat Komersial Bentong Prima', address: 'P 16G, Jalan Prima 1, Bentong', state: 'Pahang' },
  { name: 'TMG Indera Mahkota', address: 'Lot 7, Ground Floor, TMG Indera Mahkota', state: 'Pahang' },
  { name: 'TMG Tanjung Lumpur', address: 'Lot 11, No. PT 124756, Tanjung Lumpur', state: 'Pahang' },
  { name: 'Jalan Dulang, Jerantut', address: 'Lot. 11, Tingkat Bawah, Jalan Dulang', state: 'Pahang' },
  { name: 'Pandan Damai, Kuantan', address: 'B-14, Lorong Pandan Damai 2/201', state: 'Pahang' },
  { name: 'Tanah Rata Cameron Highland', address: 'No. 12, Jln. Besar Tanah Rata', state: 'Pahang' },
  { name: 'East Coast Mall', address: 'GF-69, Ground Floor, East Coast Mall, Kuantan', state: 'Pahang' },

  // Perak
  { name: 'Gunung Rapat', address: 'No.10, Laluan Medan Rapat 1, Gunung Rapat, 31350 Ipoh', state: 'Perak' },
  { name: 'Medan Station 18', address: 'No.37, Susuran Stesen 18, 31650 Ipoh', state: 'Perak' },
  { name: 'Kuala Kangsar', address: 'No 3D, Persiaran Medan Mutiara Satu, 33000 Kuala Kangsar', state: 'Perak' },
  { name: 'Universiti Teknologi Petronas', address: 'F&B 3, Student Centre, UTP, 32610 Seri Iskandar', state: 'Perak' },
  { name: 'Seri Iskandar Business Centre', address: 'No. 24 Ground Floor, Persiaran SIBC 2', state: 'Perak' },

  // Putrajaya
  { name: 'Presint Diplomatik', address: '39, Jln. Diplomatik, Presint 15, Putrajaya', state: 'Putrajaya' },
  { name: 'Souq Putrajaya', address: 'Lot G-003, Selera Putra, Presint 1', state: 'Putrajaya' },
  { name: 'Suasana PJH', address: 'Unit A-G-R12 & R13, Level G, Block A, Suasana PJH', state: 'Putrajaya' },

  // Penang
  { name: 'City Junction', address: 'No. 2-1-6 (Lot C), Level 1, City Junction', state: 'Penang' },
  { name: 'AEON Bukit Mertajam', address: 'Lot F32, First Floor, AEON Bukit Mertajam', state: 'Penang' },
  { name: 'Karpal Singh Drive', address: 'No. 23-A, Ground Floor, Karpal Singh Drive', state: 'Penang' },
  { name: 'Queensbay Mall', address: '3F-P1 (Postal: 3F-06), Third Floor, Queensbay Mall', state: 'Penang' },
  { name: 'Central Gurney', address: 'G-01, G-01a, Central Gurney', state: 'Penang' },
  { name: 'Sunway Carnival Mall', address: '2F-13B, Second Floor, Sunway Carnival Mall', state: 'Penang' },
  { name: 'Bagan Ajam', address: 'No.71, Ground Floor, Jalan Merbau, 13000 Butterworth', state: 'Penang' },

  // Sabah
  { name: 'The Shore', address: 'G-01(B), Ground Floor, The Shore, Kota Kinabalu', state: 'Sabah' },
  { name: 'Imago Kota Kinabalu', address: 'Unit B-103 (Basement), Imago Shopping Mall, KK Times Square', state: 'Sabah' },
  { name: 'KKIA Airport', address: 'L3L09(A), Level 3, Departure Level, KKIA', state: 'Sabah' },

  // Selangor
  { name: 'Sunway Pyramid', address: 'LG1.118A, Lower Ground 1 Floor, Sunway Pyramid', state: 'Selangor' },
  { name: 'IOI City Mall', address: 'Lot K.211, Lower Ground Floor, IOI City Mall', state: 'Selangor' },
  { name: 'Plaza Shah Alam', address: 'G.20, Ground Floor 2, Plaza Shah Alam', state: 'Selangor' },
  { name: 'AEON Shah Alam', address: 'Lot KG-5, AEON Shah Alam', state: 'Selangor' },
  { name: 'Metro Point Complex, Kajang', address: 'Lot G23, Ground Floor, Metro Point', state: 'Selangor' },
  { name: 'Setia City Mall', address: 'UG122, UG Floor, Setia City Mall', state: 'Selangor' },
  { name: 'KLIA 2 Gateway', address: 'Lot S2-3-L18, Level 3, KLIA 2 Gateway', state: 'Selangor' },
  { name: 'Mydin USJ', address: 'GSRU-06 LOT, Mydin USJ', state: 'Selangor' },
  { name: 'One Utama', address: 'LGK101B, Lower Ground Floor, One Utama', state: 'Selangor' },
  { name: 'The Curve', address: 'G94, Ground Floor, The Curve, Mutiara Damansara', state: 'Selangor' },
  { name: 'Citta Mall', address: 'G-K18, Ground Floor, Citta Mall', state: 'Selangor' },
  { name: 'Digital Mall', address: 'G-02A, Ground Floor, Digital Mall, Seksyen 14, PJ', state: 'Selangor' },
  { name: 'Subang Parade', address: 'Lot LG25, LG Floor, Subang Parade, SS16', state: 'Selangor' },
  { name: 'Seksyen 35', address: '58 Ground Floor, Jalan Panglima Hitam, Alam Impian', state: 'Selangor' },
  { name: 'Bangi Gateway Mall', address: 'G-3A, Ground Floor, Block A, Bangi Gateway', state: 'Selangor' },
  { name: 'AEON Mall Rawang', address: 'G38, Ground Floor, AEON Mall Rawang', state: 'Selangor' },
  { name: 'Terminal Bersepadu Gombak', address: 'L3-18, Level 2, TBG', state: 'Selangor' },
  { name: 'Gamuda Cove', address: 'Discovery Park, Persiaran Cove Sentral', state: 'Selangor' },

  // Terengganu
  { name: 'Dataran Austin, Kuala Terengganu', address: 'Lot 52569, Ground & First Floor', state: 'Terengganu' },
  { name: 'KTCC Mall', address: 'GK-21 to GK-23A, Ground Floor, KTCC Mall', state: 'Terengganu' },
  { name: 'Sura Gate Dungun', address: 'Lot 9935, Ground Floor, Sura Gate Dungun', state: 'Terengganu' },
  { name: 'Taman Chukai Utama, Kemaman', address: 'PT 10372 T/B, Jalan Kubang Kurus, 24000 Kemaman', state: 'Terengganu' },
];

const STATES = ['Kuala Lumpur', 'Selangor', 'Johor', 'Penang', 'Pahang', 'Perak', 'Putrajaya', 'Sabah', 'Melaka', 'Kedah', 'Kelantan', 'N. Sembilan', 'Terengganu'];

const LocationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>('Kuala Lumpur');

  // When searching, search across ALL states
  const isSearching = searchQuery.trim().length > 0;

  const filteredOutlets = OUTLETS_DATA.filter((outlet) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      outlet.name.toLowerCase().includes(query) ||
      outlet.address.toLowerCase().includes(query) ||
      outlet.state.toLowerCase().includes(query);

    // If searching, ignore state filter
    if (isSearching) {
      return matchesSearch;
    }

    // Handle abbreviated state name
    const stateMatch = selectedState === 'N. Sembilan' ? 'Negeri Sembilan' : selectedState;
    const matchesState = outlet.state === stateMatch;
    return matchesState;
  });

  const totalOutlets = OUTLETS_DATA.length;

  const getGoogleMapsUrl = (name: string, address: string) => {
    const query = encodeURIComponent(`Kenangan Coffee ${name} ${address}`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  // Alternate images for variety (placeholder - replace with individual outlet images)
  const getOutletImage = (index: number) => {
    // TODO: Replace with individual outlet images
    return '/images/outlet/trx.jpg';
  };

  // Clear search and reset to default state
  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedState('Kuala Lumpur');
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section - Full Height */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/outlet/Kenangan-Coffee-Banner-Outlet.jpg"
            alt="Kenangan Coffee Outlet"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-espresso/90 via-brand-espresso/50 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-serif text-5xl md:text-9xl font-bold text-white leading-[1.1] mb-4">
                {totalOutlets}+
              </h1>
              <h2 className="font-serif text-2xl md:text-5xl font-bold text-brand-latte mb-6">
                Stores across<br />Malaysia
              </h2>

              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light max-w-lg">
                Find your nearest Kenangan Coffee outlet and experience premium coffee crafted with love.
              </p>

              <a
                href="#locations"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white rounded-full font-semibold text-lg hover:bg-red-700 transition-all shadow-lg shadow-brand-red/30"
              >
                Find a Store
                <ChevronDown size={20} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="mt-16 flex gap-8 border-t border-white/20 pt-8"
            >
              <div>
                <p className="text-3xl font-serif text-white font-bold">{STATES.length - 1}</p>
                <p className="text-white/60 text-sm">States Covered</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white font-bold">{totalOutlets}+</p>
                <p className="text-white/60 text-sm">Total Outlets</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
              Our Locations
            </h4>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-espresso">
              Find Us Near You
            </h2>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative mb-8 max-w-2xl mx-auto ${isSearching ? 'animate-pulse-border' : ''}`}
          >
            {/* Beaming border effect when searching */}
            {isSearching && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red rounded-2xl opacity-75 blur-sm animate-pulse" />
            )}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-espresso/40 z-10" size={20} />
              <input
                type="text"
                placeholder="Search all outlets by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-12 py-4 rounded-2xl bg-brand-cream border text-brand-espresso placeholder:text-brand-espresso/40 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red relative ${isSearching ? 'border-brand-red' : 'border-brand-latte/30'}`}
              />
              {/* Clear button */}
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-brand-espresso/10 hover:bg-brand-espresso/20 flex items-center justify-center transition-colors z-10"
                >
                  <X size={14} className="text-brand-espresso" />
                </button>
              )}
            </div>
          </motion.div>

          {/* State Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {STATES.map((state) => (
                <button
                  key={state}
                  onClick={() => {
                    setSelectedState(state);
                    setSearchQuery('');
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-all text-sm whitespace-nowrap ${!isSearching && selectedState === state
                    ? 'bg-brand-espresso text-white shadow-lg'
                    : 'bg-brand-cream text-brand-espresso/70 hover:text-brand-espresso'
                    }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-center text-brand-espresso/60 mb-8">
            Showing {filteredOutlets.length} outlet{filteredOutlets.length !== 1 ? 's' : ''}
            {isSearching
              ? ` matching "${searchQuery}"`
              : ` in ${selectedState === 'N. Sembilan' ? 'Negeri Sembilan' : selectedState}`
            }
          </p>

          {/* Location Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOutlets.map((outlet, index) => (
              <motion.div
                key={`${outlet.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.02, 0.3) }}
                className="bg-brand-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Outlet Image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={getOutletImage(index)}
                    alt={outlet.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-bold text-brand-espresso text-lg mb-2">
                    {outlet.name}
                  </h3>
                  <p className="text-brand-espresso/60 text-sm mb-4 leading-relaxed line-clamp-2">
                    {outlet.address}
                  </p>
                  <a
                    href={getGoogleMapsUrl(outlet.name, outlet.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-red font-semibold text-sm hover:underline"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center">
                      <Navigation size={12} className="text-white" />
                    </div>
                    DIRECTION
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredOutlets.length === 0 && (
            <div className="text-center py-16">
              <MapPin size={48} className="mx-auto text-brand-espresso/20 mb-4" />
              <p className="text-brand-espresso/60 text-lg">No locations found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;

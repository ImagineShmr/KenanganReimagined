import { MenuItem, NavLink, Stat } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Locations', href: '#locations' },
  { label: 'Our Story', href: '#story' },
  { label: 'Careers', href: '#careers' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Signature
  {
    id: '1',
    name: 'Kenangan Latte',
    description: 'Our signature espresso blended with organic palm sugar and fresh milk.',
    price: 'RM 10.90',
    category: 'Signature',
    image: 'https://picsum.photos/seed/latte1/400/400',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Avocatto',
    description: 'Creamy avocado blended with rich espresso and chocolate shavings.',
    price: 'RM 13.90',
    category: 'Signature',
    image: 'https://picsum.photos/seed/avocado/400/400',
  },
  {
    id: '9',
    name: 'Mochaccino',
    description: 'A perfect blend of espresso, steamed milk and rich chocolate syrup.',
    price: 'RM 12.90',
    category: 'Signature',
    image: 'https://picsum.photos/seed/mocha/400/400',
  },
  {
    id: '10',
    name: 'Salted Caramel Macchiato',
    description: 'Espresso with steamed milk, vanilla syrup and a drizzle of salted caramel.',
    price: 'RM 12.50',
    category: 'Signature',
    image: 'https://picsum.photos/seed/macchiato/400/400',
  },

  // Classic
  {
    id: '3',
    name: 'Americano',
    description: 'Bold, robust espresso diluted with hot water for a classic taste.',
    price: 'RM 7.90',
    category: 'Classic',
    image: 'https://picsum.photos/seed/americano/400/400',
  },
  {
    id: '4',
    name: 'Spanish Latte',
    description: 'A sweeter, creamier take on the classic latte with condensed milk.',
    price: 'RM 11.90',
    category: 'Classic',
    image: 'https://picsum.photos/seed/spanish/400/400',
  },
  {
    id: '11',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and milk foam for a creamy texture.',
    price: 'RM 9.90',
    category: 'Classic',
    image: 'https://picsum.photos/seed/cappuccino/400/400',
  },
  {
    id: '12',
    name: 'Flat White',
    description: 'Double shot of espresso topped with silky, micro-foamed milk.',
    price: 'RM 10.50',
    category: 'Classic',
    image: 'https://picsum.photos/seed/flatwhite/400/400',
  },

  // Freezy
  {
    id: '5',
    name: 'Hojicha Latte',
    description: 'Roasted green tea latte with a nutty, smoky flavor profile.',
    price: 'RM 11.90',
    category: 'Freezy',
    image: 'https://picsum.photos/seed/hojicha/400/400',
    isNew: true,
  },
  {
    id: '6',
    name: 'Belgian Chocolate',
    description: 'Rich, velvety Belgian chocolate milk. Pure indulgence.',
    price: 'RM 10.90',
    category: 'Freezy',
    image: 'https://picsum.photos/seed/choco/400/400',
  },
  {
    id: '13',
    name: 'Matcha Latte',
    description: 'Premium Japanese matcha green tea blended with fresh milk.',
    price: 'RM 11.50',
    category: 'Freezy',
    image: 'https://picsum.photos/seed/matcha/400/400',
  },
  {
    id: '14',
    name: 'Cookies & Cream Shake',
    description: 'Creamy vanilla blended with crushed chocolate cookies.',
    price: 'RM 12.90',
    category: 'Freezy',
    image: 'https://picsum.photos/seed/cookies/400/400',
  },

  // Food
  {
    id: '7',
    name: 'Salted Caramel Crossaint',
    description: 'Flaky pastry filled with gooey salted caramel.',
    price: 'RM 8.50',
    category: 'Food',
    image: 'https://picsum.photos/seed/croissant/400/400',
  },
  {
    id: '8',
    name: 'Spicy Tuna Puff',
    description: 'Savory puff pastry stuffed with spicy tuna flakes.',
    price: 'RM 9.50',
    category: 'Food',
    image: 'https://picsum.photos/seed/puff/400/400',
  },
  {
    id: '15',
    name: 'Chocolate Danish',
    description: 'Buttery danish pastry filled with rich dark chocolate.',
    price: 'RM 7.90',
    category: 'Food',
    image: 'https://picsum.photos/seed/danish/400/400',
  },
  {
    id: '16',
    name: 'Chicken Mushroom Pie',
    description: 'Classic savory pie with creamy chicken and mushroom filling.',
    price: 'RM 9.90',
    category: 'Food',
    image: 'https://picsum.photos/seed/pie/400/400',
  }
];

export const STATS: Stat[] = [
  { label: 'Outlets', value: '800+', description: 'Across SE Asia' },
  { label: 'Cups Served', value: '100M+', description: 'Global Revenue Milestone' },
  { label: 'Varieties', value: '45+', description: 'Unique Beverage Options' },
];
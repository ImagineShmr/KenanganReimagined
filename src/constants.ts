import { MenuItem, NavLink, Stat } from './types.ts';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Menu', href: '/menu' },
  { label: 'Locations', href: '/locations' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Careers', href: '/careers' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Signature
  {
    id: '1',
    name: 'Kenangan Latte',
    description: 'Our signature espresso blended with organic palm sugar and fresh milk.',
    price: 'RM 10.90',
    category: 'Signature',
    image: '/images/menu/kenangan-latte.jpg',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Avocatto',
    description: 'Creamy avocado blended with rich espresso and chocolate shavings.',
    price: 'RM 13.90',
    category: 'Signature',
    image: '/images/menu/avocado-coffee.jpg',
  },
  {
    id: '9',
    name: 'Mochaccino',
    description: 'A perfect blend of espresso, steamed milk and rich chocolate syrup.',
    price: 'RM 12.90',
    category: 'Signature',
    image: '/images/menu/mocha.jpg',
  },
  {
    id: '10',
    name: 'Salted Caramel Macchiato',
    description: 'Espresso with steamed milk, vanilla syrup and a drizzle of salted caramel.',
    price: 'RM 12.50',
    category: 'Signature',
    image: '/images/menu/salted-caramel-macchiato.jpg',
  },

  // Classic
  {
    id: '3',
    name: 'Americano',
    description: 'Bold, robust espresso diluted with hot water for a classic taste.',
    price: 'RM 7.90',
    category: 'Classic',
    image: '/images/menu/creamy-latte.jpg',
  },
  {
    id: '4',
    name: 'Spanish Latte',
    description: 'A sweeter, creamier take on the classic latte with condensed milk.',
    price: 'RM 11.90',
    category: 'Classic',
    image: '/images/menu/creamy-latte.jpg',
  },
  {
    id: '11',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and milk foam for a creamy texture.',
    price: 'RM 9.90',
    category: 'Classic',
    image: '/images/menu/creamy-latte.jpg',
  },
  {
    id: '12',
    name: 'Flat White',
    description: 'Double shot of espresso topped with silky, micro-foamed milk.',
    price: 'RM 10.50',
    category: 'Classic',
    image: '/images/menu/creamy-latte.jpg',
  },

  // Non - Coffee
  {
    id: '5',
    name: 'Hojicha Latte',
    description: 'Roasted green tea latte with a nutty, smoky flavor profile.',
    price: 'RM 11.90',
    category: 'Non - Coffee',
    image: '/images/menu/roasted-tea.jpg',
    isNew: true,
  },
  {
    id: '6',
    name: 'Belgian Chocolate',
    description: 'Rich, velvety Belgian chocolate milk. Pure indulgence.',
    price: 'RM 10.90',
    category: 'Non - Coffee',
    image: '/images/menu/chocolate.jpg',
  },
  {
    id: '13',
    name: 'Matcha Latte',
    description: 'Premium Japanese matcha green tea blended with fresh milk.',
    price: 'RM 11.50',
    category: 'Non - Coffee',
    image: '/images/menu/green-tea.jpg',
  },
  {
    id: '14',
    name: 'Thai Tea',
    description: 'Classic Thai tea with creamy milk and sweet aromatic spices.',
    price: 'RM 10.90',
    category: 'Non - Coffee',
    image: '/images/menu/thai-tea.jpg',
  },

  // Freezy
  {
    id: '7',
    name: 'Freezy Mocha',
    description: 'Iced blended mocha with rich chocolate and espresso.',
    price: 'RM 12.90',
    category: 'Freezy',
    image: '/images/menu/freezy-mocha.jpg',
  },
  {
    id: '8',
    name: 'Freezy Salted Caramel',
    description: 'Iced blended salted caramel with espresso swirls.',
    price: 'RM 12.90',
    category: 'Freezy',
    image: '/images/menu/freezy-salted-caramel.jpg',
  },
  {
    id: '15',
    name: 'Double Chocolate',
    description: 'Rich double chocolate blended with ice and cream.',
    price: 'RM 11.90',
    category: 'Freezy',
    image: '/images/menu/double-chocolate.jpg',
  },
  {
    id: '16',
    name: 'Strawberry Tea',
    description: 'Refreshing strawberry tea blended with ice.',
    price: 'RM 10.90',
    category: 'Freezy',
    image: '/images/menu/strawberry-tea.jpg',
  }
];

export const STATS: Stat[] = [
  { label: 'Outlets', value: '800+', description: 'Across SE Asia' },
  { label: 'Cups Served', value: '100M+', description: 'Global Revenue Milestone' },
  { label: 'Varieties', value: '45+', description: 'Unique Beverage Options' },
];
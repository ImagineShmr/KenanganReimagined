export type Category = 'Signature' | 'Classic' | 'Non - Coffee' | 'Freezy';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}
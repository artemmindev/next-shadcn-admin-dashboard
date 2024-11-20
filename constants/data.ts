import { NavItem } from '@/types';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: []
  },
  {
    title: 'Product',
    url: '/product',
    icon: 'product',
    isActive: false,
    shortcut: ['p', 'p'],
    items: []
  },
];

export const user = {
  name: "Artem",
  image: "",
  email: "artemmindev@gmail.com",
};

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};
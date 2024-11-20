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

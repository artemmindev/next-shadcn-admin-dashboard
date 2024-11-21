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
    title: 'Employee',
    url: '/employee',
    icon: 'user',
    shortcut: ['e', 'e'],
    isActive: false,
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

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number;
  latitude?: number;
  job: string;
  profile_picture?: string | null;
};

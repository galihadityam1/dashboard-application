import { NavItem } from '@/types';

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

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Product',
    url: '/dashboard/product',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Account',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Profile',
        url: '/dashboard/profile',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Login',
        shortcut: ['l', 'l'],
        url: '/',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Kanban',
    url: '/dashboard/kanban',
    icon: 'kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  }
];

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Ethan Carter',
    email: 'ethan.carter@email.com',
    amount: '+$2,450.00',
    image: 'https://api.slingacademy.com/public/sample-users/6.png',
    initials: 'EC'
  },
  {
    id: 2,
    name: 'Mia Thompson',
    email: 'mia.thompson@email.com',
    amount: '+$320.00',
    image: 'https://api.slingacademy.com/public/sample-users/7.png',
    initials: 'MT'
  },
  {
    id: 3,
    name: 'Liam Perez',
    email: 'liam.perez@email.com',
    amount: '+$1,150.00',
    image: 'https://api.slingacademy.com/public/sample-users/8.png',
    initials: 'LP'
  },
  {
    id: 4,
    name: 'Ava Robinson',
    email: 'ava.robinson@email.com',
    amount: '+$560.00',
    image: 'https://api.slingacademy.com/public/sample-users/9.png',
    initials: 'AR'
  },
  {
    id: 5,
    name: 'Noah Murphy',
    email: 'noah.murphy@email.com',
    amount: '+$75.00',
    image: 'https://api.slingacademy.com/public/sample-users/10.png',
    initials: 'NM'
  },
  {
    id: 6,
    name: 'Charlotte Rivera',
    email: 'charlotte.rivera@email.com',
    amount: '+$999.00',
    image: 'https://api.slingacademy.com/public/sample-users/11.png',
    initials: 'CR'
  },
  {
    id: 7,
    name: 'James Kelly',
    email: 'james.kelly@email.com',
    amount: '+$185.00',
    image: 'https://api.slingacademy.com/public/sample-users/12.png',
    initials: 'JK'
  },
  {
    id: 8,
    name: 'Amelia Howard',
    email: 'amelia.howard@email.com',
    amount: '+$420.00',
    image: 'https://api.slingacademy.com/public/sample-users/13.png',
    initials: 'AH'
  },
  {
    id: 9,
    name: 'Lucas Brooks',
    email: 'lucas.brooks@email.com',
    amount: '+$3,200.00',
    image: 'https://api.slingacademy.com/public/sample-users/14.png',
    initials: 'LB'
  },
  {
    id: 10,
    name: 'Harper Gray',
    email: 'harper.gray@email.com',
    amount: '+$245.00',
    image: 'https://api.slingacademy.com/public/sample-users/15.png',
    initials: 'HG'
  }
];

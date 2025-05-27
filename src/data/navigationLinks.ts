import { LayoutDashboard, History, Calendar, FileText, BarChart2, Goal as Vial, MessageCircle, HeadphonesIcon, Settings } from 'lucide-react';

export interface NavigationLink {
  id: string;
  name: string;
  icon: any;
  category: 'general' | 'tools';
}

export const navigationLinks: NavigationLink[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: LayoutDashboard,
    category: 'general'
  },
  {
    id: 'history',
    name: 'History',
    icon: History,
    category: 'general'
  },
  {
    id: 'calendar',
    name: 'Calendar',
    icon: Calendar,
    category: 'general'
  },
  {
    id: 'appointments',
    name: 'Appointments',
    icon: FileText,
    category: 'general'
  },
  {
    id: 'statistics',
    name: 'Statistics',
    icon: BarChart2,
    category: 'general'
  },
  {
    id: 'tests',
    name: 'Tests',
    icon: Vial,
    category: 'tools'
  },
  {
    id: 'chat',
    name: 'Chat',
    icon: MessageCircle,
    category: 'tools'
  },
  {
    id: 'support',
    name: 'Support',
    icon: HeadphonesIcon,
    category: 'tools'
  },
  {
    id: 'setting',
    name: 'Setting',
    icon: Settings,
    category: 'tools'
  }
];
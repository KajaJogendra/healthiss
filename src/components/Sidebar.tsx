import React from 'react';
import { LayoutDashboard, History, Calendar, FileText, BarChart2, FlaskRound as Flask, MessageCircle, HeadphonesIcon, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  const links = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: History, label: 'History' },
    { icon: Calendar, label: 'Calendar' },
    { icon: FileText, label: 'Appointments' },
    { icon: BarChart2, label: 'Statistics' },
    { icon: Flask, label: 'Tests' },
    { icon: MessageCircle, label: 'Chat' },
    { icon: HeadphonesIcon, label: 'Support' },
    { icon: Settings, label: 'Setting' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-100 p-6">
      <div className="mb-8">
        <h3 className="text-xs uppercase text-gray-400 font-medium mb-4">GENERAL</h3>
        <nav className="space-y-1">
          {links.slice(0, 5).map((link, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                ${link.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <link.icon size={20} />
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div>
        <h3 className="text-xs uppercase text-gray-400 font-medium mb-4">TOOLS</h3>
        <nav className="space-y-1">
          {links.slice(5).map((link, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
            >
              <link.icon size={20} />
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto pt-8">
        <div className="bg-blue-600 rounded-xl p-4 text-white">
          <h3 className="font-medium mb-2">Need Help?</h3>
          <p className="text-sm text-blue-200 mb-4">
            Contact our support team for any assistance:
          </p>
          <button className="w-full bg-white text-blue-600 rounded-lg py-2 text-sm font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
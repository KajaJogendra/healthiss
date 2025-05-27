import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-500">Healthcare</span>
          <span>.</span>
        </h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 w-[400px] bg-gray-50 rounded-lg text-sm focus:outline-none" 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
        </button>
        
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2">
          <span className="text-lg">+</span>
          <span>Add</span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            UN
          </div>
          <div className="text-sm">
            <div className="font-medium">User Name</div>
            <div className="text-gray-500 text-xs">Patient</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
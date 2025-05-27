import React from 'react';
import { ChevronDown } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <button className="flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-1.5 rounded-md border border-gray-200">
        <span>This Week</span>
        <ChevronDown size={16} />
      </button>
    </div>
  );
};

export default DashboardHeader;
import React from 'react';
import { anatomyParts, healthLogs } from '../../data/healthData';
import { Search } from 'lucide-react';

// Using a placeholder human anatomy image
const ANATOMY_IMAGE_URL = "https://i.imgur.com/qdS2OJ9.png";

const AnatomySection: React.FC = () => {
  return (
    <div className="relative bg-white rounded-xl p-6 mb-6 flex flex-col items-center">
      <div className="absolute top-4 right-4">
        <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
          <Search size={16} />
        </button>
      </div>
      
      <div className="relative w-48 mx-auto mb-4">
        <img 
          src={ANATOMY_IMAGE_URL} 
          alt="Human anatomy" 
          className="w-full h-auto" 
        />
        
        {/* Heart indicator */}
        <div 
          className="absolute"
          style={{ top: '34%', left: '46%' }}
        >
          <div className="relative">
            <div className="bg-indigo-600 text-white text-xs py-1 px-3 rounded-full flex items-center gap-1.5 whitespace-nowrap mb-1">
              <span className="text-red-400">❤️</span>
              <span>Healthy Heart</span>
            </div>
          </div>
        </div>
        
        {/* Leg indicator */}
        {healthLogs.map(log => (
          <div 
            key={log.id}
            className="absolute bottom-1/4 -left-12"
          >
            <div className="bg-cyan-500 text-white text-xs py-1 px-3 rounded-full flex items-center gap-1.5 whitespace-nowrap mb-1">
              <span>🦵</span>
              <span>{log.title}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mb-2">
        <span className="text-gray-500 text-xs">⟳</span>
      </div>
    </div>
  );
};

export default AnatomySection;
import React from 'react';
import { HealthStatus } from '../../data/healthData';
import { ChevronRight } from 'lucide-react';

interface HealthStatusCardProps {
  healthItem: HealthStatus;
}

const HealthStatusCard: React.FC<HealthStatusCardProps> = ({ healthItem }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-500';
      case 'attention':
        return 'bg-red-500';
      case 'warning':
        return 'bg-orange-500';
      default:
        return 'bg-cyan-500';
    }
  };
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'Lungs':
        return '🫁';
      case 'Teeth':
        return '🦷';
      case 'Bone':
        return '🦴';
      default:
        return '❤️';
    }
  };
  
  return (
    <div className="bg-white rounded-xl p-4 mb-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-lg">{getIcon(healthItem.name)}</span>
        <h3 className="font-medium text-gray-800">{healthItem.name}</h3>
      </div>
      
      <p className="text-xs text-gray-400 mb-3">Date: {healthItem.date}</p>
      
      <div className="w-full h-2 bg-gray-100 rounded-full mb-2">
        <div 
          className={`h-full rounded-full ${getStatusColor(healthItem.status)}`} 
          style={{ width: healthItem.status === 'healthy' ? '100%' : healthItem.status === 'normal' ? '70%' : '50%' }}
        ></div>
      </div>
    </div>
  );
};

interface HealthStatusSectionProps {
  items: HealthStatus[];
}

export const HealthStatusSection: React.FC<HealthStatusSectionProps> = ({ items }) => {
  // Filter out the items that are not heart (which is shown on the anatomy)
  const filteredItems = items.filter(item => item.id !== 'heart');
  
  return (
    <div className="flex flex-col">
      {filteredItems.map(item => (
        <HealthStatusCard key={item.id} healthItem={item} />
      ))}
      
      <button className="flex items-center justify-center gap-1 text-sm text-indigo-600 mt-2">
        <span>Details</span>
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default HealthStatusCard;
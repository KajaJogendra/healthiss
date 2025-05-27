import React from 'react';
import { activityData } from '../../data/appointmentData';

const ActivityFeed: React.FC = () => {
  const maxHeight = 100; // Maximum height in pixels for the bars
  
  return (
    <div className="bg-white rounded-xl p-6 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg">Activity</h2>
        <p className="text-sm text-gray-500">3 appointments on this week</p>
      </div>
      
      <div className="flex items-end justify-between h-32">
        {activityData.map((day, index) => (
          <div key={index} className="flex items-end space-x-1">
            {day.appointments.map((value, i) => {
              const height = (value / 3) * maxHeight;
              return (
                <div 
                  key={`${index}-${i}`}
                  style={{ height: `${height}px` }}
                  className={`w-3 rounded-t-md ${i % 2 === 0 ? 'bg-cyan-500' : 'bg-indigo-600'}`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-2">
        {activityData.map((day, index) => (
          <div key={`day-${index}`} className="text-xs text-gray-500">
            {day.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
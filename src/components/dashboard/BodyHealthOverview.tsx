import React from 'react';
import { anatomyParts } from '../../data/healthData';
import { BookAppointment } from './BookAppointment';

const BodyHealthOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Body Health Overview</h2>
        <BookAppointment />
      </div>
      
      <div className="relative mb-8">
        <img 
          src="https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Body scan visualization" 
          className="w-full h-[400px] object-cover rounded-lg"
        />
        
        {anatomyParts.map(part => (
          <div
            key={part.id}
            className={`absolute ${part.id === 'teeth' ? 'top-1/4 right-1/4' : 
              part.id === 'lungs' ? 'top-1/3 left-1/2' :
              part.id === 'heart' ? 'top-1/2 left-1/3' :
              'bottom-1/4 right-1/3'}`}
          >
            <div className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 
              ${part.status === 'healthy' ? 'bg-blue-100 text-blue-700' :
                part.status === 'attention' ? 'bg-red-100 text-red-700' :
                'bg-yellow-100 text-yellow-700'}`}
            >
              {part.name}
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {anatomyParts.slice(0, 3).map(part => (
          <div key={part.id} className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{part.name}</h3>
              <span className="text-xl">{
                part.id === 'lungs' ? '🫁' :
                part.id === 'teeth' ? '🦷' :
                '🦴'
              }</span>
            </div>
            <p className="text-sm text-gray-500">{part.date}</p>
            <div className="mt-2 text-sm">
              {part.status === 'attention' ? 'Checkup Due' : 'Normal'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyHealthOverview;
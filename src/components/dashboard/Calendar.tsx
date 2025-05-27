import React from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

const Calendar: React.FC = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">October 2021</h2>
        <div className="flex gap-2">
          <button className="p-1 text-gray-600 hover:bg-gray-100 rounded">
            <ChevronLeft size={20} />
          </button>
          <button className="p-1 text-gray-600 hover:bg-gray-100 rounded">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map(day => (
          <div key={day} className="text-center text-sm text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {dates.map(date => (
          <button
            key={date}
            className={`aspect-square flex items-center justify-center rounded-lg text-sm
              ${date === 12 || date === 18 || date === 25 ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
          >
            {date}
          </button>
        ))}
      </div>
      
      <p className="text-gray-500 text-sm mt-4">
        No appointments scheduled for this view.
      </p>
    </div>
  );
};

export default Calendar;
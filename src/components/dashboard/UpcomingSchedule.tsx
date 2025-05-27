import React from 'react';
import { upcomingAppointments } from '../../data/appointmentData';

interface AppointmentCardProps {
  title: string;
  time: string;
  icon: string;
  type: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ title, time, icon, type }) => {
  return (
    <div className="bg-indigo-100 rounded-xl p-4 flex justify-between items-center mb-4">
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{time}</p>
      </div>
      <span className="text-xl">{icon}</span>
    </div>
  );
};

const UpcomingSchedule: React.FC = () => {
  // Group appointments by day
  const appointmentsByDay = upcomingAppointments.reduce((acc: Record<string, typeof upcomingAppointments>, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {});
  
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-lg mb-4">The Upcoming Schedule</h2>
      
      {Object.entries(appointmentsByDay).map(([day, appointments]) => (
        <div key={day} className="mb-6">
          <h3 className="text-gray-500 text-sm mb-3">On {day}</h3>
          
          {appointments.map(appointment => (
            <AppointmentCard 
              key={appointment.id}
              title={appointment.title}
              time={appointment.time}
              icon={appointment.icon}
              type={appointment.type}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
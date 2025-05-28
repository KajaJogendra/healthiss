import React, { useState } from 'react';
import { Calendar } from 'react-day-picker';
import { format } from 'date-fns';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';

const doctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Neurologist', image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 3, name: 'Dr. Emily Brown', specialty: 'Dentist', image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 4, name: 'Dr. David Wilson', specialty: 'Ophthalmologist', image: 'https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '02:00 PM', '03:00 PM', '04:00 PM'
];

export const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedDoctor, setSelectedDoctor] = useState<number>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [step, setStep] = useState(1);

  const handleBooking = () => {
    if (selectedDate && selectedDoctor && selectedTime) {
      alert(`Appointment booked with ${doctors.find(d => d.id === selectedDoctor)?.name} on ${format(selectedDate, 'PPP')} at ${selectedTime}`);
      setStep(1);
      setSelectedDate(undefined);
      setSelectedDoctor(undefined);
      setSelectedTime(undefined);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
        </DialogHeader>
        
        {step === 1 && (
          <div className="grid gap-4">
            <h3 className="font-medium">Select a Doctor</h3>
            <div className="grid gap-2">
              {doctors.map(doctor => (
                <div
                  key={doctor.id}
                  className={`p-4 rounded-lg border cursor-pointer ${
                    selectedDoctor === doctor.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => {
                    setSelectedDoctor(doctor.id);
                    setStep(2);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{doctor.name}</h4>
                      <p className="text-sm text-gray-500">{doctor.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4">
            <h3 className="font-medium">Select a Date</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                if (date) setStep(3);
              }}
              className="rounded-md border"
            />
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4">
            <h3 className="font-medium">Select Time Slot</h3>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map(time => (
                <button
                  key={time}
                  className={`p-2 text-sm rounded-lg border ${
                    selectedTime === time ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            <Button
              onClick={handleBooking}
              disabled={!selectedTime}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Confirm Booking
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
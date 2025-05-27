export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface CalendarDay {
  date: number;
  day: string;
  timeSlots: TimeSlot[];
}

export interface Appointment {
  id: string;
  title: string;
  doctor: string;
  time: string;
  duration: string;
  date: string;
  day: string;
  icon: string;
  type: 'dentist' | 'physio' | 'checkup' | 'eye' | 'cardio' | 'neuro';
}

export const calendarDays: CalendarDay[] = [
  {
    date: 25,
    day: 'Mon',
    timeSlots: [
      { time: '10:00', available: true },
      { time: '11:00', available: true },
      { time: '12:00', available: true }
    ]
  },
  {
    date: 26,
    day: 'Tues',
    timeSlots: [
      { time: '08:00', available: true },
      { time: '09:00', available: false },
      { time: '10:00', available: true }
    ]
  },
  {
    date: 27,
    day: 'Wed',
    timeSlots: [
      { time: '12:00', available: true },
      { time: '13:00', available: true }
    ]
  },
  {
    date: 28,
    day: 'Thurs',
    timeSlots: [
      { time: '10:00', available: true },
      { time: '11:00', available: false },
      { time: '14:00', available: true }
    ]
  },
  {
    date: 29,
    day: 'Fri',
    timeSlots: [
      { time: '14:00', available: true },
      { time: '15:00', available: true },
      { time: '16:00', available: true }
    ]
  },
  {
    date: 30,
    day: 'Sat',
    timeSlots: [
      { time: '12:00', available: false },
      { time: '14:00', available: true },
      { time: '15:00', available: true }
    ]
  },
  {
    date: 31,
    day: 'Sun',
    timeSlots: [
      { time: '09:00', available: false },
      { time: '10:00', available: true },
      { time: '11:00', available: true }
    ]
  }
];

export const featuredAppointments: Appointment[] = [
  {
    id: '1',
    title: 'Dentist',
    doctor: 'Dr. Cameron Williamson',
    time: '09:00-11:00',
    duration: '2 hours',
    date: '28 Oct 2021',
    day: 'Thursday',
    icon: '🦷',
    type: 'dentist'
  },
  {
    id: '2',
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Kevin Djones',
    time: '11:00-12:00',
    duration: '1 hour',
    date: '28 Oct 2021',
    day: 'Thursday',
    icon: '🧘‍♂️',
    type: 'physio'
  }
];

export const upcomingAppointments: Appointment[] = [
  {
    id: '3',
    title: 'Health checkup complete',
    doctor: 'Dr. Marcus Horizon',
    time: '11:00 AM',
    duration: '1 hour',
    date: '28 Oct 2021',
    day: 'Thursday',
    icon: '🩺',
    type: 'checkup'
  },
  {
    id: '4',
    title: 'Ophthalmologist',
    doctor: 'Dr. Esther Howard',
    time: '14:00 PM',
    duration: '1 hour',
    date: '28 Oct 2021',
    day: 'Thursday',
    icon: '👁️',
    type: 'eye'
  },
  {
    id: '5',
    title: 'Cardiologist',
    doctor: 'Dr. Robert Fox',
    time: '12:00 AM',
    duration: '1 hour',
    date: '30 Oct 2021',
    day: 'Saturday',
    icon: '❤️',
    type: 'cardio'
  },
  {
    id: '6',
    title: 'Neurologist',
    doctor: 'Dr. Jenny Wilson',
    time: '16:00 PM',
    duration: '1 hour',
    date: '30 Oct 2021',
    day: 'Saturday',
    icon: '🧠',
    type: 'neuro'
  }
];

export const activityData = [
  { day: 'Mon', appointments: [2, 1] },
  { day: 'Tues', appointments: [3, 1, 2] },
  { day: 'Wed', appointments: [1, 0, 2] },
  { day: 'Thurs', appointments: [2, 1, 2] },
  { day: 'Fri', appointments: [1, 0] },
  { day: 'Sat', appointments: [2, 1] },
  { day: 'Sun', appointments: [1, 2] }
];
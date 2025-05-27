export interface HealthStatus {
  id: string;
  name: string;
  status: 'healthy' | 'attention' | 'warning' | 'normal';
  date: string;
  position?: {
    top: string;
    left: string;
  };
  details?: string;
}

export const anatomyParts: HealthStatus[] = [
  {
    id: 'heart',
    name: 'Healthy Heart',
    status: 'healthy',
    date: '26 Oct 2021',
    position: {
      top: '34%',
      left: '46%'
    },
    details: 'Normal rhythm, no concerns'
  },
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'attention',
    date: '26 Oct 2021',
    details: 'Minor congestion detected'
  },
  {
    id: 'teeth',
    name: 'Teeth',
    status: 'normal',
    date: '26 Oct 2021',
    details: 'Regular cleaning recommended'
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'warning',
    date: '26 Oct 2021',
    details: 'Slight calcium deficiency'
  }
];

export const healthLogs = [
  {
    id: '1',
    title: 'Healthy Leg',
    status: 'healthy'
  }
];
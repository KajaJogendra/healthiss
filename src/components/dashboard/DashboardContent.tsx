import React from 'react';
import BodyHealthOverview from './BodyHealthOverview';
import Calendar from './Calendar';
import Activity from './Activity';

const DashboardContent: React.FC = () => {
  return (
    <div className="flex-1 p-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <BodyHealthOverview />
        </div>
        <div className="col-span-4">
          <Calendar />
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
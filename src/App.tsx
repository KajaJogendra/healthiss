import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/dashboard/DashboardContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default App;
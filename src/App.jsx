import React from 'react';
import Header from './components/Header';
import ClockDisplay from './components/ClockDisplay';
import AlarmControls from './components/AlarmControls'; 


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <ClockDisplay />
        <AlarmControls />
      </div>
    </div>
  );
}

export default App;

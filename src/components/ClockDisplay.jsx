import React, { useState, useEffect } from 'react';

const ClockDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center my-8">
      <p className="text-6xl font-bold text-gray-700">{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default ClockDisplay;

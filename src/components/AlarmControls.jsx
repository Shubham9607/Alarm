import React, { useState, useEffect } from 'react';
import alarmtone from '../assets/alarm.mp3';

const AlarmControls = () => {
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmMessage, setAlarmMessage] = useState("");
  const [isRinging, setIsRinging] = useState(false);

  useEffect(() => {
    let interval;
    if (alarmTime) {
      interval = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });

        if (currentTime === alarmTime && !isRinging) {
          setIsRinging(true);
          setAlarmMessage("Time's up!");
          playAlarm();
        }
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [alarmTime, isRinging]);

  const playAlarm = () => {
    const audio = new Audio(alarmtone);
    audio.play();
  };

  const handleAlarmInput = (event) => {
    const inputTime = event.target.value + ":00";
    setAlarmTime(inputTime);
    setIsRinging(false);
    setAlarmMessage(`Alarm set for ${event.target.value}`);
  };

  const stopAlarm = () => {
    setIsRinging(false);
    setAlarmMessage("Alarm stopped");
  };

  return (
    <div className="text-center my-4">
      <input
        type="time"
        onChange={handleAlarmInput}
        className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Set alarm time"
      />
      <button
        onClick={stopAlarm}
        className="ml-4 bg-red-500 text-white p-2 rounded-md"
        aria-label="Stop alarm"
      >
        Stop Alarm
      </button>
      
      {alarmMessage && (
        <div className="mt-4 text-red-500 text-xl font-bold">
          {alarmMessage}
        </div>
      )}

      {isRinging && (
        <div className="mt-4 text-green-500 font-semibold">
          Alarm is ringing!
        </div>
      )}
    </div>
  );
};

export default AlarmControls;

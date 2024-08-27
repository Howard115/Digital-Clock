import React, { useState, useEffect } from 'react';
import './App.css';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="digital-clock">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default DigitalClock;

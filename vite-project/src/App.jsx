import React, { useState, useEffect } from 'react';
import DigitalClock from './DigitalClock';

function App() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            <h1>Digital Clock</h1>
            <h2>{time.toLocaleTimeString()}</h2>
          <DigitalClock />
        </div>
    );
}

export default App;

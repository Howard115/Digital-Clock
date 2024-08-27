import React, { useState, useEffect } from 'react';
import DigitalClock from './DigitalClock';
import RandomNumberGenerator from './RandomNumberGenerator'; // {{ edit_5 }}
import RandomColorGenerator from './RandomColorGenerator'; // {{ edit_6 }}

function App() {
    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date()); // {{ edit_7 }}

    useEffect(() => {
        const timerId = setInterval(() => {
            const now = new Date(); // {{ edit_8 }}
            setTime(now);
            setDate(now); // {{ edit_9 }}
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            <h1>Digital Clock</h1>
            <h2>{time.toLocaleTimeString()}</h2>
            <h3>{date.toLocaleDateString()}</h3> {/* {{ edit_10 }} */}
            <RandomNumberGenerator /> {/* {{ edit_11 }} */}
            <RandomColorGenerator /> {/* {{ edit_12 }} */}
            <DigitalClock />
        </div>
    );
}

export default App;

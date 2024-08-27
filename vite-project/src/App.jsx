import React, { useState, useEffect } from 'react';

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
        </div>
    );
}

export default App;

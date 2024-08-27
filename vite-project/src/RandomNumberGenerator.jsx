import React, { useState } from 'react';

function RandomNumberGenerator() {
    const [randomNumber, setRandomNumber] = useState(0); // {{ edit_1 }}

    const generateRandomNumber = () => { // {{ edit_2 }}
        setRandomNumber(Math.floor(Math.random() * 100)); // Generates a random number between 0 and 99
    };

    return (
        <div>
            <h4>Random Number: {randomNumber}</h4> {/* {{ edit_3 }} */}
            <button onClick={generateRandomNumber}>Generate Random Number</button> {/* {{ edit_4 }} */}
        </div>
    );
}

export default RandomNumberGenerator;

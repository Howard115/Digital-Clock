import React, { useState } from 'react';

function RandomColorGenerator() {
    const [color, setColor] = useState('#000000'); // {{ edit_1 }}

    const generateRandomColor = () => { // {{ edit_2 }}
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Generates a random hex color
        setColor(randomColor);
    };

    return (
        <div>
            <h4 style={{ color }}>Random Color: {color}</h4> {/* {{ edit_3 }} */}
            <button onClick={generateRandomColor}>Generate Random Color</button> {/* {{ edit_4 }} */}
        </div>
    );
}

export default RandomColorGenerator;

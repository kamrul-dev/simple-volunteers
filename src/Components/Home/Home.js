import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [count, setCount] = useState(0);
    const number = 60;

    const increaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h4>My Number: {number}</h4>
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Click Me</button>
            <p><small>Double Count: {count * 2}</small></p>
        </div>
    );
};

export default Home;
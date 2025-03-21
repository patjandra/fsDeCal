import React, { useState, useEffect } from "react";

const NotHomePage = () => {
    const [counter, setCounter] = useState(0);

const decrease = () => {
    if (counter > 0) {
        setCounter(counter - 1)
    }
}

    useEffect(() => {
        if (counter > 5) {
            alert("You passed 5!")
        }
    }, [counter]);

    return (
        <div>
            <h1>Not Home Page</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <button onClick={(decrease)}>Decrease</button>
        </div>
    );
};

export default NotHomePage;
import React, {useState} from "react";
import './Counter.css'

const Counter = ({initialCount}) => {

    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((prev)=> prev + 1);
    };

    const decrement = () => {
        setCount((prev) => prev - 1);
    };

    const restart = () => {
        setCount(0);
    };

    const switchSigns = () => {
        setCount((prev) => prev * -1);
    };


    return (
        <div className="container">
            <div className="subContainer">
                <h1>
                    Count: 
                </h1>
                <h3 className="count" data-testid="count">{count}</h3>
                <div className="buttonsContainer">
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={restart}>Restart</button>
                    <button onClick={switchSigns}>SwitchSigns</button>
                </div>
            </div>
            
        </div>
    );
}

export default Counter;

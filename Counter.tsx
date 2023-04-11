import React=require("react");


export function Counter() {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}> click me!</button>
        </div>
    )
}
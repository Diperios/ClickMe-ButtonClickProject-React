import React = require("react");


export function DumbCounter({count, handleClick}) {
  return (
      <div>
          <p>Count: {count}</p>
          <button className='click-button' onClick={handleClick}> click me!</button>
      </div>
  )
}
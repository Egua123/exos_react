import { useState } from 'react'
import React from 'react'
import "../style.css"

function Counter() {
  const [ count, setCount] = useState(0)
  return (
    <div className="counter-container">
        <div className="counter-display">{count}</div>
        <div className="counter-buttons">
            <button className="counter-btn btn-increment" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="counter-btn btn-decrement" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="counter-btn btn-reset" onClick={() => setCount(0)}>Reset</button>
        </div>
    </div>
  )
}

export default Counter

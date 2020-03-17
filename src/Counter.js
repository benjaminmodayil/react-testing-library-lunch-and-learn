import React, {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p>
        Count: <span data-testid="count">{count}</span>
      </p>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        subtract
      </button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>add</button>
    </div>
  )
}

export default Counter

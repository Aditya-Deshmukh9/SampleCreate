import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
const [count, setCount]= useState(0)

const increase = () => {
    setCount((preValue) => preValue + 1)
}
const decrease = () => {
    setCount((preValue) => preValue - 1)
}
const clear = () => {
    setCount((preValue) => preValue * 0)
}

  return (
    <div className="app-container"> {/* Wrap your content in a container */}
    <h1>Counter App</h1>
    <p>Count {count}</p>
    <div>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
    <button onClick={clear}>clear</button>
    </div>
  </div>
  )
}

export default App

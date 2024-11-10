import { useState } from "react"
import './Counter.css'

function Counter() {

  let [count, setCount] = useState(0)

  function increase() {

    count++
    setCount(count)
  }

  return (

    <div className="counter-box">
      <h1 className="heading">Counter - {count}</h1>
      <button className="btn" onClick={increase}>count</button>
    </div>
  )
}

export default Counter;
import { useState } from "react"
import './Hello.css'

function Hello(){
  
    let color = ['lightgreen' , 'lightblue' , 'lightcoral' , 'yellow' , 'green' , 'orange' , 'lightpink'];
    let [num , setNum] = useState(0)
  
    function changeColor(){
      num++;
      setNum(num)
    }
      return(
      <div className="hello-box" style = {{backgroundColor: color[num % color.length]}}>
        <button className="color-btn" onClick={changeColor}>Change color</button>
        
      </div>
    )
  }

  export default Hello;
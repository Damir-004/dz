import React,{useState, useRef} from 'react';
import './App.css'

function App() {
  const [count, setCount]=useState(0);
  const [timer, setTimer]=useState(null);
  const answer = useRef(null);
  const changeCount = (value) =>{
    if(value>0){
        answer.current.style.color = "green"
    }else{
        answer.current.style.color = "red" 
    }
    const time = setInterval(() =>{
        setCount((count) => count+value)
    },100)
    setTimer(time);
  }
  const clearTimer = () =>{
    clearInterval(timer)
    answer.current.style.color="black"
  }

  return(
    <div className='counter'>
        <button onMouseDown={()=> changeCount(1)} onMouseUp={clearTimer}>+</button>
        <p ref={answer}>{count}</p>
        <button onMouseDown={()=> changeCount(-1)} onMouseUp={clearTimer}>-</button>
    </div>
  )
}
export default App
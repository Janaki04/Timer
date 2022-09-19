import React,{  useEffect, useState} from 'react'
import './style.css'

let value

function Timer() {
const[count,setCount]=useState(0)
const [start,setStart]=useState(0)
const[rst,setRst]=useState(false)
const[stp,setStp]=useState(false)

const startHandler=()=>{
    setStart(1);
    setRst(false)
    setStp(false)
} 
useEffect(() => {
    if (start) {
      value = setInterval(()=>{
        setCount(count=>count+1)
      },1000);
    }
  }, [start]);


const Stop=()=>{
clearTimeout(value)
setStart(false)
    setRst(false)
    setStp(true)
}

const Reset=()=>{
    setCount(0)
    setRst(true)
    setStart(false)
    setStp(false)

}



return (
    <div className='box'>
        

       {count}<br/>

     <button onClick={startHandler} disabled={start}>Start</button>
     <button onClick={Stop} disabled={stp}>Stop</button>
     <button onClick={Reset} disabled={rst}>Reset</button>

    </div>
  )
}

export default Timer
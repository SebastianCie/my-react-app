import React, {useState} from 'react'

function Counter(){
    const currentDate = new Date();
const [count,setCount]=useState(0);
//updated function setCount(c=>c+1) anstatt setCount(count+1)
const increment =()=>{setCount(c=>c+1); setCount(c=>c+1)};
const decrement =()=>{setCount(c=>c-1)};
const reset=()=>{setCount(0); console.log(currentDate.toLocaleString("de-DE")+' - counter zurückgesetzt')}

return (
    <div className='counter-container'>
        <p>{count}</p>
    <button onClick={increment}>erhöhen</button>
    <button onClick={decrement}>senken</button>
    <button onClick={reset}>zurücksetzen</button>
    </div>
)

}



export default Counter
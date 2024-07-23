import React, {useState, useEffect, useRef} from "react";

export default function Stopwatch()
{
    const [time, setTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    const [laps, setLaps] =useState([]);
    const [lapnr,setLapnr] =useState(0);
    

    useEffect(()=>{
if(isRunning){
    //setInterval(callback,10//zeit)
  intervalIdRef.current = setInterval(()=>{
        setElapsedTime(Date.now() - startTimeRef.current);
    }, 10);
}
return ()=>{
clearInterval(intervalIdRef.current);
}
},[isRunning]);

function start(){
setIsRunning(true);
startTimeRef.current = Date.now()-elapsedTime;
console.log(startTimeRef.current);
}

function stop(){
setIsRunning(false);
}

function reset(){
    setElapsedTime(0);
    setIsRunning(false);
}

function handleAddLap(){
   const formatedtimelap=formatTime();
   //const lastlap =lapnr === 0 ? 0 : laps[lapnr];
   var i=lapnr+1;
   console.log(`index hardcoded ${laps[lapnr-0]}`)
   //console.log(`ls value of a laps index ${lapnr}`);
   console.log(`lap index direct ${laps[i-0]}`);
   const singleLapTime=formatedtimelap - formatedtimelap
   setLaps(l=>[...l, formatedtimelap]);
   setLapnr(lapnr+1);

}

    function formatTime()
{
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) /10);
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");
    return elapsedTime;//`${hours}:${minutes}:${seconds}:${milliseconds}`;
}

    return(
        <div className="stopwatch-container">
            <h1>Stoppuhr</h1>
             <div className="clockdisplay">
              <span id="stoptime">{formatTime()}</span>
             </div>
                <div className="controls">
                <button onClick={start} className="start-button">START</button>
                <button onClick={stop} className="stop-button">STOP</button>
                <button onClick={reset} className="reset-button">RESET</button>
                <button onClick={handleAddLap} className="lap-button">LAP</button>
                </div>
                <ol>
            {laps.map((lap, index) =>
            <li key={index}>
                {lap} {laps[index]-laps[index-1]}
            </li>)}
                </ol>

        </div>
    )
}
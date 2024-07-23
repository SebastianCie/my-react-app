import React,{useState, useEffect, Component} from "react"
export default function Effect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    //useEffect(function,[Component]); 
    //ohne ",[Component]" =>useEffect jedes mal, wenn die componente upgedated wird, wird der title upgedated.
    //wenn die componente ",[]" leer ist, wird nur beim refreshen upgedated, wenn die componente upgedated wird, dann nicht.

    // 1. useEffect(() => {})           //Runs after every re-render (of the component)
    // 2. useEffect(() => {}, [])       //Runs only on mount
    // 3. useEffect(() => {}, [value])  //Runs on mount, when value change

    useEffect(()=>{
        document.title =`Count: ${count} ${color}`
    },[count, color]
    );

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
        </>
    );

}
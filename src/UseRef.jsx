// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-render when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations and Transitions
//            3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from "react"

export default function UseRef()
{
   // let[number, setNumber] = useState(0);
    const inputRef1 =useRef(null);
    const inputRef2 =useRef(null);
    const inputRef3 =useRef(null);
    //console.log(ref);
   
    useEffect(() =>{
        console.log("componente wurde gerendert.")
        console.log(inputRef1);
        console.log(inputRef2);
        console.log(inputRef3);
    });

    function handleClick1()
    {
       // setNumber(n => n + 12);
       // console.log(`Das ist meine Zahl: ${number}`);
      // ref.current++; //ref.current=ref.current+1;
      inputRef1.current.focus();
      inputRef1.current.style.backgroundColor ="yellow";
      inputRef2.current.style.backgroundColor ="";
      inputRef3.current.style.backgroundColor ="";
       //console.log(ref.current);
    }

    function handleClick2()
    {
       // setNumber(n => n + 12);
       // console.log(`Das ist meine Zahl: ${number}`);
      // ref.current++; //ref.current=ref.current+1;
      inputRef2.current.focus();
      inputRef2.current.style.backgroundColor ="yellow";
      inputRef1.current.style.backgroundColor ="";
      inputRef3.current.style.backgroundColor ="";
       //console.log(ref.current);
    }

    function handleClick3()
    {
       // setNumber(n => n + 12);
       // console.log(`Das ist meine Zahl: ${number}`);
      // ref.current++; //ref.current=ref.current+1;
      inputRef3.current.focus();
      inputRef3.current.style.backgroundColor ="yellow";
      inputRef1.current.style.backgroundColor ="";
      inputRef2.current.style.backgroundColor ="";
       //console.log(ref.current);
    }
    return(
        <div>
        <button onClick={handleClick1}>Click me1!</button>
        <br/><input ref={inputRef1}/>
        <br/>
        <button onClick={handleClick2}>Click me2!</button>
        <br/><input ref={inputRef2}/>
        <br/>
        <button onClick={handleClick3}>Click me3!</button>
        <br/><input ref={inputRef3}/>
        </div>
    )
}
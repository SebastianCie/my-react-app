import React, {useState} from 'react'

function MyComponent(){

    const [vorname, setName] = useState("Guest");
    const [alter, setAlter] =useState(30);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName =()=>{
        setName("Sebastian");
    }
    const alterErhoehen =()=>{setAlter(alter+1)}
    const toggleEmployedStatus = () =>{setIsEmployed(!isEmployed)}
    return (<div>
        <p>Name: {vorname}</p>
        <p>Alter: {alter}</p>
        <p>Is employed: {isEmployed ? "Yes":"No"}</p>
        <button onClick={updateName} >Set Name</button>
        <button onClick={alterErhoehen}>Alter erhöhen</button>
        <button onClick={toggleEmployedStatus}>Arbeitnehmestatus</button>
    </div>)
}

export default MyComponent
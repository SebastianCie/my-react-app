import React, {useState} from "react";
import TrashIcon from "./assets/trash.svg"
export default function UpdateObjectArray()
{
    const [cars,setCars]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");


    function handleAddCar(){
        const newCar={year:carYear, 
                      make:carMake, 
                      model:carModel}
        //document.getElementById("carInput").value;
       // document.getElementById("carInput").value="";
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }     

    function handleRemoveCar(index){
        setCars(cars.filter((_, i)=> i !== index))  
    } 

    function handleYearChange(event){
        setCarYear(event.target.value);
    }     
        function handleMakeChange(event){
            setCarMake(event.target.value);    
    } 
        function handleModelChange(event){
            setCarModel(event.target.value);       
    }  

    return(
        <div className="border-component">
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car,index)=>
                <li key={index} onDoubleClick={() =>handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model} <img onClick={()=>handleRemoveCar(index)} className="del-button" src={TrashIcon} alt="React Logo" />
                </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}></input><br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"></input><br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter model make"></input><br/>
            <button onClick={handleAddCar}>Add car</button>
            </div>
    );
}
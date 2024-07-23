import React , {useState} from "react";

export default function UpdateArray()
{
    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);
    const [result, setResult] = useState(null);

    function handelAddFood()
    {
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFoods(f=>[...f, newFood]);
    }
    function handleRemoveFood(index) //= async () => 
    {
        setFoods(foods.filter((_,i)=>i !== index))
    } 
    return(
       <div className="border-component">
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) =>
            <li key={index} onClick={()=>handleRemoveFood(index)}>
                {food}
            </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={handelAddFood}>Add food</button>
       </div>
    );
}
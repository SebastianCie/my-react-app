import React, {useState} from "react";
import TrashIcon from "./assets/trash.svg"
import UpIcon from "./assets/up.svg"
import DownIcon from "./assets/down.svg"
export default function ToDoList(){

    const [tasks,setTasks]=useState(["dothis1","do2","do3"]);
    const [newTask, setNewTask]=useState("");

    function handleInputChange(event){
             setNewTask(event.target.value);
    }

    function addTask(){  
        if(newTask.trim() !=="" )
            {

            setTasks(t=>[...t,newTask]);
            setNewTask("");
            }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_,i) => i !== index );
        //updatedTask beinhaltet alle arraywerte ausser dem gelöschten.
        console.log(updatedTask);
        setTasks(updatedTask);
    }

    function moveTaskUp(index){
        if (index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = 
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if (index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = 
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
            />
         <button onClick={addTask}>ADD</button>   
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key="index"> 
            <span>
                {task} 
            </span>
            <img onClick={()=>deleteTask(index)} className="del-button" src={TrashIcon} alt="trash icon" />
            <img onClick={()=>moveTaskUp(index)} className="moveup-button" src={UpIcon} alt="up icon" />
            <img onClick={()=>moveTaskDown(index)} className="movedown-button" src={DownIcon} alt="down icon" />
            </li>        
        )}
        </ol>
    </div>
    )
}
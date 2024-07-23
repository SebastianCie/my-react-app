import Button from "./Button/Button.jsx";
import Button2 from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from './UserGreeting.jsx'
import Buttonevent from "./Button/Buttonevent.jsx";
import List from "./List.jsx";
import {useState ,useEffect} from "react";
import Rest from "./Rest.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import Change from "./Change.jsx";
import ColorPicker from "./ColorPicker.jsx";
import UpdateObject from "./UpdateObject.jsx";
import UpdateArray from "./UpdateArray.jsx";
import UpdateObjectArray from "./UpdateObjectArray.jsx";
import ToDoList from "./ToDoList.jsx";
import Effect from "./Effect.jsx";
import Wihi from "./Wihi.jsx";
import DigitalClock from "./DigitalClock.jsx";
import ComponentA from "./ComponentA.jsx";
import UseRef from "./UseRef.jsx";
import Stopwatch from "./Stopwatch.jsx";
function App() {

  const fruits = [{id:1,name:"apple", calories: 95},
    {id:2,name:"orange", calories: 45},
    {id:3,name:"banana", calories: 105},
    {id:4,name:"coconut", calories: 159},
    {id:5,name:"pineapple", calories: 37}];

  const vegetables = [{id:6,name:"potatoes", calories: 110},
    {id:7,name:"celery", calories: 15},
    {id:8,name:"carrots", calories: 25},
    {id:9,name:"corn", calories: 63},
    {id:10,name:"broccoli", calories: 50}];

    return(
      <>
      <Stopwatch/>
      <UseRef/>
      <ComponentA/>
      <DigitalClock/>
      <Wihi/>
      <Effect/>
      <table>
      <tbody>
      <tr>
    <td><ToDoList/></td>
    <td><UpdateObjectArray/></td>
    <td><UpdateArray/></td>
    <td><UpdateObject/></td>
  </tr>
  </tbody></table>
      {/* <ToDoList/>
      <UpdateObjectArray/>
      <UpdateArray/> 
      <UpdateObject/>*/}
      <ColorPicker/>
      <Change/><br /><br />
      <Counter/><br /><br />
      <MyComponent/><br /><br />
      <Buttonevent/>
    
      <UserGreeting isLoggedIn={true} userName="Sebastian"/><br /><br />
      {fruits.length>0 && <List items={fruits} category="Fruits"/> }
      {vegetables.length>0 && <List items={vegetables} category="Vegetables"/> }
      <Button/><br /><br />
      <Button2/><br /><br />
      <Student name="Sebastian" age={44} isStudent={false}/> 
      <Student name="Spongebob" age={18} isStudent={true}/> 
      <Student /> 
      </>

    ); 
    }

    export default App
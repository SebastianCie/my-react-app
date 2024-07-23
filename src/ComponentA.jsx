import ComponentB from "./ComponentB";
import React, {useState, createContext} from "react";

//UserContext
export const UserContext =createContext();
export default function ComponentA(){

    //property (prop) drilling wenn man über parameter von einer componente zur anderen übergibt
    //besser ist es aber mit useContext() zu arbeiten
    //useContext() = React Hook - die erlaubt werte zwischen mehrere 
    //componenten leveln (comp1-2-3-4) zu übertragen ohne über jeden einzelnen level zu gehen
    const[user,setUser]=useState("Basti");
    return (
<div className="box">
    <h1>ComponentA</h1>
    <h2> Hello {user}</h2>
    <UserContext.Provider value={user}>
    </UserContext.Provider>
    <ComponentB/>
</div>
    );
}
//<ComponentB user={user}/>
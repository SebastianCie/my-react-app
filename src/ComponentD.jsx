import React, {useContext} from "react";
import { UserContext } from "./ComponentA";
export default function ComponentD(){

    return (
<div className="box">
    <h1>ComponentD</h1>
    <h2>Bye {useContext(UserContext)}</h2>
</div>
    );
}
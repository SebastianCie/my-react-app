import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";
import { useContext } from "react";
export default function ComponentC(){



    return (
<div className="box">
    <h1>ComponentC</h1>
    <h2>Hello again {useContext(UserContext)}</h2>
    <ComponentD/>
</div>
    );
}
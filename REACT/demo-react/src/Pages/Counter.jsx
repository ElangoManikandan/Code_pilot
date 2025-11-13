import { useState } from "react";

export default function Counter(){
    let[count,setCount]=useState(0)
    function increment(){
        setCount(prev=>{
            const updated=prev+1;
            console.log(updated);
            return updated; 
        })

    }
    let login =true
    return(
        <div className="counter" style={{display:"block"}}>
            <p>Count is {count}</p>
            {login ?<button onClick={increment}>Increment Count</button>: <h1>You have to login</h1>}
        </div>
    )
}
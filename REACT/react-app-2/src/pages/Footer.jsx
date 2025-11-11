import { useState } from "react"

export default function Footer(){
    let [bonus,setBonus]=useState(1000);
    
    function increase(){
        bonus+=1000;
        setBonus(bonus)
    }
    return (<>
    <h1>Bonus: Rs.{bonus}</h1>
    <div className="btn">
    <button  onClick={increase}>
        Increase Bonus
    </button>
    </div>
    <p>Copyrights @2025</p>
    </>)
}
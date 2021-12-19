import react from "react";
import {useState} from "react";




function CounterComponent(probs) {
    const [number,setNumber]=useState(0);

    
    const increment=()=>{
        setNumber(number +1);

    }
    const decrement=()=>{
        setNumber(number -1);
    }
    

    return (
        
      <div className={"d1"} >

      
          <button className={"d3"} onClick={decrement}>{probs.Nkhz}</button>
          <p className={"d2"}>{number}</p>
          <button className={"d3"} onClick={increment}>{probs.Nafz}</button>
 
        
       
      </div>
    );
  }
  
  export default CounterComponent;
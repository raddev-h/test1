

import CounterComponent from "./counterComponent";




function App() {
  return (
    <div >

      
      <h1>React by Rad</h1>
     <CounterComponent Nafz="+" Nkhz="-"/>
     <CounterComponent Nafz="Increment" Nkhz="Decrement"/>
     <br>
     </br>
     
     <h2 className={"h1"}> Do You Want To Learn More ?<i>==$1000</i> </h2> 
     <div className={"n"}><button onClick={()=>{
       alert("Congratulations");
     }} className={"btn"}><span>Pay</span></button></div>
   
   
 
 


     
    </div>
  );
}

export default App;

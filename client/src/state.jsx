import { useState } from "react";
function init(){
    console.log("init was called");
    return Math.random();
}
function State() {
   const [count,setcount]=useState(init);
   console.log(`state was re-rendered`);
   function incCount(){
    setcount((count)=>{
         return count+1;
   });
    setcount((count)=>{
        return count+1;
    })
   }
    return(
      <div>
        <p>This is a event listner having name onClick</p>
        <button onClick={incCount}>count={count}</button>
      </div>
    )
  }
  
  export default State;
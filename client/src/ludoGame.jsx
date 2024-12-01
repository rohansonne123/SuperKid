import { useState } from "react";
export default function Ludo(){
    let [ludo,setLudo]=useState({blue:0,red:0,yellow:0,green:0});
    let [arr,setArr]=useState(["initial moves"]);
    function callblue(){
        setLudo((preValue)=>{
            return {...preValue,blue: preValue.blue+1};
        });
        setArr((prearr)=>{
            return [...prearr,"blue move"];
        });
        console.log(ludo.blue);
    }
    function callred(){
        setLudo((preValue)=>{
            return {...preValue,red: preValue.red+1};
        });
        console.log(ludo.red);
    }
    function callyellow(){
        setLudo((preValue)=>{
            return {...preValue,yellow: preValue.yellow+1};
        });
        console.log(ludo.yellow);
    }
    function callgreen(){
        setLudo((preValue)=>{
            return {...preValue,green: preValue.green+1};
        });
        console.log(ludo.green);
    }
    return(
        <div>
            <h2>{arr}</h2>
            <h3>count of blue {ludo.blue}</h3>
            <button onClick={callblue} style={{backgroundColor:"blue"}}>+1</button>
            <h3>count of red {ludo.red}</h3>
            <button onClick={callred} style={{backgroundColor:"red"}}>+1</button>
            <h3>count of green {ludo.green}</h3>
            <button onClick={callgreen} style={{backgroundColor:"green"}}>+1</button>
            <h3>count of yellow {ludo.yellow}</h3>
            <button onClick={callyellow} style={{backgroundColor:"yellow"}}>+1</button>
        </div>
    )
}
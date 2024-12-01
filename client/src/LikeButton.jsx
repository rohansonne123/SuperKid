import { useState } from "react";
export default function likebutton(){
    let [isLiked,setIsLiked]=useState(false);
    let [count,setCount]=useState(0);
    let styleBTN={color:"red"};
    function incCount(){
      setIsLiked(!isLiked);
      setCount(count+1);
      console.log(`count was ${count}`);
    }
    return(
        <p onClick={incCount}>{isLiked?<i style={styleBTN} class="fa-solid fa-heart"></i>:<i class="fa-regular fa-heart"></i>}</p>
    )
}
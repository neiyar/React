import { useState} from "react"
import React from "react"

const Test=()=>{
    const[count,setcount]=useState(0)

    const sum=(a,b)=>{
    setcount(a+b)
     
    }
   

    return(
        <div>
           <h1>Naiyer subhani</h1> 
           <h2>this is my new experience</h2>
           <h1>{count}</h1>
           <button onClick={()=>sum(3,5)}> sum</button>
           <Web/>
        </div>
    )
}


  function Web(){
    return(
        <div>
            <p>Neiyar Subhani</p>
        </div>
    )
}

export default Test;

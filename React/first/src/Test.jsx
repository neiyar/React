import { useState } from "react"


const Test=()=>{
    const[count,setcount]=useState(0)

    const sum=(a,b)=>{
    setcount(a+b)
     
    }
   

    return(
        <div>
           <h1>Naiyer subhani</h1> 
           <h2>this id my new experience</h2>
           <h1>{count}</h1>
           <button onClick={()=>sum(3,5)}> sum</button>
        </div>
    )
}

export default Test;

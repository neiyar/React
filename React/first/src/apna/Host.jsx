import React from "react";

const Host=()=>{
    
    return(
        <>
        
        <h1>Name.</h1>
        <div>
            <h1>hello how are you!{sum()}</h1>
            
            < Fruit/>
        </div>

       </> 
    )
}

function Fruit (){
    return(
    <h1> Apple </h1>
    )
}

function sum(){
    return 10+10
}

export default Host

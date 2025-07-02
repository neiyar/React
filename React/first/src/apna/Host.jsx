import React from "react";

const Host=()=>{
    
    return(
        <>
        
        <h1>Name.</h1>
        <div>
            <h1>hello how are you!{sum()}</h1>
            
            < Fruit/>
            <Animal/>
        </div>

       </> 
    )
}

function Fruit (){
    return(
        <div>
            <h1> Apple </h1>
            <h1> Banana</h1>
            <h1>Mango</h1>
        </div>
        
    )
}

function sum(){
    return 10+10
}


function Animal(){
    return(
        <div>
            <h1> Monkey </h1>
        </div>
    )
}

export default Host

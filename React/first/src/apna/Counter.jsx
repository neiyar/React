import React from "react"

function User({users}) {
    return (
        <div> 
            <hr/>
            <h1>props in React js</h1>
            <h2>Name: {users.name}</h2>
            <h3>Age: {users.age}</h3>
            <h4>Email: {users.email}</h4>
        </div>
    )


}
/*import {useState} from "react"
const Counter=()=>{
    const [count,setCount]=useState(0);
    const [rCounter,setRCounter]=useState(1200)
    return(
        <div className="">
            <h1>Counter:{count}</h1>
            <h2>R Counter:{rCounter}</h2>
            <button onClick={()=>setCount(count+1)}>update Counter</button>
            <buttom onClick={()=>setRCounter(rCounter-1)}>change RCounter</buttom>
        </div>
    )
}

*/
export default User

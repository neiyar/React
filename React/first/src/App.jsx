import React, { useState } from "react"
import './App.css'
import viteLogo from '/vite.svg'
import Test from './Test'
import Host from "./apna/Host"
import Jamia from "./apna/jamia"
import Counter from "./apna/Counter"
import User from "./apna/Counter"


function App() {
  let userObject= {
    name : "Akhtar",
    age : "20",
    email : "subhani@gmail.com"

  }
  let userObject2 = {
    name: "Neiyar",
    age: 20,
    email: "neiyar@gmail.com"
  }
   let userObject3 = {
    name: "Vani",
    age: 19,
    email: "vani01901@gmail.com"
  }
  let userObject4 = {
    name: "Arham",
    age: 12,
    email: "arham@gmail.com"
  }

  let collageNames=(  IIT)


  
  
  return(
    <div>
      <h1>props in React js</h1>
      <User users={userObject} />
      <User users={userObject2} />
      <User users={userObject3} />
      <User users={userObject4} />
  
    </div>
  )

  //multiple condition in react js
/*const [count,setCount]=useState(0)
return(
  <div>
    <h1>multiple condition in React js</h1>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count+1)}>Counter</button>
    {
      count==0?<h1>condition 0</h1>
      :count==1?<h1>Condition 1</h1>
      :count==2?<h1>condition 2</h1>
      :<h1>Other Condition</h1> 
    }
  </div>
) 



  /*const [display,setDisplay]=useState(true)
  return(
    <>
    <div>
      <h1>Toggle in React js</h1> 
      {
        display?<h1>Akhtar</h1>:<h1>neiyar</h1> 
      }
      
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </div>
    </>
  ) */
  






  /*
  const [fruit, setFruit] = useState("Apple");
  const [count, setCount] = useState("Apple");
  const handleFruit = () => {
    setFruit("Mango")
  }
  return (
    <div>
      <h1> State in React js</h1>
      <h1>{fruit}</h1>
      <buttom onClick={handleFruit}>change fruit name </buttom>
      < Counter />
    </div>
  )
/*
  function callFun(){
     alert ("this is function call")
     
   }
   const fruit=(name) =>{
     alert(name)
   }
   return (
     <div>
       <h1>Event the Function </h1>
       <button onClick={()=>fruit("Banana")}>Click</button>
       <button onClick={()=> fruit("Apple")}>Apple</button>
     </div>
   )
   

  return (
    <div className="rootOther">Hello world </div>
  )

  const userName = "tech"
  var a = 20;
  var b = 30;
  //path="https://www.bing.com/images/search?view=detailV2&ccid=mCgUxdBE&id=5CD2BD107B403F4CC4BB8FE73F63D5B30FE311E7&thid=OIP.mCgUxdBEfECvh43WhuqYbwHaE6&mediaurl=https%3A%2F%2Fcdn.britannica.com%2F02%2F152302-050-1A984FCB%2FAfrican-savanna-elephant.jpg&exph=1062&expw=1600&q=elephant&simid=607993720444252679&form=IRPRST&ck=1071D4FC28F046F42022F171B4BD8687&selectedindex=1&itb=0&cw=1339&ch=664&ajaxhist=0&ajaxserp=0&vt=0"

  function fruit() {
    return "Apple"

  }

  function sum(a,b){
    return a+b
  }

  function operation(a,b,op){
    
    if (op=="+"){
      return a+b;
      }
      else if(op=="-"){
        return a-b;
      }
      else{
        return a*b;
      }

    }
  
  return (
    <>
      <div>
        <h1>{name?name:"user not found"}</h1>
        <h1>{50 + 60 + 1520}</h1>
        <h1>{a * b} </h1>
        <h1>{fruit()}</h1>
        <h1>{sum(5,10)}</h1>
        <h1>{operation(20,10,"+")}</h1> 
       
        <button onClick={() => alert("Denger")}> Click</button>

      </div>
    </>
  )


  
    return (
     
     <div>
      <h1> this is react </h1>
      <Test/> 
      <Host/>
      
    /* <Jamia /> 
     <Test2/> */ 
   /*   
      <button onClick={()=>setCounter(counter+1)}>
        increase counter Val
      </button>
     </div>
    ) */
 
}
export default App

import React, { useState } from "react"
import './App.css'
import viteLogo from '/vite.svg'
import Test from './Test'
import Host from "./apna/Host"
import Jamia from "./apna/jamia"
import Counter from "./apna/Counter"

function App() {
  const [display,setDisplay]=useState(true)
  return(
    <>
    <div>
      <h1>Toggle in React js</h1> 
      {
        display?<h1>Akhtar</h1>:<h1>neiyar</h1> 
      }
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsjbit.edu.in%2Fnaac-logo-250x250%2F&psig=AOvVaw0PCleWc2LYxnPdjPoHQCif&ust=1751800505200000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMimjMrLpY4DFQAAAAAdAAAAABAE" alt="" width="100px" />
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </div>
    </>
  )






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

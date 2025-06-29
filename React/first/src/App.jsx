import React, { useState } from "react"
import './App.css'
import viteLogo from '/vite.svg'
import Test from './Test'
import Host from "./apna/Host"
function App() {
  const [counter, setCounter]=useState(0)


  return (
    
   <div>
    <h1> this is react </h1>
   [-] <Test/> 
    <Host/>
   </div>
  )
}

export default App

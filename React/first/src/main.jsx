import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './Test.jsx'
import Test2 from './apna/Test2.jsx'
import Jamia from './apna/jamia.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <Test/>
    <Test2/> 
    <Jamia/>
  </StrictMode>,
)


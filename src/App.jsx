import React from 'react'
import NavBar from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Body } from './components/body'
function App() {
  return (
    <>
    <div className=' w-full h-screen'>
    <NavBar />
    <SideBar />
    <div className=' absolute top-[100px] w-90 left-[20%] '>
    <Body />
    </div>
    </div>
    </>
    
   
    
    
  )
}

export default App

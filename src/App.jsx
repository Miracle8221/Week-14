import React from 'react'
import NavBar from './components/NavBar'
import { SideBar } from './components/SideBar'
function App() {
  return (
    <>
    <NavBar />
    
    <div className='bg-indigo-600 w-full h-screen'>
    <SideBar />
    </div>
    </>
  )
}

export default App

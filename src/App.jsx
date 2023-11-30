import React from 'react'
import NavBar from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Body }  from './components/Body'
import Card from './components/Card'
import  Footer  from './components/Footer'
function App() {
  return (
    <>
    <div className=' w-full h-screen'>
    <NavBar />
    <SideBar />
    <div className=' absolute top-[100px] w-90 left-[20%] '>
    <Body />
    <div className='flex justify-center gap-7 mt-5'>
    <Card product="Basic" price="50" members="2 teams members" storage="20GB Cloud Storage"/>
    <Card product="Standard" price="100" members="3 teams members" storage="50GB Cloud Storage"/>
    <Card product="Premium" price="200" members="5 teams members" storage="100GB Cloud Storage"/>
    </div>
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default App

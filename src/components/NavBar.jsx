import React from 'react'
import Button from './Button.jsx';

function NavBar() {
    let links = [
        {name:'HOME',link:'/'},
        {name:'SERVICE',link:'/'},
        {name:'ABOUT',link:'/'},
        {name:'CONTACT',link:'/'},
    ];
  return (
   <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex bg-white items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
            <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <i class='bx bxl-react'></i>
            </span>
            React
        </div>
        <ul className='md:flex md:items-center md:pb-0 pb-12'>
            {
               links.map((link)=>(
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                </li>
               )) 
            }
            <Button>
                GET STARTED
            </Button>
        </ul>
    </div>
   </div>
                

)
}
export default NavBar






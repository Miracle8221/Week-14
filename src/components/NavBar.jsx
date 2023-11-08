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
       <div className='shadow-md w-full fixed top-0 left-0 z-20'>
        <div className='md:flex bg-white items-center justify-end py-4 md:px-10 px-7'>
            <ul className='md:flex md:items-center '>
                {
                   links.map((link)=>(
                    <li className=' text-xl '>
                        <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500 px-7'>{link.name}</a>
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






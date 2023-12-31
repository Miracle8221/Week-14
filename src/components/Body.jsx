import React from 'react'
import image from "../assets/image1.jpg"

function Body () {
  return (
    <div>
      <div className='font-bold'>
          <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
          <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
      </div>
          <img className="rounded-full w-96 h-96 cursor-pointer filter grayscale transition-all duration-300 shadow-md shadow-black hover:grayscale-0" src={image} alt="image description"/>
    </div>
  )
}

export default Body    


import React from 'react'
import {Link} from 'react-router-dom'


function Navigation() {
  return (
    <>
        <div className=' flex items-start justify-center'>
        <div className="flex gap-5 px-10 py-5 w-fit rounded-full bg-purple-400 text-white mt-4 ">
    
        <a href="#aboutme">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contactme">Contact</a>
      </div>
       </div>
    </>
  )
}

export default Navigation
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <div className=' flex items-start justify-center'>
    <div className="flex gap-5 px-10 py-5 w-fit rounded-full bg-purple-400 text-white mt-4 ">
      
      <NavLink
          to='/'
          className={({ isActive }) =>
            ` ${isActive ? "text-orange-400" : "text-white"}
            `
          }
        >
          About Me
        </NavLink>
  
        <NavLink
          to='/skills/123'
          className={({ isActive }) =>
            isActive ? "text-orange-400" : "text-white"
          }
        >
          Skills
        </NavLink>
  
        <NavLink
          to='/experience'
          className={({ isActive }) =>
            isActive ? "text-orange-400" : "text-white"
          
          }
        >
          Experience
        </NavLink>
  
        <NavLink
          to='/contactme'
          className={({ isActive }) =>
            isActive ? "text-orange-400" : "text-white"
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
   </>
  )
}

export default NavBar
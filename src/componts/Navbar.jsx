import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-[#111] text-white flex justify-between p-4 items-center'>
        <NavLink className="text-2xl font-semibold uppercase">PastesApp</NavLink>
        <div className='flex gap-5 text-lg font-normal'>
        <NavLink to="/" className={({isActive,isPending})=>
        isPending?'text-white':isActive?'text-blue-400':''}>Home</NavLink>
        <NavLink to="/pastes" className={({isActive,isPending})=>
        isPending?'text-white':isActive?'text-blue-400':'text-white'}>Pastes</NavLink>
        </div>
    </div>
  )
}

export default Navbar
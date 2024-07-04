import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <NavLink to='/' activeClassName="active">Home</NavLink>
      <NavLink to='/contact' >Contact</NavLink>
      <NavLink to='/about'  >About</NavLink>
      <NavLink to='/login'  >Login</NavLink>
      <NavLink to='/admin'  >Admin</NavLink>
    </div>
  )
}

export default Navbar

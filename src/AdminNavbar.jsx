import React from 'react'
import { NavLink } from 'react-router-dom';
const AdminNavbar = () => {
  return (
    <div>
      <div className='fs-4'>
        <NavLink className="nav-link  nav-content" aria-current="page"  to='/AdminMain'>Add Products</NavLink>
              <NavLink className="nav-link  nav-content" aria-current="page"  to='/ViewListing'>view Listing</NavLink>
            <NavLink className="nav-link  nav-content" aria-current="page"  to='/Orders'>Orders</NavLink>
      </div>
    </div>
  )
}

export default AdminNavbar

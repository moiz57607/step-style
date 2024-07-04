import React from 'react'
// import { BrowserRouter as NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = (user,login,logout) => {
  const isLoggedIn = localStorage.getItem('login');
  const but = () =>{
    localStorage.clear();
    alert('hello');
    window.reload();
  }
  return (
    <div>
              <header>
            <div id="menu-bar" className="fa fa-bars"></div>
            <a href="#" className="logo">Logo</a>
            <nav className="navbar">
            {/* {
              localStorage.getItem('user-info')?
              <>
              <NavLink className="nav-link  nav-content" aria-current="page"  to='/Register'>Register</NavLink>
              <NavLink className="nav-link  nav-content" aria-current="page"  to='/Admin'>Admin</NavLink>
              </>
              :
              <>
              <NavLink className="nav-link  nav-content" aria-current="page"  to='/About'>About</NavLink>
            <NavLink className="nav-link  nav-content" aria-current="page"  to='/ProductSection'>Product</NavLink>
            <NavLink className="nav-link  nav-content" aria-current="page"  to='/FeaturedSection'>Featured</NavLink>
              </>
            } */}
            {isLoggedIn ? (
                // If the user is logged in, show the logout link
                <NavLink className="nav-link nav-content" aria-current="page" onClick={
                  but
                }>Logout</NavLink>
            ) : (
                // If the user is not logged in, show the login link
                <NavLink className="nav-link nav-content" aria-current="page" to='/Register'>Register</NavLink>
            )}
              <NavLink className="nav-link  nav-content" aria-current="page"  to='/AdminMain'>AdminMain</NavLink>
              <NavLink className="nav-link  nav-content" aria-current="page"  to='/About'>About</NavLink>
            <NavLink className="nav-link  nav-content" aria-current="page"  to='/nproduct'>Product</NavLink>
            <NavLink className="nav-link  nav-content" aria-current="page"  to='/FeaturedSection'>Featured</NavLink>
            <NavLink className="nav-link  nav-content" aria-current="page"  to='/Login'>Login</NavLink>
           
            </nav>
            <div className="icons">
                <a href="#"><i className="fa fa-heart"></i></a>
                <a href="#"><i className="fa fa-shopping-cart"></i></a>
                <a href="#"><i className="fa fa-user"></i></a>
            </div>
        </header>

    </div>
  )
}

export default Navbar

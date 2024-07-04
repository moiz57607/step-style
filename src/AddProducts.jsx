import React from 'react'
import Admin from './Admin'
import AdminNavbar from './AdminNavbar';
const AddProducts = () => {
  return (
    <div>
            <div className="row" style={{border:'2px solid red'}}>
      <div className="col-3 bg-light">
       <AdminNavbar />
      </div>
      <div className="col-9">
        <div className="container">
        <Admin />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default AddProducts

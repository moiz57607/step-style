import React from 'react'
import AdminNavbar from './AdminNavbar'
const Orders = () => {
  return (
    <div style={{width:'99%'}}>
      <div className="row" style={{border:'2px solid red'}}>
      <div className="col-3 bg-light">
       <AdminNavbar />
      </div>
      <div className="col-9">
        <div className="container">
        Orders
        </div>
      </div>
    </div>
    </div>
  )
}

export default Orders

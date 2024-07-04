import React from 'react'

import AdminNavbar from './AdminNavbar';
import ViewListSecond from './ViewListSecond';
const ViewListing = () => {
  return (
    <div style={{width:'99%'}}>
      <div className="row" style={{border:'2px solid red'}}>
      <div className="col-3 bg-light">
       <AdminNavbar />
      </div>
      <div className="col-9">
        <div className="container">
        <ViewListSecond />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ViewListing

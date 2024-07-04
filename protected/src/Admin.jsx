import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useHistory } from 'react-router-dom'; 
import { Navigate, useNavigate } from 'react-router-dom';
const Admin = () => {
  const Navigate = useNavigate()
  const moveAbout = () =>{
     Navigate('/About')
  }
  const difftoast =() =>{
    toast.success("ypu are good!", {
      position:'top-center'
    })
  }
  return (
    <div>
      <h1>Admin</h1>
      <button onClick={moveAbout}>click</button>
      <button onClick={difftoast}>click</button>
      <ToastContainer />
    </div>
  )
}

export default Admin

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Shiza from './Shiza';
import Admin from './Admin';
const Protect = (props) => {
    const navigate=useNavigate();
    const {Comp}=props;
//     useEffect(()=>{
// let login=localStorage.getItem('login');
// if(!login){
// navigate('/login');
// }
//     },[])
  return (
    <div>
      <Shiza/>
      <Comp/>
    </div>
  )
}

export default Protect

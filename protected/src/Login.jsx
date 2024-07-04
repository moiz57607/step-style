import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const loginit=()=>{
      const input = document.getElementById('butt').value
     
        // localStorage.setItem('login',true);
        if (input === 'admin') {
          navigate('/admin');
          alert('work')
        }else {
          navigate('/login');
        
        } 
        // navigate('/contact');

    }
    // useEffect(()=>{
    //     let login=localStorage.getItem('login');
    //     if(login){
    //         navigate('/contact');
    //     }
    //         },[])
  return (
    <div>
      <input type='text' id='butt'></input>
    
      <input type='submit' value='submit' onClick={loginit}></input>
    </div>
  )
}

export default Login

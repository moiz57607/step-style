import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const ViewListSecond = () => {
    const [stated,upstated]=useState([]);
  
    useEffect(()=>{
const fetchit=async()=>{
    const data=await fetch('http://127.0.0.1:8000/product/products/');
    const resu=await data.json(); 
    // console.log(resu)
    upstated(resu);
}

fetchit();
    },[])
    console.log(stated);
    const deleteit=(id)=>{
axios.delete(`http://127.0.0.1:8000/product/products/${id}/`).then((res)=>{
    console.log(res)
    if (res) {
        window.location.reload();
    }
})

    }
    
  return (
    <div className='container shazilitem'>
    <div className='row'>
      {stated.map((item,val)=>{
        return(
            <>
            <div className='col-md-4 mt-5' >
            <div class="card">
            <img src={item.product_picture } class="card-img-top" alt="checkit" style={{height:'270px'}} />

  <div class="card-body" key={val}>
    <h5 class="card-title">{item.name}</h5>
    <h5 class="card-title">{item.size}</h5>
    <h5 class="card-title">{item.color}</h5>
    <h5 class="card-title">{item.price}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" onClick={() => deleteit(item.id)}>Remove</a>
  </div>
</div>
            </div>

   
            </>
        )
       
      })}
    </div>
    </div>

  )
}

export default ViewListSecond

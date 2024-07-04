import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [formData, setFormData] = useState({
    name: '',
    color: '',
    size: '',
    price: '',
    product_picture: null // Updated name attribute for the image input field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append('name', formData.name);
      formDataToSend.append('color', formData.color);
      formDataToSend.append('size', formData.size);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('product_picture', formData.product_picture); // Updated to match the input name

      const response = await axios.post('http://127.0.0.1:8000/product/products/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.type === 'file') {
      if (e.target.files.length > 0) {
        setFormData({
          ...formData,
          [name]: e.target.files[0]
        });
      } else {
        setFormData({
          ...formData,
          [name]: null
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <>
    <h2 className='text-center'>Add Product for sale</h2>
      <form onSubmit={handleSubmit} className='admin-form p-5 mt-4'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name of product</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} id="name" placeholder="" />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">Color</label>
          <input type="text" className="form-control" name="color" onChange={handleChange} id="color" placeholder="" />
        </div>
        <div className="mb-3">
          <label htmlFor="size" className="form-label">Size</label>
          <input type="text" className="form-control" name="size" onChange={handleChange} id="size" placeholder="" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" name="price" onChange={handleChange} id="price" placeholder="" />
        </div>
        <div className="mb-3">
          <label htmlFor="product_picture" className="form-label">Image</label>
          <input type="file" className="form-control" name="product_picture" onChange={handleChange} id="product_picture" placeholder="" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Admin;

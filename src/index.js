import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Carousel from './Caorousel';
import ProductSection from './ProductSection';
import FeaturedSection from './FeaturedSection';
import Footer from './Footer';
import Register from './Register';
import About from './About';
import Navbar from './Navbar';
import AdminMain from './AdminMain';
// import Protect from './protected/src/Protect';
// import Protected from './Protected';
import Login from './Login';
import Newproduct from './Newproduct';
import AddProducts from './AddProducts';
import ViewListing from './ViewListing';
import Orders from './Orders';
import AdminNavbar from './AdminNavbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 
 <BrowserRouter>
 <Navbar />
 <Routes>

 <Route path='/' element={<App/>}></Route>
 <Route path='/Caorousel' element={<Carousel/>}></Route>

 <Route path='/Register' element={<Register/>}></Route>
 <Route path='/ProductSection' element={<ProductSection/>}></Route>
 <Route path='/FeaturedSection' element={<FeaturedSection/>}></Route>
 <Route path='/Footer' element={<Footer/>}></Route>
 <Route path='/About' element={<About/>}></Route>
 <Route path='/login' element={<Login/>}></Route>
 <Route path='/AdminMain' element={<AdminMain/>}></Route>
 <Route path='/nproduct' element={<Newproduct/>}></Route>
 <Route path='/AddProducts' element={<AddProducts/>}></Route>
 <Route path='/ViewListing' element={<ViewListing/>}></Route>
 <Route path='/Orders' element={<Orders/>}></Route>
 <Route path='/AdminNavbar' element={<AdminNavbar/>}></Route>
  </Routes>
</BrowserRouter>
  </>
  
);


reportWebVitals();


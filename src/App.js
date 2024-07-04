import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Caorousel from './Caorousel';
import ProductSection from './ProductSection';
import FeaturedSection from './FeaturedSection';
import Footer from './Footer';

const App = () => {
  return (
     <>
     
    <div>
      <Caorousel />
      <ProductSection />
      <FeaturedSection />
      <Footer />
    </div>
     </>
  )
}

export default App


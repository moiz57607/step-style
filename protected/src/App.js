import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Filter from './Filter';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import Protect from './Protect';
import Shiza from './Shiza';
import Admin from './Admin';
import NotFound from './NotFound'; // Import your 404 component

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/contact' element={<Protect Comp={Contact} />} />
          <Route path='/shiza' element={<Protect Comp={Shiza} />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Protect Comp={Admin} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

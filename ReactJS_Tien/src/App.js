import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contacts/Contact';
import Tours from './components/Tours/Tours'
import Tour_Details from './components/Tour_Details/Tour_Details';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Infomation from './components/Infomation/Infomation';
import NotFound from './components/NotFound/NotFound'




function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>    
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tours/:id' element={<Tours />} />
          <Route path='/tour/detail/:id' element={<Tour_Details/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/infomation/:id' element={<Infomation/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;



































































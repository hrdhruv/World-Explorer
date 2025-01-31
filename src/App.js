import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import SignUp from './components/Pages/SignUp';
import Products from './components/Pages/AboutUs';
import Services from './components/Pages/Services';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/services' exact element={<Services/>}/>
        <Route path='/products' exact element={<Products/>}/>
        <Route path='/sign-up' exact element={<SignUp/>}/>
      </Routes>  
    </Router>
    </>
  );
}
export default App;
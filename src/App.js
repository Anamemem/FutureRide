import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Nav from './Component/Nav'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DefaultLayout from './Layouts/Default';
import Driver from './Layouts/Driver';

function App() {
  return (
    <Router>
<div className="App">
  <Routes>
  <Route path="/" element={<DefaultLayout />}>
  <Route index element={<Home />} /> 
  </Route>
 
  <Route path="/driver/" element={<Driver />} >
  <Route path="about" element={<About />} /> 

  </Route>


  
  </Routes>
 
    </div>
    </Router>
    
  );
}

export default App;
 
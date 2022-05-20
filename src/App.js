import React from 'react';
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
  <Nav />
  <Routes>
  <Route path="/default" element={<DefaultLayout />} />
  <Route path="/" element={<Home />} />  
  <Route path="/driver" element={<Driver />} />
  <Route path="/about" element={<About />} /> 


  
  </Routes>
 
    </div>
    </Router>
    
  );
}

export default App;
 
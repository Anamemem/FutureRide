import React from 'react';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Nav from './Component/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './Layouts/Default';
import Driver from './Layouts/Driver';
import User from './Layouts/User';
import Profile from './Layouts/Profile';
import { AuthProvider } from './context/auth';
import Map  from './Layouts/Map';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">

        <Routes>
          <Route path="/default" element={<DefaultLayout />} />
          <Route path="/" element={<Home />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/nav" element={<Nav />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/map' element={<Map />} />



        </Routes>

      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;

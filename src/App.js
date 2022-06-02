import React from 'react';
import './App.css';

import Home from './Component/Home';
import DriverHome from './Component/DriverHome';
import About from './Component/About';
import Nav from './Component/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './Layouts/Default';
import Driver from './Layouts/Driver';
import User from './Layouts/User';
import Profile from './Layouts/Profile';
import { AuthProvider } from './context/auth';
import Map  from './Layouts/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import ShowDriver from './Layouts/ShowDriver';
import DriverView from './Layouts/DriverView';
import Earnings from './Layouts/Earnings'
import RideStart from './Layouts/RideStart';
import RideEnd from './Layouts/RideEnd';
import Rating from './Layouts/Rating';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">

        <Routes>
          <Route path="/signup" element={<DefaultLayout />} />
          <Route path="/" element={<Home />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/login" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/nav" element={<Nav />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/map' element={<Map />} />
          <Route path='/DriverHome' element={<DriverHome />} />
          <Route path='/driversprofile' element={<ShowDriver />} />
          <Route path='/clientprofile' element={<DriverView />} />
          <Route path='/earnings' element={<Earnings />} />
          <Route path='/ridestart' element={<RideStart />} />
          <Route path='/ratings' element={<Rating />} />
          <Route path='/rideends' element={<RideEnd />} />
          



        </Routes>

      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;

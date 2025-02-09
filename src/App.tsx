import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingHomePage from './components/home-landing-page';
import Register from './components/login/login.components';
import UserAuthentication from "./hooks/user-authentication.hook";
import NotFound from './screen/not-found/not-found.screen';
import Header from './components/header/header.component';
import Appointment from './screens/appointment/Appointment';

function App() {
  const { loggedInUser, isLoading, handleAuthentication, handleLogout } = UserAuthentication();

  return (
    <Router>
      {loggedInUser && <Header handleLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={loggedInUser ? <LandingHomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={loggedInUser ? <Navigate to="/" /> : <Register onSubmit={handleAuthentication} />} />
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Services from './component/Services/Services.component'
import tailwindcss from '@tailwindcss/vite'
import Doctor from './screens/doctor.screen'

function App() {


  return (
    <>
    <div>

              <Routes>
                   <Route path='/services' element={<Services/>} />
                   <Route path='/services/:id' element={<Doctor/>} />
              </Routes>
    </div>

    </>
  )
}

export default App; 

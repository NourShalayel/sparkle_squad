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

import React from 'react'
import { Routes,Route , Navigate} from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Booking from '../../pages/Booking'
const Router = () => {
  return (
   
   <Routes>
   <Route path="/" element={<Navigate to='/dashboard' element={<Dashboard/>} />}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/bookings" element={<Booking/>} />
   </Routes>
   
  )
}

export default Router

import { useState } from 'react'
import './App.css'
import Header from './Layout/Header'
import Home from './Components/Home'
import Bookings from './Components/Bookings'
import NewBooking from './Components/NewBooking'
import Layout from './Layout/Layout'

function App() {
  

  return (
    <div className='bg-[#f2f7fc] py-9'>
      <Layout/>
    </div>
  )
}

export default App

import React from 'react'
import Home from '../sections/Home'
import KeyFeatures from '../sections/KeyFeatures'
import Plans from '../sections/Plans'
import TestiMonials from '../sections/TestiMonials'
import Rounded from '../components/Rounded'
import UsersData from '../components/UsersData'

const HeroSection = () => {
  return (
    <div style={{width:'100%', overflowX: 'hidden'}}>
        <Home />
        <KeyFeatures/>
        <TestiMonials/>
        <UsersData/>
        <Plans/>
        <Rounded/>
    </div>
  )
}

export default HeroSection
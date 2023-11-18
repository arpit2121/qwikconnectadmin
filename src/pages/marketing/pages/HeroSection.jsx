import React from 'react'
import Home from '../sections/Home'
import KeyFeatures from '../sections/KeyFeatures'
import Plans from '../sections/Plans'
import TestiMonials from '../sections/TestiMonials'
import Rounded from '../components/Rounded'

const HeroSection = () => {
  return (
    <>
        <Home />
        <KeyFeatures/>
        <TestiMonials/>
        <Plans/>
        <Rounded/>
    </>
  )
}

export default HeroSection
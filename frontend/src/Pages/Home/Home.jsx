import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Popular from '../../components/Popular'
import Appointment from '../../components/Appointment'
import WhoAreWe from '../../components/WhoAreWe'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Popular/>
      <Appointment/>
      <WhoAreWe/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home

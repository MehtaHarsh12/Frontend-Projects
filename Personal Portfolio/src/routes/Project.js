import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import HeroImg2 from '../Component/HeroImg2'
import PricingCard from '../Component/PricingCard'
import Work from '../Component/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project

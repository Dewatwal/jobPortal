import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Joblisting from '../components/Joblisting'
import AppDownload from '../components/AppDownload'
import Footer from '../components/footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Joblisting/>
      <AppDownload/>
      <Footer/>

    </div>
  )
}

export default Home

import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Hero from '../../Component/Hero/Hero'
import Message from '../../Component/Message/Message'
import Check from '../../Component/Checkus/Check'
import Core from '../../Component/Core/Core'
import Faq from '../../Component/FAQ/Faq'
import Bluebg from '../../Component/Bluebg/Bluebg'
import Footer from '../../Component/Footer/Footer'
import Slack from '../../Component/Slack/Slack'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Message/>
        <Check/>
        <Core/>
        <Faq/>
        <Bluebg/>
       
        <Footer/>

    </div>
  )
}

export default Home
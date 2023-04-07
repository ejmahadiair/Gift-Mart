import React from 'react'
import { Outlet } from 'react-router-dom'
import About from '../../Components/About/About'
import Ads from '../../Components/Ads/Ads'
import Banner from '../../Components/Banner/Banner'
import Client from '../../Components/Clients/Client'
import Contact from '../../Components/Contact/Contact'
import Item from '../../Components/MenuItem/Item'

const Home = () => {
  return (
    <>
     <Banner/>
     <div className='home w-[80%] mx-auto pt-20'>
     <Ads/>
     <div className='ej-scroll-none h-[100vh] overflow-y-auto'>
     <Item/>
     </div>
     
     </div>
     
     <About/>
     <Contact/>
     <Client/>
     <Outlet/>
    </>
  )
}

export default Home
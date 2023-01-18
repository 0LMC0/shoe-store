import React from 'react'
import './zapatillas.css'
import bannerPrincipal from '../../assets/img/zptlls/banner-zptlls.png'
import CardContainer from './cardContainer/CardContainer'

import { motion as m } from 'framer-motion'

const Zapatillas = () => {

  return (
    
    <m.div 
    initial={{ width: 0, x: 50}} 
    animate={{ width: "80%", x: 0 }} 
    transition={{duration: 2.5}}
    exit={{ x: "-100%",  transition:{duration: 0.5}}}
    className='shoes-container'>
      <img className='banner-principal' src={bannerPrincipal} alt="" />
      <div className="card-container">
        <CardContainer />
      </div>
    </m.div>
  )
}

export default Zapatillas
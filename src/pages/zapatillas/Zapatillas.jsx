import React from 'react'
import './zapatillas.css'
import bannerPrincipal from '../../assets/img/zptlls/banner-zptlls.png'
import CardContainer from './cardContainer/CardContainer'

import { motion as m } from 'framer-motion'

const Zapatillas = () => {

  return (
    
    <m.div 
    initial={{opacity:0, y : 100}} 
    animate={{opacity:1, y: 0 }} 
    transition={{duration: 2, ease: "easeIn"}}
    exit={{ opacity:0, y: "-100%",  transition:{duration: 0.5}}}
    className='shoes-container'>
      <div className='banner_shop'>
        <p>breadcrum/Productos</p>
        <h3>Tienda Online</h3>
        
      </div>
      <div className="card-container">
        <CardContainer />
      </div>
    </m.div>
  )
}

export default Zapatillas
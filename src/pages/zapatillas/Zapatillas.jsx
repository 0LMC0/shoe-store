import React from 'react'
import './zapatillas.css'
import bannerPrincipal from '../../assets/img/zptlls/banner-zptlls.png'

const Zapatillas = () => {
  return (
    <div className='shoes-container'>
      <img className='banner-principal' src={bannerPrincipal} alt="" />
    </div>
  )
}

export default Zapatillas
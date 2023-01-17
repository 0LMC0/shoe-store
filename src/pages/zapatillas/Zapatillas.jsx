import React from 'react'
import './zapatillas.css'
import bannerPrincipal from '../../assets/img/zptlls/banner-zptlls.png'
import CardContainer from './cardContainer/CardContainer'

const Zapatillas = () => {
  return (
    <div className='shoes-container'>
      <img className='banner-principal' src={bannerPrincipal} alt="" />
      <div className="card-container">
        <CardContainer />
      </div>
    </div>
  )
}

export default Zapatillas
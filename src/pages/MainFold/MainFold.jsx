import React from 'react'
import "./mainfold.css"
import overlay from '../../assets/img/overlay/overlayimg.png'
// reactIcon
import {BsFillArrowDownLeftSquareFill} from 'react-icons/bs'
import {MdVerifiedUser, MdSell} from 'react-icons/md'
import { Link } from 'react-router-dom' 
import Footer from './Footer/Footer'

const MainFold = () => {
  return (
    <div className="main-container">

    <div className='container-mainfold'>
    <div className='mainFold'>
      <div className='mainFold-content'>
        <h1 className='mainFold-title'>
          Defini tu <span className='mainFold-title-r'>estilo.</span>
        </h1>
        <p className='mainFold-description'>¿Estas buscando tu proximo par de zapas? Llegaste al lugar correcto! Tenemos muchas marcas y modelos disponibles en todos los talles. <br /> <strong > Chequea el catalogo haciendo click en el boton <BsFillArrowDownLeftSquareFill className='downleft-arrow' /></strong></p>
        <div className='mainFold-price-btn'>
          <Link to="/zapatillas" className='mainFold-btn'> Ver catalogo <MdVerifiedUser className='icon-mainfold'/></Link>
          <Link to="/zapatillas" className='mainFold-btn-myrst'> Comenza a revender <MdSell className='icon-mainfold'/></Link>
        </div>
      </div>
    </div>
      <img src={overlay} alt="overlay" className='overlayImg' />
    </div>
    <Footer />
    </div>
  )
}

export default MainFold
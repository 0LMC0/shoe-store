import React from 'react'
import "./mainfold.css"
import overlay from '../../assets/img/overlay/overlayimg.png'
// reactIcon
import {BsFillArrowDownLeftSquareFill} from 'react-icons/bs'
import {MdVerifiedUser} from 'react-icons/md'
import { Link } from 'react-router-dom'

const MainFold = () => {
  return (
    <div className='container-mainfold'>

    <div className='mainFold'>
      <div className='mainFold-content'>
        <h1 className='mainFold-title'>
          Defini tu <span className='mainFold-title-r'>estilo.</span>
        </h1>
        <p className='mainFold-description'>¿Estas buscando tu proximo par de zapas? Llegaste al lugar correcto! Tenemos muchas marcas y modelos disponibles en todos los talles. <br /> <strong > Chequea el catalogo haciendo click en el boton <BsFillArrowDownLeftSquareFill className='downleft-arrow' /></strong></p>
        <div className='mainFold-price-btn'>
          <Link to="/zapatillas" className='mainFold-btn'> Ver catalogo <MdVerifiedUser className='verified-user'/></Link>
          <div><a className='mainFold-price' href="https://www.instagram.com/zpste/?hl=es" target='_blank'> @zpste</a></div>
        </div>
      </div>
    </div>
      <img src={overlay} alt="overlay" className='overlayImg' />
    </div>
  )
}

export default MainFold
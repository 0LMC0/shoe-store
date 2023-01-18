import React from 'react'
import "./mainfold.css"
import overlay from '../../assets/img/overlay/overlayimg.png'
// motion
import { motion as m} from 'framer-motion'
// reactIcon
import {BsFillArrowDownLeftSquareFill} from 'react-icons/bs'
import {MdVerifiedUser, MdSell} from 'react-icons/md'
import { Link } from 'react-router-dom' 
// tr
import Typewriter from 'typewriter-effect';


const MainFold = () => {

  return (
    <>
    
    <m.div 
          initial={{opacity:0, x : 100}} 
          animate={{opacity:1, x: 0 }} 
          transition={{duration: 1.5, ease: "easeIn"}}
          exit={{ x: "-100%",  transition:{duration: 0.5}}}
    className="main-container">
    <div className='container-mainfold'>
    <div className='mainFold'>
      <div className='mainFold-content'>
        <h1 className='mainFold-title'>
          Defini tu 
          <span className='mainFold-title-r'>
              <Typewriter
              options={{
                strings: ['estilo.', 'outfit.', "personalidad."],
                autoStart: true,
                loop: true,
              }}/>
          </span>
        </h1>
        <p className='mainFold-description'>¿Estas buscando tu proximo par de zapas? Llegaste al lugar correcto! Tenemos muchas marcas y modelos disponibles en todos los talles. <br /> <strong > Chequea el catalogo haciendo click en el boton <BsFillArrowDownLeftSquareFill className='downleft-arrow' /></strong></p>
        <div className='mainFold-price-btn'>
        <m.button
            className='mainFold-btn'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
              <Link to="/zapatillas" className='btn-link' > Ver catalogo <MdVerifiedUser className='icon-mainfold'/></Link>
        </m.button>
        <m.button
          className='mainFold-btn-myrst'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <Link to="/mayoristas" className='btn-link' > Comenza a revender <MdSell className='icon-mainfold'/></Link>
          </m.button>
        </div>
      </div>
    </div>
    </div>
      </m.div>
    <m.div
       initial={{ opacity: 0}} 
       animate={{ opacity: 1 }} 
       transition={{duration: 0.1}}
      exit={{ opacity: 0}}
    >
      <img src={overlay} alt="overlay" className='overlayImg' />
    </m.div>
    </>
  )
}

export default MainFold
import React from 'react'
import "./footer.css"
// img
import imgFooter1 from '../../assets/img/footer/travis.png'
import imgFooter2 from '../../assets/img//footer/sbdunka.png'
import imgFooter3 from '../../assets/img/footer/sbgulf.png'
// reacticons
import {ImWhatsapp} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerImages-wrapper'>
        <img 
          className='footer-product-image'
          src={imgFooter1}
          alt="producto-1"
        />
        <img 
          className='footer-product-image'
          src={imgFooter2}
          alt="producto-2"
        />
        <img
          className='footer-product-image'
          src={imgFooter3}
          alt="producto-3"
        />
      </div>
      <div className='footer-socials'>
        <a href="https://wa.me/541132493803?text=Hola%20,quiero%20saber%20mas%20sobre%20las%20zapas%20!" target='_blank'><ImWhatsapp/></a>
        <a href=" https://ig.me/m/zpste" target='_blank'><BsInstagram/></a>
      </div>
    </div>
  )
}

export default Footer
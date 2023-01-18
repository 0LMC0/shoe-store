import React from 'react'
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import {FaPercentage} from 'react-icons/fa'
import {BsFillCaretDownFill} from 'react-icons/bs'
import { motion as m } from 'framer-motion'

// ri
import {BsArrowRightSquareFill} from "react-icons/bs"
import './cards.css'
const Card = ({prop}) => {

 return (
     <div className="card-container" >
        {prop.map((producto) => (
            <div key={producto.id}>
                <m.div whileHover={{ scale: [null, 1.05, 1.05] }}
                    transition={{ duration: 0.3 }} 
                    className='product-card'>
                    <img className='product-img' src={producto.img} alt="" />
                    <img className='product-logo' src={producto.logo} alt="" />
                    <h1 className='product-title'>{producto.name}</h1>
                    <p className='product-price'>${producto.price} <small className='product-digits'>99</small>_</p>
                    <small className='product-condition'>Condicion= {producto.condicion}</small>
                    <small className='product-sell'>Hay stock= {producto.stock ? <TiTick className='icon-stock-true'/> : <ImCross className='icon-stock-cross'/>}</small>
                    {producto.oferta ? 
                        <div className='product-oferta'>
                            <FaPercentage className='product-oferta-icon-promo'/>
                            <p>En promo combo</p>
                            <FaPercentage className='product-oferta-icon-promo'/>
                        </div> : 
                        <div className='product-oferta'>
                        <BsFillCaretDownFill className='product-oferta-icon-arrow'/>
                        <p>Hace tu consulta</p>
                        <BsFillCaretDownFill className='product-oferta-icon-arrow'/>
                        </div>
                            }
                    <button className='product-btn'>Pedinos la tuya! <BsArrowRightSquareFill/></button>
                </m.div>
            </div>
        ))}
    </div>
  )
}

export default Card
import React from 'react'
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import {GiRunningShoe} from 'react-icons/gi'

// ri
import {BsArrowRightSquareFill} from "react-icons/bs"
import './cards.css'
const Card = ({prop}) => {

 return (
     <div className="card-container" >
        {prop.map((producto) => (
            <div key={producto.id}>
                <div className='product-card'>
                    <img className='product-img' src={producto.img} alt="" />
                    <img className='product-logo' src={producto.logo} alt="" />
                    <h1 className='product-title'>{producto.name}</h1>
                    <p className='product-price'>${producto.price} <small className='product-digits'>99</small> </p>
                    <small className='product-condition'>Condicion= {producto.condicion}</small>
                    <small className='product-sell'>Hay stock= {producto.stock ? <TiTick className='icon-stock-true'/> : <ImCross className='icon-stock-cross'/>}</small>
                    {producto.oferta ? <div className='product-oferta'><GiRunningShoe className='product-oferta-icon'/><p>EN PROMO COMBO %</p></div> : ""}
                    <button className='product-btn'>Pedinos la tuya! <BsArrowRightSquareFill/></button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card
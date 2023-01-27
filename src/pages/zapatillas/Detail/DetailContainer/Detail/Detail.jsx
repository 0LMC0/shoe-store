import React, { useContext, useState } from 'react'
import './detail.css'
import pago from '../../../../../assets/img/zptlls/pago.jpg'
import {BsCartPlus} from 'react-icons/bs'
import {RiArrowGoBackFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { TiTick } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'
import RelatedProducts from './RelatedProducts/RelatedProducts'
import { CartContext } from '../../../../../context/CartContext'
import swal from 'sweetalert'

import ItemCount from '../../../../../components/ItemCount/ItemCount'

const Detail = ({detail}) => {

  const talles = detail.talles

  // se guarda la variable del cambio en talles
  const [Talle, setTalle] = useState({})

  const handleChange = (e) => {
    setTalle(e.target.value);
  }


  const onAdd = (qty) => {
    detail.quantity = qty;
    dispatch({type:'ADD', payload: detail} )
    swal(`Agregaste ${qty} ${detail.name} talle ${Talle}`, "Click en el carrito para ver tu pedido o agregar mas cantidad.", "success");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const globalState = useContext(CartContext)
  const dispatch = globalState.dispatch;

  

  return  (
    <div className='container'>
    <div className='product-detail-container'>
      <div className='product-detail'>
        <img className='product-detail-img' src={detail.img} alt={detail.name} />      
          <div className='product-detail-info'>
              <h2 className='product-detail-title'>{detail.name}</h2>
              <hr />
              <div className='product-detail-prices'>
                <h4 className='product-detail-last-price'>${detail.lastprice}</h4>
                <h4 className='product-detail-price'>${detail.price}_</h4>
              </div>
              <img className='product-detail-payment' src={pago} alt="" />
              <p className='product-detail-description'><strong>ENVIO GRATIS</strong> a partir de <strong>$20.000_</strong></p>
              <hr />
              <p className='product-detail-small'>En stock = {detail.stock > 1 ? <TiTick className='icon-stock-true'/> : <ImCross className='icon-stock-cross'/>}</p>


            {detail.oferta ? <div className='product-oferta'>
                              <p>En promo combo</p>
                            </div> : 
                            <div className='product-oferta'>
                              <p>Hace tu consulta</p>
                            </div>}

    <form onSubmit={handleSubmit}>
        <label>
          selecciona el talle disponible:
          <select onChange={handleChange}>
          {talles.map((e, i) => {
            return <option key={e} >{e}</option>
          })}
          </select>
          <ItemCount type="submit" onAdd={onAdd} initial={1} stock={detail.stock} />
        </label>
    </form>
      
          <div className='product-detail-buttons'>
            <Link to='/zapatillas'>
              <button className="btn btn-secondary btn-detail-prod">Volver al catalogo <RiArrowGoBackFill className='icon-cart-button'/></button>
            </Link>
          </div>
      </div>
  </div>
  </div>
  <div className='related-products'>
    <hr />
    <h3>Productos relacionados</h3>
    <RelatedProducts />
  </div>
  </div>
  )
}

export default Detail
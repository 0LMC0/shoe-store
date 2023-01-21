import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {TiTick} from 'react-icons/ti'
import {ImCross} from 'react-icons/im'
import {FaPercentage, FaCartPlus} from 'react-icons/fa'
import {BsFillCaretDownFill} from 'react-icons/bs'
import { motion as m } from 'framer-motion'
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


// ri
import {BsArrowRightSquareFill} from "react-icons/bs"
import './cards.css'
const Card = ({prop}) => {

    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    


    const loader = () =>{
            return (
                <div className="card-container" >
                        <SkeletonTheme baseColor="#202020" highlightColor="#444">
                           <div 
                               className='product-card'>
                               <Skeleton height={200} className='product-img'/>
                               <h1 className='product-title'><Skeleton /></h1>
                               <p className='product-price'>$<Skeleton /></p>
                               <small className='product-condition'><Skeleton/></small>
                               <small className='product-sell'><Skeleton /></small>
                                   <div className='product-oferta'>
                                       <p><Skeleton /></p> 
                                   </div>
                           </div>
                           <div 
                               className='product-card'>
                               <Skeleton height={200} className='product-img'/>
                               <h1 className='product-title'><Skeleton /></h1>
                               <p className='product-price'>$<Skeleton /></p>
                               <small className='product-condition'><Skeleton/></small>
                               <small className='product-sell'><Skeleton /></small>
                                   <div className='product-oferta'>
                                       <p><Skeleton /></p> 
                                   </div>
                           </div><div 
                               className='product-card'>
                               <Skeleton height={200} className='product-img'/>
                               <h1 className='product-title'><Skeleton /></h1>
                               <p className='product-price'>$<Skeleton /></p>
                               <small className='product-condition'><Skeleton/></small>
                               <small className='product-sell'><Skeleton /></small>
                                   <div className='product-oferta'>
                                       <p><Skeleton /></p> 
                                   </div>
                           </div><div 
                               className='product-card'>
                               <Skeleton height={200} className='product-img'/>
                               <h1 className='product-title'><Skeleton /></h1>
                               <p className='product-price'>$<Skeleton /></p>
                               <small className='product-condition'><Skeleton/></small>
                               <small className='product-sell'><Skeleton /></small>
                                   <div className='product-oferta'>
                                       <p><Skeleton /></p> 
                                   </div>
                           </div>
                        </SkeletonTheme>
                       </div>
        )
    }

    const loaded = () =>{
        return (
            <div className="card-container" >
               {prop.map((producto) => (
                   <div key={producto.id}>
                       <m.div whileHover={{ scale: [null, 1.05, 1.05] }}
                           transition={{ duration: 0.3 }} 
                           className='product-card'>
                           <img className='product-img' src={producto.img} alt="" />
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
                           <Link to={`/zapatillas/${producto.id}`} className='product-btn'>Ver detalle <BsArrowRightSquareFill className='icon-card'/></Link>
                           <button className='product-btn-cart'>Agregar al carrito <FaCartPlus className='icon-card' /></button>
                       </m.div>
                   </div>
               ))}
           </div>
    )
}
 return(
     Loading ? loader() : loaded()
 )
 }

export default Card
import React, { useEffect, useState } from 'react'
import productList from '../../../../../../ProductListSubstitute/productList'
import './relatedProducts.css'
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'

const RelatedProducts = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
      const getData = new Promise(res =>{
        setTimeout(() => { 
            res(productList.sort(() => .5 - Math.random()).slice(0,3))})
        }, 3000);
      return () => getData
                  .then(res => setData(res))
                  .catch((err) => console.log(err));
      
    }, [])

  return (
    <div className='related-prod'>
        {Data.map((pr) => (
        <m.div 
        whileHover={{ scale: [null, 1.05, 1.05] }}
        transition={{ duration: 0.3 }}  key={pr.id} {...pr}>
            <Link to={`/zapatillas/${pr.id}`}>
                <img className='related-img' src={pr.img} alt="" />
            </Link>
        </m.div>))}
    </div>
  )
}

export default RelatedProducts
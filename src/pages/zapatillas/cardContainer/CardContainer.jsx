import React, { useEffect, useState } from 'react'

import Card from './card/Cards'
import productList from '../../../ProductListSubstitute/productList'

const CardContainer = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
      const getData = new Promise(res =>{
        setTimeout(() => {
            res(productList)})
        }, 3000);
      return () => getData
                  .then(res => setData(res))
                  .catch((err) => console.log(err));
      
    }, [])

  return (
    <div className='list-cards'>
        <Card prop={Data} />
    </div>
  )
}

export default CardContainer
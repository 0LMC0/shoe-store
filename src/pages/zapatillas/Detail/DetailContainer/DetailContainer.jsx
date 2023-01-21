import React from 'react'
import { useParams } from 'react-router-dom'
import productList from  '../../../../ProductListSubstitute/productList'
import Detail from './Detail/Detail'

const DetailContainer = () => {

  const { productId } = useParams()

  const prodData = productList.find(elem => elem.id == productId)
      
    return (
      <div>
        <Detail detail={prodData} />  
      </div>
  )
}
export default DetailContainer
import React from 'react'

// imp img solo de prueba
import img1 from "../../../assets/img/footer/travis.png"
import img2 from "../../../assets/img/footer/sbdunka.png"
import img3 from "../../../assets/img/footer/sbgulf.png"

const CardContainer = () => {

    const propsSubstitute = [
        {
            id: 1,
            name: "Nike air jordan X Travis Scott",
            img: img1,
            price: "10000",
            condicion: "Nuevo",
            unidadesVendidas: "33",
            oferta: false
        },
        {
            id: 1,
            name: "Nike air jordan X Travis Scott",
            img: img2,
            price: "9000",
            condicion: "Nuevo",
            unidadesVendidas: "33",
            oferta: true
        },
        {
            id: 1,
            name: "Nike air jordan X Travis Scott",
            img: img3,
            price: "55000",
            condicion: "Nuevo",
            unidadesVendidas: "33",
            oferta: false
        },
    ]


  return (
    <div>

    </div>
  )
}

export default CardContainer
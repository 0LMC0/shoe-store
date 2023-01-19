import React, { useEffect, useState } from 'react'

// imp img solo de prueba
import img1 from "../../../assets/img/footer/travis.png"
import img2 from "../../../assets/img/footer/sbdunka.png"
import img3 from "../../../assets/img/footer/sbgulf.png"

import nike from "../../../assets/img/logos de zapas/nike.png"
import adidas from "../../../assets/img/logos de zapas/adidas.png"
import puma from "../../../assets/img/logos de zapas/puma.png"
import fila from "../../../assets/img/logos de zapas/fila.png"
import Card from './card/Cards'

const propsSubstitute = [
    {
        id: 1,
        name: "Nike air jordan X Travis Scott",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus voluptatem modi non debitis nemo cum iure, error repellendus deserunt delectus a aperiam, distinctio qui.",
        img: img1,
        price: "10000",
        condicion: "Nuevo",
        stock: false,
        oferta: false,
        logo: nike
    },
    {
        id: 2,
        name: "Nike SB gulf",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus voluptatem modi non debitis nemo cum iure, error repellendus deserunt delectus a aperiam, distinctio qui.",
        img: img2,
        price: "9000",
        condicion: "Nuevo",
        stock: true,
        oferta: true,
        logo: adidas
    },
    {
        id: 3,
        name: "Nike sb gulf special edition",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus voluptatem modi non debitis nemo cum iure, error repellendus deserunt delectus a aperiam, distinctio qui.",
        img: img3,
        price: "55000",
        condicion: "Nuevo",
        stock: true,
        oferta: false,
        logo: fila
    },
    {
        id: 4,
        name: "nike air jordan travis scott",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus voluptatem modi non debitis nemo cum iure, error repellendus deserunt delectus a aperiam, distinctio qui.",
        img: img1,
        price: "55000",
        condicion: "Nuevo",
        stock: true,
        oferta: false,
        logo: puma
    }
]

const CardContainer = () => {

    const [Data, setData] = useState([]);

   

    useEffect(() => {
      const getData = new Promise(res =>{
        setTimeout(() => {
            res(propsSubstitute)})
        }, 5000);
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
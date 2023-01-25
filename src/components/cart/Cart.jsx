import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './cart.css'
import swal from 'sweetalert'



const Cart = () => {

    const GlobalState = useContext(CartContext)
    const state = GlobalState.state;
    const dispatch=GlobalState.dispatch

    const total = state.reduce((total, item) => {
        return total+item.price*item.quantity
    }, 0)

  return (
    <div className='cart'>
        
        {state.map((item, index) => {
            return <div className="card" key={index}>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <p>{item.quantity * item.price}</p>

                <div className='quantity'>
                    <button onClick={ () => dispatch({type:'INCREASE', payload:item})}>+</button>
                    <p>{item.quantity}</p>
                    <button onClick={ () => {
                        item.quantity > 1 ?
                        dispatch({type:'DECREASE', payload:item}) 
                        :
                        swal({
                            title: "Queres eliminar completamente este par de zapas?",
                            text: "Si apretas OK el producto sera eliminado del carrito",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                          .then((willDelete) => {
                            if (willDelete) {
                              dispatch({type: 'REMOVE', payload:item})
                              swal("Se elimino el producto de tu carrito.", {
                                icon: "success",
                              });
                            } else {
                              swal("El producto no ha sido eliminado.", {
                                icon: "warning",
                              });
                            }
                          }); 
                    }
                    }>-</button>
                </div>

                <h2 onClick={() => swal({
                            title: "Queres eliminar este par de tu pedido?",
                            text: "Si apretas OK el producto sera eliminado de tu pedido",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                          .then((willDelete) => {
                            if (willDelete) {
                              dispatch({type: 'REMOVE', payload:item})
                              swal("Se elimino el producto de tu carrito.", {
                                icon: "success",
                              });
                            } else {
                              swal("El producto no ha sido eliminado.", {
                                icon: "warning",
                              });
                            }
                          })}>X</h2>
            </div>
        })}
        {state.length > 0 && 
        <div className="total">
            <h2>{total}</h2>
        </div>
        }
    </div>
  )
}

export default Cart
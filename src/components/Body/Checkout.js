import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  updatecart } from '../../features/productSlice'

function Checkout({title,price,id,tooggleIsOpen}) {
    const dispatch = useDispatch()
    const oldCart = useSelector(state=>state.products.cart)
    const handledelete=()=>{
        let newCart = oldCart.filter((q)=>q.id !== id)
        dispatch(updatecart(newCart))
    }
    return (
        <div className='checkout-prop'>
           <h4>{title}</h4> <p>{price*100}</p>
          {/* I had to remove this batton to remove some bags
          <button className='delete-btn' onClick={handledelete}>X</button> */}
        </div>
    )
}

export default Checkout

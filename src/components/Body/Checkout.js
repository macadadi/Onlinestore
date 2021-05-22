import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  updatecart } from '../../features/productSlice'

function Checkout({title,price,id}) {
    const dispatch = useDispatch()
    const oldCart = useSelector(state=>state.products.cart)
     const dt =[1,2,3,4,5,6]
    const handledelete=()=>{
        let newCart = oldCart.filter((q)=>q.id !== id)
        dispatch(updatecart(newCart))
        console.log(newCart)
    }
    return (
        <div className='checkout-prop'>
           <h4>{title}</h4> <p>{price}</p>
           <button className='delete-btn' onClick={handledelete}>X</button>
        </div>
    )
}

export default Checkout

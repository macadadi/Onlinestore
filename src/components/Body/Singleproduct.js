import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, updatecart } from '../../features/productSlice'

function Singleproduct({title,price,description,category,imgUrl,id}) {
    const dispatch =useDispatch()
    
    const oldCart = useSelector(state=>state.products.cart)
    const handledelete=()=>{
        let newCart = oldCart.filter((q)=>q.id !== id)
        dispatch(updatecart(newCart))
    }

 
    const handleclick =()=>{

       dispatch(addtocart({id,title,price,description,category,imgUrl})) 
        
    }
  
    return (
            <div className='single-prod'  >
            {/* {id title price description category image }*/}
         <h3>{category}</h3>
        <h5>{title}</h5>
            <center>
        <img src={imgUrl}/>
        </center>
        <h4>$. {price}/=</h4>
        <p>{description.substring(0,60)}</p> 
        <div>
            <button className='view-detail-btn'>View Details</button>
            <button className='add-to-cart-btn' onClick={handleclick}>Add to Cart</button>
            <button className='rm-fr-cart-btn' onClick={handledelete}>Remove from Cart</button>
        </div>
    </div>
    )
}

export default Singleproduct

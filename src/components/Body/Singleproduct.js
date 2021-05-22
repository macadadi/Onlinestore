import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../features/productSlice'

function Singleproduct({title,price,description,category,imgUrl,id}) {
    const dispatch =useDispatch()
    const [cart,setCart] = useState([])

    const handleclick =()=>{
        const db = {
             title,price,description
         }
       dispatch(addtocart(JSON.stringify(db))) 
        
    }
  
    return (
            <div className='single-prod'  onClick={handleclick}>
            {/* {id title price description category image }*/}
         <h3>{category}</h3>
         <i class="fas fa-cart-plus">g</i>
        <h5>{title}</h5>
            <center>
        <img src={imgUrl}/>
        </center>
        <h4>$. {price}/=</h4>
        <p>{description.substring(0,60)}</p>
        
    </div>
    )
}

export default Singleproduct

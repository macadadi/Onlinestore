import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../../features/productSlice'

function Singleproduct({title,price,description,category,imgUrl,id}) {
    const dispatch =useDispatch()
    const cart = useSelector(state=>state.products)

 
    const handleclick =()=>{

        console.log(cart.cart)
       dispatch(addtocart({id,title,price,description,category,imgUrl})) 
        
    }
  
    return (
            <div className='single-prod'  onClick={handleclick}>
            {/* {id title price description category image }*/}
         <h3>{category}</h3>
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

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtocart, updatecart } from '../../features/productSlice'
import SingleItemdetail from './SingleItemdetail'

function Singleproduct({title,price,description,category,imgUrl,id}) {
    const dispatch =useDispatch()
    const [showbtn,setShowbtn] = useState(true)
    const [moredetail,setMoredetail] = useState(false)
    
    const oldCart = useSelector(state=>state.products.cart)
    const handledelete=()=>{
        let newCart = oldCart.filter((q)=>q.id !== id)
        dispatch(updatecart(newCart))
        setShowbtn(true)
    }

 
    const handleclick =()=>{
        
       dispatch(addtocart({id,title,price,description,category,imgUrl})) 
        setShowbtn(false)
    }
    const toogleDetails =()=>{
        setMoredetail(!moredetail)
        console.log(moredetail)
    }
  
    return (
            <div className='single-prod'  >
            {/* {id title price description category image }*/}
         <h3>{category}</h3>
        <h5>{title}</h5>
            <center>
        <img src={imgUrl}/>
        </center>
        <h4>Ksh. {price*100}/=</h4>
        {moredetail && <SingleItemdetail id={id} title={title} price={price} 
                   description={description} category={category} image={imgUrl}
                    toogleDetails={toogleDetails} handleclick={handleclick} showbtn={showbtn}
                    handledelete={handledelete}/> }
        <div>
            <button className='view-detail-btn' onClick={toogleDetails}> View Details</button>
         {showbtn ?    <button className='add-to-cart-btn' onClick={handleclick}>Add to Cart</button> : 
                      <button className='rm-fr-cart-btn' onClick={handledelete}>Remove from Cart</button> }
        </div>
    </div>
    )
}

export default Singleproduct

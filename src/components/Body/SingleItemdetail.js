import React from 'react'
import { useSelector } from 'react-redux'
import {Link,History, useHistory} from 'react-router-dom'

import './singleitem.css'

function SingleItemdetail({title,price,description,toogleDetails,image,handleclick,showbtn,handledelete}) {
 
     //Distracture single item to get individual components
    return (
        <div className='main-single-item'>
               {/* {id title price description category image }*/}
           <div className='single-item'> 
               <h3>{title}</h3>
               <center>
               <img src={`${image}`} alt={title} />
               </center>
               <p>{description}</p>

               <h3>{price}</h3>
               <button onClick={toogleDetails} className='continue-shopping-btn'> Continue Shopping </button>
               {showbtn ?    <button className='add-to-cart-btn' onClick={handleclick}>Add to Cart</button> : 
                      <button className='rm-fr-cart-btn' onClick={handledelete}>Remove from Cart</button> }
           </div>
        </div>
    )
}

export default SingleItemdetail

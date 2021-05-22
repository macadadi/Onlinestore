import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../../features/productSlice'
import './productbody.css'
import Singleproduct from './Singleproduct'

function Productpage() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchdata())
    },[])
    return (
        <div className='product-main'>
             {/* {id title price description category image }*/}
        {products.status ==='pending' ? <h3>Loading data please wait</h3> :products.status ==='rejected' ? <h3>
            Sorry something went wrong</h3> : products.status === 'fulfilled' && products.stock.map((prod,index)=>(<Singleproduct
            id={prod.id} price={prod.price} title={prod.title} description={prod.description} 
            category={prod.category} imgUrl={prod.image} key={index}/>))}
         
        </div>
    )
}

export default Productpage

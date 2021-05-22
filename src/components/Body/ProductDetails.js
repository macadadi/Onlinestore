import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'
import Checkout from './Checkout'
import './productdetails.css'

function ProductDetails() {
    const cart = useSelector(state=>state.products.cart)
    return (
        <div className='popup'>
        <div className='box'>
          
            <div className='checkout-body'>
           
                <Row>
                <Col  md="6" className='checkout-left'>
                <h1>Checkout</h1>
                    {cart && cart.map((product,index)=> <Checkout key={index} title={product.title}  price={product.price}/>)}
                    <div className='checkout-total'>
                   <h4>TOTAL :</h4> <h5> ksh. 56.00</h5> 
                   </div>
               </Col> 
               <Col  md="6" className='checkout-right'>
                   <div className='account'>account</div>
                   <div className='shipping'>shiping</div>
               </Col>
               </Row>
           </div>
        </div>
        </div>
    )
}

export default ProductDetails


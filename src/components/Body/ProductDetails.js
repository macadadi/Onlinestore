import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'
import Checkout from './Checkout'
import './productdetails.css'

function ProductDetails() {
    const cart = useSelector(state=>state.products)


 
    return (
        <div className='popup'>
        <div className='box'>
          
            <div className='checkout-body'>
           
                <Row>
                <Col  md="6" className='checkout-left'>
                <h1>Checkout</h1>
                    {cart.cart && cart.cart.map((product,index)=> <Checkout key={index} title={product.title}  price={product.price}/>)}
                    <div className='checkout-total'>
                   <h4>TOTAL :</h4> <h5> ksh. {cart.total.toFixed(2)}</h5> 
                   </div>
               </Col> 
               <Col  md="6" className='checkout-right'>
                   <div className='account'><h3>Credit Card Details</h3>
                      <div className='card-input'>
                          <div>
                              <h5>CARD HOLDER</h5>
                              <input type='text'  placeholder='Card Holder'/>
                          </div>
                          <div>
                              <h5>EXPIRATION DATE</h5>
                              <div className='card-date'>
                              <input type='text'  placeholder='MM'/>
                              <input type='text'  placeholder='YY'/>
                              </div>
                          </div>
                      </div>
                      <div className='card-input'>
                          <div>
                              <h5>CARD NUMBER</h5>
                              <input type='text'  placeholder='Card Number'/>
                          </div>
                          <div>
                              <h5 >cvc</h5>
                              <input className='card-date' type='text'  placeholder='cvc'/>
                          </div>
                      </div>
                   </div>
                   <div className='shipping'><button className='confirm-btn'>CONFIRM</button></div>
               </Col>
               </Row>
               <div className='submit-btn-div'>
               <button className='btn-confirm'>Confirm</button>
               <button className='btn-cancel' >Cancel</button>
               </div>
           </div>
        </div>
        </div>
    )
}

export default ProductDetails


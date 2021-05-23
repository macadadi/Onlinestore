import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'
import Checkout from './Checkout'
import './productdetails.css'

function ProductDetails({tooggleIsOpen }) {
    const cart = useSelector(state=>state.products)
    let total=0;

    const culcTotal =()=>{
     cart.cart.map((product)=>{
         total += parseFloat(product.price)})
         if(total > 0 ){
            
            console.log(' test passed')
        }
    }
    
    culcTotal()
 
    return (
        <div className='popup'>
        <div className='box'>
          { console.log('total is two ',total)}
            <div className='checkout-body'>
           
                <Row>
                <Col  md="6" className='checkout-left'>
                <h1>Checkout</h1>
                    {cart.cart && cart.cart.map((product,index)=> <Checkout tooggleIsOpen={tooggleIsOpen} key={index} title={product.title}  price={product.price} id={product.id}/>)}
                    <div className='checkout-total'>
                   <h4>TOTAL :</h4> <h5> ksh. {total.toFixed(2)}</h5> 
                   </div>
               </Col> 
               <Col  md="6" className='checkout-right'>
                   <div className='account'><h3>Credit Card Details</h3>
                      <div className='card-input'>
                          <div>
                              <h5>CARD HOLDER</h5>
                              <input type='text'  placeholder='Card Holder' required/>
                          </div>
                          <div>
                              <h5>EXPIRATION DATE</h5>
                              <div className='card-date'>
                              <input type='text'  placeholder='MM' required/>
                              <input type='text'  placeholder='YY' required/>
                              </div>
                          </div>
                      </div>
                      <div className='card-input'>
                          <div>
                              <h5>CARD NUMBER</h5>
                              <input type='text'  placeholder='Card Number'required/>
                          </div>
                          <div>
                              <h5 >cvc</h5>
                              <input className='card-date' type='text'  placeholder='cvc' required/>
                          </div>
                      </div>
                   </div>
                   <div className='shipping'><button className='confirm-btn'>CONFIRM</button></div>
               </Col>
               </Row>
               <div className='submit-btn-div'>
               <button className='btn-confirm'>Confirm</button>
               <button className='btn-cancel' onClick={tooggleIsOpen }>Back</button>
               </div>
           </div>
        </div>
        </div>
    )
}

export default ProductDetails


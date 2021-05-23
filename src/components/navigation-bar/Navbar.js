import './navbar.css'
import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  Navbar,
  NavbarBrand,
  NavbarText
} from 'reactstrap';
import { useSelector } from 'react-redux';
import ProductDetails from '../Body/ProductDetails';
function Header() {
  const cart = useSelector(state=>state.products.cart)
  const [isOpen,setIsOpen]=useState(false)

  const tooggleIsOpen=()=>{
    setIsOpen(!isOpen)
    console.log('you clicked',isOpen)
  }

  



    return (
        <>
        <Navbar color="light" light expand="md"  className='navbar-main sticky-top'>
        <NavbarBrand href="/">Online Shop</NavbarBrand>
        <div className="cart-stick">
   <NavbarText onClick={tooggleIsOpen}><ShoppingCartIcon/> 
   {cart.length < 1 ? `Empty` : cart.length === 1 ? `${cart.length} item` : `${cart.length} items`} </NavbarText>
        </div>
      </Navbar>
      <div>{isOpen && cart.length > 0 && <ProductDetails tooggleIsOpen={tooggleIsOpen}/>}</div>
      </>
      
    )
}

export default Header

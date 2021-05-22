import React from 'react'

function Checkout({title,price}) {
    return (
        <div className='checkout-prop'>
           <h4>{title}</h4> <p>{price}</p>
        </div>
    )
}

export default Checkout

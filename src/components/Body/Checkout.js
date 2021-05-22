import React from 'react'

function Checkout({title,price}) {
    return (
        <div className='checkout-prop'>
           <h4>{title}</h4> <p>{price}</p>
           <button className='delete-btn'>X</button>
        </div>
    )
}

export default Checkout

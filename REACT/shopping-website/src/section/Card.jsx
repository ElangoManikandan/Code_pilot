import React from 'react'
import '../Styles/card.css'
import Product from './Product'
function Card(props) {
  return (
        <div className="top-deals-card-div">
        <img src={props.image} alt="" />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p><b>Price:</b>{props.price}</p>
        <button onClick={Product.addToCart}>Add to Cart</button>
        {/* <button>Buy Now</button> */}
    </div>
  )
}

export default Card
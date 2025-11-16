import Card from './Card'
import shirt from '../assets/shirt.png'
import { useState } from 'react'
function TopDeals() {

  const [topProducts,setTopProducts]=useState([])

    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setTopProducts(data))
  return (
    <>
    <h1>Top Deals </h1>
    <div className='top-deals-div'>
      {
        // topProducts.filter((product)=>product.id %2 !=0)
      topProducts.map((product)=>{return <Card key={product.id} name={product.title} image={product.image} price={product.price} description={product.description}/>})}
    </div>
    </>
  )
}

export default TopDeals
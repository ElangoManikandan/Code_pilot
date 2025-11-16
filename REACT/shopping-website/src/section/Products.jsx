import Product from "./Product"
import shirt from "../assets/shirt.png"
import '../Styles/Products.css'
import { useState } from "react"
function Products() {
  const[products,setProducts]=useState([])
  
  fetch("https://fakestoreapi.com/products")
  .then(response=>response.json())
  .then(data=> setProducts(data))

  return (
    <>
    <h2>Products</h2>
    <div className="products">
    {products.map((product)=>{ return <Product key={product.id} name={product.name} image={product.image} price={product.price} description={product.description}/>} )}
    </div>
    </>
  )
}

export default Products
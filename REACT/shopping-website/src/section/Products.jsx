import Product from "./Product"
import shirt from "../assets/shirt.png"
import '../Styles/Products.css'
import { useState } from "react"
function Products() {
  //   const products_arr=[{
  //     id:1,
  //     name:"Shirt",
  //     description:"white collared shirt",
  //     price:"399",
  //     image:shirt
  //   },
  // {
  //   id:2,
  //   name:"Pant",
  //   description:"back pant",
  //   price:"399",
  //   image:shirt
  // },{
  //   id:3,
  //   name:"Goggles",
  //   description:"Great for Office Occasion",
  //   price:"399",
  //   image:shirt
  // },
  // {
  //   id:4,
  //   name:"T shirt",
  //   description:"black T",
  //   price:"399",
  //   image:shirt
  // },
  // {
  //   id:5,
  //   name:"Hoodie",
  //   description:"blue Colored",
  //   price:"399",
  //   image:shirt
  // },
  // {
  //   id:6,
  //   name:"Shirt with Tie",
  //   description:"Office Work",
  //   price:"399",
  //   image:shirt
  // }
  // ]
  const[products,setProducts]=useState([])
  fetch("https://fakestoreapi.com/products")
  .then(response=>response.json())
  .then(data=> setProducts(data))
  
  // const products=products_arr.map(
  //   (products_arr)=><Product name={products_arr.name} image={products_arr.image} price={products_arr.price} description={products_arr.description} />
  // ) 
  return (
    <>
    <h2>Products</h2>
    <div className="products">
    {/* <Product name="Shirt" image={shirt} description="white collared shirt" price="499" />
    <Product name="Shirt" image={shirt} description="white collared shirt" price="499" />
    <Product name="Shirt" image={shirt} description="white collared shirt" price="499" />
    <Product name="Shirt" image={shirt} description="white collare  d shirt" price="499" /> */}
    {/* {products} */}
    {products.map((product)=>{ return <Product key={product.id} name={product.name} image={product.image} price={product.price} description={product.description}/>} )}
    </div>
    </>
  )
}

export default Products
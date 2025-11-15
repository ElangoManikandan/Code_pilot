import '../Styles/Product.css'

function Product(props) {

  function addToCart(){

    let cart=localStorage.getItem("cart");
    console.log(cart);
    let empty=JSON.stringify([])
    if(!cart){
      localStorage.setItem("cart",empty)
    }
    empty=localStorage.getItem("cart");
    cart=JSON.parse(empty);
    cart.push(props);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Product Added!");
  }

  return (
    <div className="product-card-div">
        <h1>{props.name}</h1>
        <img src={props.image} alt="" />
        <p>{props.description}</p>
        <p><b>Price:</b>{props.price}</p>
        <button onClick={addToCart}>Add to Cart</button>
        <button>Buy Now</button>
    </div>
  )
}

export default Product
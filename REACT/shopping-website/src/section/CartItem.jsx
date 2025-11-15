import '../Styles/CartItem.css'
function CartItem(props) {
  return (
    <div className="cart-card-div">
        <h1>{props.name}</h1>
        <img src={props.image} alt="" />
        <p>{props.description}</p>
        <p><b>Price:</b>{props.price}</p>
    </div>
  )
}

export default CartItem
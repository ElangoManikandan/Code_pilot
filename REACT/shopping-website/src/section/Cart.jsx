import { useState, useEffect } from "react";
import CartItem from "./CartItem";
function Cart(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCartItems());
  }, []);

  const getCartItems = () => {
    const cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : [];
  };

  return (
    <>
      <h1>Cart</h1>
      <div className="products">
        {
          cart.map((product, index) => {
            return <CartItem
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description} />
          })
        }
      </div>
    </>
  )
}

export default Cart
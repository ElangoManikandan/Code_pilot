import shop from '../assets/cart.png'
import { Link }from 'react-router-dom'
import '../Styles/Header.css'
function Header() {
  return (
    <>
    <div className="navbar">
    <div className="navbar-left">
      <img src={shop} alt="" />
    </div>
    <div className='navbar-right'>
    <Link to="/" >Home</Link>
    <Link to="/TopDeals" >Top Deals</Link>
    <Link to="/Products" >Products</Link>
    <Link to="/cart" >Cart</Link>
    </div>
    </div>
    </>
  )
}

export default Header

import { Link }from 'react-router-dom'
import '../Styles/Header.css'
function Header() {
  return (
    <>
    <div className='navbar'>
    <Link to="/" >Home</Link>
    <Link to="/TopDeals" >Top Deals</Link>
    <Link to="/Products" >Products</Link>
    <Link to="/cart" >Cart</Link>
    </div>
    </>
  )
}

export default Header
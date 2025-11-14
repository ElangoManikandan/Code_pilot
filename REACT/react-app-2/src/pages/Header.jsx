import './Header.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return <>
    <div className='nav'>
        <Link to="/" style={{textDecoration:'none',fontSize:"20px"}}>Home</Link>
        <Link to="/computers" style={{textDecoration:'none' ,fontSize:"20px"}} >Computers</Link>
        <Link to="/smartphones" style={{textDecoration:'none' ,fontSize:"20px"}} >SmartPhones</Link>
        <Link to="/gadgets"  style={{textDecoration:'none' ,fontSize:"20px"}}>Gadgets</Link>
        <Link to="/about"  style={{textDecoration:'none' ,fontSize:"20px"}}>About</Link>
        <Link to="/contact"   style={{textDecoration:'none',fontSize:"20px"}}>Contact</Link>
    </div>
    </> 
}
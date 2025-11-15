import './App.css'
import Home from './section/Home'
import TopDeals from './section/TopDeals'
import Products from './section/Products'
import Cart from './section/Cart'
import Header from './Pages/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='app-div'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/TopDeals" element={<TopDeals/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

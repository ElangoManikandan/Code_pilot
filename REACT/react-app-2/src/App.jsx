import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import App1 from './App1'
import Header from './pages/Header'
import Home from './section/Home'
import About from './section/About'
import Contact from './section/Contact'
import Computers from './section/Computers'
import Smartphones from './section/Smartphones'
import Gadgets from './section/Gadgets'

function App(){
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            {/* <Header/> */}
            {/* <Route path="/" element={<App1/>}/> */}
            <Route path="/home" element={<Home/>}/>
            <Route path="/computers" element={<Computers/>}/>
            <Route path="/smartphones" element={<Smartphones/>}/>
            <Route path="/gadgets" element={<Gadgets/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default App
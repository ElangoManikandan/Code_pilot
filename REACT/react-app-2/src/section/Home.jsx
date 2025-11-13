import '../Styles/Home.css'
import img1 from '../assets/discounts.png'
import img2 from '../assets/offers.png'
// import img3 from '../assets/offer-logo.png'
export default function Home(){
    return (
        <>
        <h1>Welcome to Electronics Shop</h1>
        <h2>Shop the Latest Gadgets Today!</h2>
        <h1>Trending Now</h1>
        <div className='offer-image'><img src="" alt="" /></div>
        <div className="trending-poster">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        </div>
        </>
    )
}
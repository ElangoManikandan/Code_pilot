import '../Styles/card.css'
 function Card({ 
  title = "Food Title", 
  image = "https://picsum.photos/200", 
  content = "Content goes here", 
  price = "Price $" 
})
{
    return(
        <div className='card-div'>
        <div >
            <h1>{title}</h1>
        </div>
       <div>
          <img src={image} alt="" /> 
          </div>
        <br />  
        <div className='content'>
           {content}
        </div>
        <br />
        <div id='price'>
            {price}
        </div>
        
        </div>
    )
    
}
export default Card
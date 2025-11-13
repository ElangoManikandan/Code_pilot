import Card from '../Pages/Card'
import idly from '../assets/idly.jpg'
import dosa from '../assets/dosa.jpg'
import poori from '../assets/poori.jpg'

function FoodList() {

    const foods = [{
        title: "Idly",
         content: "Idly is an authentic South indian Food mostly for Breakfast.",
          price: "Rs.20/Plate", 
          image: idly
    },
    {
        title:"Dosa", 
        content:"Dosa is a Delicious ,Soft and Crispy food to Have at Dinner" ,
        price:"Rs.50/Plate" ,
        image:dosa
    },
    {
    title:"Poori", content:"Poori is a High Calorie,Energetic Food to have as breakfast.", price:"Rs.40/Plate", image:poori
    },{
        title:"Pongal",content:"Pongal is a Delicious food to eat in breakfast with Vada and Chutney",price:"Rs.30/Plate"
    }

    
]
const foodList=foods.map((foods)=><Card title={foods.title} content={foods.content} price={foods.price} image={foods.image}  />


)
return(
    <>
    {foodList}
    </>
)
}
export default FoodList
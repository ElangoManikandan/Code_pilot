import './App.css'
import Card from './Pages/Card'
import idly from './assets/idly.jpg'
import dosa from './assets/dosa.jpg'
import poori from './assets/poori.jpg'
import Counter from './Pages/Counter'
import FoodList from './Pages/FoodList'

function App() {
  return (  
    <>
      <section className='container'>
        {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      // </p> */}
      {/* <Card title="Idly" content="Idly is an authentic South indian Food mostly for Breakfast." price="Rs.20/Plate" image={idly}/>
      <Card title="Dosa" content="Dosa is a Delicious ,Soft and Crispy food to Have at Dinner" price="Rs.50/Plate" image={dosa}/>
      <Card title="Poori" content="Poori is a High Calorie,Energetic Food to have as breakfast." price="Rs.40/Plate" image={poori}/> */}
      <Card/>
      <FoodList/>
      <br />
      </section>
      <Counter/>
      </>
  )
}


export default App

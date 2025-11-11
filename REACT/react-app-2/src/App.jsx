import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Content from './pages/Content'
import './App.css'

function App() {
  
  let [count, changeCount] = useState(0)
  let login=false;
  let user="Elango";
  const increase=()=>{
    count=count+1;
    changeCount(count);
    console.log(count);
  }

  const decrease=()=>{
    count=count-1;
    changeCount(count);
  }
  const reset=
  ()=>{
    count=0;
    changeCount(count);
  }
   useEffect(()=>{
        console.log("Content")
})
    
  
  return (
    <>
    <Header/>
      <h1>Mobile Phones</h1>
      {login ? <h1>Welcome, {user}</h1>:<h1>Login first</h1>}
      <p>Count is {count} </p>
      <div className='btn'><img src="https://th.bing.com/th/id/OIP.-sT6bg6itEKdkYw58KpvUwHaHa?w=199&h=199&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3" alt="" /></div>
      <div className='btn'>
        <button onClick={increase}>Increase count</button>
        <button onClick={decrease}>Decrease count</button>
        <button onClick={reset}>Reset count</button>
      </div>
      <Content/>
      <Footer/>
    </>
  )
}

export default App;

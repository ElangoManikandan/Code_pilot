import React,{Component} from "react";

class Home extends Component{

    constructor(props){
        super(props);
        // this.name="Hello";
        // this.course="full Stack";
        // this.count=0;
        this.state = {count:0};
        // this.change=()=>{
        //     setCount(count+1)
        // }

        this.increment=this.increment.bind(this)
    }
    increment()
        {
            this.setState((prevState)=>({
                count:prevState.count+1,
            }))
        }

    render(){
        return(
            <>
            {/* <h1 style={{textAlign:"center"}}>This is a Home component.</h1>
            <h2 style={{textAlign:"center"}}>Name:{this.state},course:{this.course}</h2> */}
            <h1> value:{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            </>
        )
    }
} 
export default Home
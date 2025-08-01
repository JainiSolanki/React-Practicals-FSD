import { Component } from "react";
class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count : 0
        }
    }
    increment() {
        this.setState((prevState => ({
            count : prevState.count + 1
        }
        )), ()=>{console.log("callback", this.state.count)})
    }
    incrementby5() {
        this.increment()
            this.increment()
                this.increment()
                    this.increment()
                        this.increment()
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=>this.increment()}>Click Here</button>
                <button onClick={()=>this.incrementby5()}>Incr 5 </button>
                <button onClick={()=>this.setState({count:0})}>Reset</button>
            </div>
        )
    }
}

export default Counter;
import { Component } from "react";
class StateManager extends Component{
    constructor() {
        super()
        this.state = {
            message : "CHARUSAT!!!"
        }
    }
    changeMessage() {
        this.setState({
            message: "CSPIT-CSE!!!"
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome to -- {this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click Here</button>
            </div>
        )
    }
}
export default StateManager

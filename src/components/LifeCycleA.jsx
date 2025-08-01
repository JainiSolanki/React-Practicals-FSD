import { Component } from "react";
import LifeCycle1 from "./LifeCycleB";
class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dept:"CSE"
        }
        console.log("LifeCycle A - Constructor")
    }
    componentDidMount() {
        console.log("LifeCycle A - Component mount")
    }
    static getDerivedStateFromProps(props,state) {
        console.log("LifeCycle A - Derived state method")
        return null
    }
    render() {
        console.log("LifeCycle A - Render")
        //At first, Child Component's mount runs
        //componentDidMount runs at the end always 
        //Also, it does not get re-render, runs only once 
        return (
            <div>
                <h1>LifeCycle A</h1>
                <LifeCycle1/>
            </div>
        )
    }
}
export default LifeCycle;

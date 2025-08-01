import { Component } from "react";
class LifeCycle1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dept:"CSE"
        }
        console.log("LifeCycle B - Constructor")
    }
    componentDidMount() {
        console.log("LifeCycle B - Component mount")
    }
    static getDerivedStateFromProps(props,state) {
        console.log("LifeCycle B - Derived state method")
        return null
    }
    render() {
        console.log("LifeCycle B - Render")
        return (
            <div>
                <h1>LifeCycle B</h1>
            </div>
        )
    }
}
export default LifeCycle1;

/*function demo() {
    return (
        <div>
            <h1>Tradtitional Function</h1>
        </div>
    )
}*/
//props can also be de structured
//in parameters, we can also pass ({dept,inst})
//also, it can be stored in variable too and then use it 
//usage = {dept}, {inst};
const demo2 = (props) => {
    return (
        <div>
            <h1>Arrow Function - {props.dept} - {props.inst}</h1>
            {props.children}
        </div>
    )
}

export default demo2

/*function demo() {
    return (
        <div>
            <h1>Tradtitional Function</h1>
        </div>
    )
}*/

const demo2 = (props) => {
    return (
        <div>
            <h1>Arrow Function - {props.dept} - {props.inst}</h1>
            {props.children}
        </div>
    )
}

export default demo2

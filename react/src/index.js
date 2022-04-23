import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import "./style.css"


function soma(a, b){
    alert(a + b);
}

function primeiroJSX(){
    return(
        <div className="test">
            Olá Mundo
            <Button onClick={() => soma(10, 20)} name='Lucas Cadilhe' />
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
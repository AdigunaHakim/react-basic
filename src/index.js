import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
    const style = {backgroundColor:'green', color:'white'}
    const buttonText = 'click me';

    return(
        <div>
            <label for="name" className="label"> enter email </label>
            <input type="text"/>
            <button style={{backgroundColor:'green', color:'white'}}>
            { buttonText }
            </button>
            <button style={style}>click me</button>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
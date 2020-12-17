import React from 'react';
import './styles/Wellcome.css'
function Wellcome(props) {

    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}</h1>
                <p>Vamos a trabajar!</p>
            </div>
        </div>
    )
    
}

export default Wellcome
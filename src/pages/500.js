import React from 'react';
import '../components/styles/Errors.css'
import FatalErrorImg from '../images/500.png'

const FatalError = () => {
    <div className="text-center">
        <h1 className="Error-Text">Error 500</h1>
        <img src={FatalErrorImg} alt="Error 500" className="Error_Image"> </img>
    </div>
}

export default FatalError

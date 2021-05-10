import React from 'react';
import './SplashPage.css'
import splash from "../../images/SplashPage.jpeg"

const SplashPage = () => {
    return (
        <div className="splash-page">
            <img className="splash-image" src={splash}></img>
        </div>
    )
}

export default SplashPage

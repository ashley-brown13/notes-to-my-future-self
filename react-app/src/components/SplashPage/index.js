import React from 'react';
import './SplashPage.css'
import splash from "./SplashPage.jpeg"

const SplashPage = () => {
    return (
        <div className="splash-page">
            <img className="splash-image" src={splash} alt="lots of post-its"></img>
        </div>
    )
}

export default SplashPage

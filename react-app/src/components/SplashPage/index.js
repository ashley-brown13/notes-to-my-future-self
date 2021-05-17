import React from 'react';
import './SplashPage.css'
import splash from "./SplashPage.jpeg"

const SplashPage = () => {
    return (
        <div className="splash-page">
            <img className="splash-image" src={splash} alt="lots of post-its"></img>
            <div className="splash-paragraph">
                <p><b>Notes To My Future Self</b> is an application that helps you keep text, video, and music memories.
                    From warning yourself about tastless cookies, to remembering the night that a certain song
                    took your breath away, you decide what you want to tell your future self.
                </p>
                <p className="splash-signup">Signup today to start your online memory notebook!</p>
            </div>
        </div>
    )
}

export default SplashPage

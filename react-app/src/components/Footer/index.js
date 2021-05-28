import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <h3 className="contact-me">Contact Ashley:</h3>
            <div className="links">
                <a href="https://www.linkedin.com/in/ashleybrown121389/" target="_blank">LinkedIn</a>
                <a href="mailto:ashleybrown101789@gmail.com" target="_blank">Gmail</a>
                <a href="https://github.com/ashley-brown13" target="_blank">GitHub</a>
            </div>
        </div>
    )
}

export default Footer

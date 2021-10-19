import './header.scss';
import React from 'react';
import logo from "../../images/MenuImage.jpg"
import Feature from '../features/Feature';
import Register from '../registration/Register';
import Destinations from '../destinations/Destinations';
import Stuffs from '../stuffs/Stuffs';
// import ChatBot from '../chatbot/ChatBot.js';
import Footer from '../footer/Footer';

export default function Header() {
    return (
        <>
            <div className="header" id="header">
                <img className="headerImg" src={logo} alt="" />
                <div className="headerTitles">
                    <span className="headerTitle">Let your journey begins</span>
                    {/* <span className="headerSubTitle">We wish you have a pleasant flight</span> */}
                </div>

                <Feature />
                <Register />
                <Destinations />
                <Stuffs />
                <Footer />
                {/* <ChatBot /> */}
            </div>
            {/* <Feature /> */}
        </>
    )
}

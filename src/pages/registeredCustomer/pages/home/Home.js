// import React from 'react';
import './home.scss';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { init } from 'ityped';
import React, { useEffect, useRef } from "react";
import logo from '../../../../images/travel.png'

export default function Home() {

    const textReference = useRef();

    useEffect(() => {
        init(textReference.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: [" Happy browsing", "Have a great day", "Have a great time"],
            startDelay: 10,
            strings: [" Happy browsing ^_^", "Have a great day", "Have a great time"]
        })
    }, [])

    return (
        <>
            <div className="HomePage">
                <header className="hero">
                    <h1 className="hero-text">
                        Hi, welcome to
                        <span>  Sky Club :)</span>
                    </h1>
                    <span className='txtRef' >
                        <i className="far fa-hand-point-right"></i><span ref={textReference}> </span>
                    </span>
                    <div className="icons">
                        <Link className="icon-holder" >
                            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                        </Link>
                        <Link className="icon-holder">
                            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
                        </Link>
                        <Link className="icon-holder">
                            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                        </Link>
                        <Link className="icon-holder">
                            <FontAwesomeIcon icon={faWhatsapp} className="icon wa" />
                        </Link>
                        <Link className="icon-holder">
                            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                        </Link>
                    </div>
                    <a className="map" href="#">
                        <img src={logo} alt="" />
                    </a>
                </header>
            </div>
        </>
    )
}

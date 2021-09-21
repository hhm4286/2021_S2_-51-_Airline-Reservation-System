import './feature.scss';
import React from 'react'
import logo1 from '../../images/icons/fast-1.png';
import logo2 from '../../images/icons/reliability.png';
import logo3 from '../../images/icons/conversation.png';
import logo4 from '../../images/icons/deal.png';

export default function Feature() {
    return (
        <>
            <div className="features" id="features">
                <div className="featuresTitle">
                    What we are offering to our clients
                </div>
                <div className="featuresItems" id="feature">
                    <div className="featureWrapper">
                        <img className="fast" src={logo1} alt="" />
                        <img className="reliability" src={logo2} alt="" />
                        <img className="conversation" src={logo3} alt="" />
                        <img className="deals" src={logo4} alt="" />
                    </div>
                    <div className="featureWords">
                        <h2>Fast performance</h2>
                        <h2>Reliable and Secure</h2>
                        <h2>Customer support</h2>
                        <h2>Decent deals</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

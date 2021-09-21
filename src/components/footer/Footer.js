import './footer.scss';
import React from 'react';
import logo1 from '../../images/footer/facebook.png';
import logo2 from '../../images/footer/instagram.png';
import logo3 from '../../images/footer/twitter.png';
import logo4 from '../../images/footer/whatsapp.png';
import logo5 from '../../images/footer/linkedin.png';
import logo6 from '../../images/footer/copyright.png';

export default function Footer() {
    return (
        <>
            <div className="footer" id="footer">
                <div className="footerLeftSide">
                    <div className="bottomLeft">
                        Sky hub
                        <i className="footerIcon far fa-paper-plane"></i>
                    </div>
                    <span className="text">
                        To serve you is our main priority
                    </span>
                </div>
                <div className="footerCentre">
                    {/* socialMedia */}
                    <div className="socialMedia">
                        <div className="Follow">
                            Follow us on social media
                        </div>
                        <div className="socialMediaIcons">
                            <img className='fbIcon' src={logo1} alt="" />
                            <img className='fbIcon' src={logo2} alt="" />
                            <img className='fbIcon' src={logo3} alt="" />
                            <img className='fbIcon' src={logo4} alt="" />
                            <img className='fbIcon' src={logo5} alt="" />
                        </div>
                    </div>
                    {/* text */}
                    <div className="copyRight">
                        Copyright
                        <img className='cr' src={logo6} alt="" />
                        2021 Skyhub.com - All Rights Reserved.
                    </div>
                </div>
                <div className="footerRightSide">
                    <div className="components">About us</div>
                    <div className="components">Contact us</div>
                    <div className="components">Privacy policy</div>
                    <div className="components">Terms of use</div>
                    <div className="components">Login</div>
                </div>
            </div>
        </>
    )
}

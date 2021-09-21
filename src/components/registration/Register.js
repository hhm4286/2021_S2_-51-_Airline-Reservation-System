import './register.scss';
import React from 'react'
import logo from '../../images/tick.png'

export default function Register() {
    return (
        <>
            <div className="register" id="register">
                {/* wrapper 1 */}
                <div className="registerWrapperOne">
                    <div className="registerTitle">
                        Intrested in joining our club?
                    </div>
                    <h3 className="registerSubTitle">
                        Click the button below
                    </h3>
                    <button className="registerButton">
                        Get started
                    </button>
                </div>

                {/* wrapper 2 */}
                <div className="registerWrapperTwo">
                    <div className="wrapperTwoTitle">
                        Benefits:
                    </div>
                    <ul className="benefits">
                        <div className="items">
                            <img className='tickIcon' src={logo} alt="" />
                            <span className="firstList">Instant access to our special features</span>
                        </div>
                        <div className="items">
                            <img className='tickIcon' src={logo} alt="" />
                            <span className="secondList">Cheaper prices of tickets</span>
                        </div>
                        <div className="items">
                            <img className='tickIcon' src={logo} alt="" />
                            <span className="thirdList">Get in touch with our emails for great offers.</span>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

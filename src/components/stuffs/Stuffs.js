import './stuffs.scss';
import React from 'react'
import logo1 from '../../images/members/person1.jpg'
import logo2 from '../../images/members/person2.jpg'
import logo3 from '../../images/members/person3.jpg'
import logo4 from '../../images/members/person4.jpg'
import logo5 from '../../images/members/person5.jpg'
import logo6 from '../../images/members/person6.jpg'
import icon1 from '../../images/membersSocialMedia/facebook-1.png'
import icon2 from '../../images/membersSocialMedia/instagram-1.png'
import icon3 from '../../images/membersSocialMedia/twitter-1.png'


export default function Stuffs() {
    return (
        <>
            <div className="stuffs" id="stuffs">
                <div className="stuffTitle">
                    <div className="mySquad">The squad</div>
                    <h1 className="stuffz">Get in touch with our experienced employees </h1>
                </div>
                <div className="stuffWrapperOne">
                    <div className="stuff">
                        <img className='person1' src={logo1} alt="" />
                        <h3>Sally Hawks</h3>
                        <span>CEO and founder</span>
                        <div className="icons">
                            <img className="icons" src={icon1} alt="" />
                            <img className="icons" src={icon2} alt="" />
                            <img className="icons" src={icon3} alt="" />
                        </div>
                    </div>
                    <div className="stuff">
                        <img className='person2' src={logo2} alt="" />
                        <h3>Jonathan nguyen</h3>
                        <span>Web designer</span>
                        <div className="icons">
                            <img className="icons" src={icon1} alt="" />
                            <img className="icons" src={icon2} alt="" />
                            <img className="icons" src={icon3} alt="" />
                        </div>
                    </div>
                    <div className="stuff">
                        <img className='person3' src={logo3} alt="" />
                        <h3>Hannah hub</h3>
                        <span>Web designer</span>
                        <div className="icons">
                            <img className="icons" src={icon1} alt="" />
                            <img className="icons" src={icon2} alt="" />
                            <img className="icons" src={icon3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="stuffWrapperTwo">
                    <div className="stuff">
                        <img className='person4' src={logo4} alt="" />
                        <h3>James Hooper</h3>
                        <span>Software engineer</span>
                        <div className="icons">
                            <img className="icons" src={icon1} alt="" />
                            <img className="icons" src={icon2} alt="" />
                            <img className="icons" src={icon3} alt="" />
                        </div>
                    </div>
                    <div className="stuff">
                        <img className='person5' src={logo5} alt="" />
                        <h3>Kelly Way</h3>
                        <span>Web developer</span>
                        <div className="icons">
                            <img className="icons" src={icon1} alt="" />
                            <img className="icons" src={icon2} alt="" />
                            <img className="icons" src={icon3} alt="" />
                        </div>
                    </div>
                    <div className="stuff">
                        <img className='person6' src={logo6} alt="" />
                        <h3>Bryan Lee</h3>
                        <span>Manager</span>
                        <div className="icons">
                            <img className="icons" src={icon1} alt="" />
                            <img className="icons" src={icon2} alt="" />
                            <img className="icons" src={icon3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

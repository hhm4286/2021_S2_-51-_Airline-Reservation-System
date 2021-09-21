import React from 'react'
import avatar from '../../images/travel.png'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <div className="NavBar">
                <nav className="nav">

                    <div className="profile">
                        <img className='img1' src={avatar} alt="" />
                    </div>

                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink to='/Home' exact activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/CoronaTracker' exact activeClassName="active">
                                Covid-19 Tracker
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/WeatherChecker' exact activeClassName="active">
                                Weather Checker
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/BuyTicket' exact activeClassName="active">
                                Buy ticket
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' exact activeClassName="active">
                                Logout
                            </NavLink>
                        </li>
                    </ul>

                    <footer className="footer">
                        <p>
                            Sky hub @2021
                        </p>
                    </footer>

                </nav>
            </div>
        </>
    )
}

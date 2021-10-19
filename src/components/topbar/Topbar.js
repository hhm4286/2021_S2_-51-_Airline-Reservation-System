import React from 'react'; /* { useState } */
import './topbar.scss';
import { Link } from "react-router-dom";
// import ReorderIcon from "@material-ui/icons/Reorder";


export default function Topbar({ menuOpen, setMenuOpen }) {

    // const [openLinks, setOpenLinks] = useState(false);

    // const toggleTopbar = () => {
    //     setOpenLinks(!openLinks);
    // };

    return (
        <>
            <div className={"top " + (menuOpen && "active")}>
                <div className="topLeft">
                    <a href="#header" className="name">Sky hub</a>
                    <i className="topIcon far fa-paper-plane"></i>
                </div>
                <div className="topCentre "> {/* id={openLinks ? "open" : "close"} */}
                    <ul className="topList">
                        {/* <li className="topListItem2">Home</li> */}
                        <Link className="link" to="/">Home</Link>
                    </ul>
                    <ul className="topList">
                        {/* <li className="topListItem2">About</li> */}
                        <Link className="link" to="/cart">Cart</Link>
                    </ul>
                    <ul className="topList">
                        <Link className="link" to="/product">Product</Link>
                    </ul>
                    <ul className="topList">
                        <Link className="link" to="/categories">Categories</Link>
                    </ul>
                    <ul className="topList">
                        <Link className="link" to="/flight">Book a flight</Link>
                    </ul>
                    {/* <button onClick={toggleTopbar}>
                        <ReorderIcon />
                    </button> */}
                </div>
                <div className="topRight">
                    <button className="loginButton" variant="secondary">Login</button>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}> {/* onCLick to close the menu again */}
                        <span className='line1' ></span>
                        <span className='line2' ></span>
                        <span className='line3' ></span>
                    </div>
                </div>
            </div>
        </>
    )
}


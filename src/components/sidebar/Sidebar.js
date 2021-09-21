import React from 'react'
import './sidebar.scss';

export default function Sidebar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"sidebar " + (menuOpen && "active")}> {/* MUST add the a space next to menu */}
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#header">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#features">Features</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#register">Register</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#destinations'>Destinations</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#stuffs">Staffs</a>
                </li>
            </ul>
        </div>
    )
}

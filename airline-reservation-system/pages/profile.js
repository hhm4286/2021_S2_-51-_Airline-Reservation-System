import React from 'react'
import firebase from 'firebase/app';
import {verifyIdToken} from '../components/firebaseAdmin'; 
import nookies from 'nookies';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

function profile({session})
{
    if (session) 
    {
        return (
            
            <div className = "container">
                <Head><title>Profile - Skyhub</title></Head>
                <nav className = "navbar navbar-expand-lg navbar-light bg-light">
                    <a className = "navbar-brand" href="#">© Skyhub</a>
                    <button className = "navbar-toggler" 
                            type = "button" 
                            data-toggle = "collapse" 
                            data-target = "#navbarNav" 
                            aria-controls = "navbarNav" 
                            aria-expanded = "false" 
                            aria-label =  "Toggle navigation"
                    >       <span className = "navbar-toggler-icon"></span>
                    </button>
                    <div className = "collapse navbar-collapse" id="navbarNav">
                        <ul className = "navbar-nav">
                            <li className = "nav-item active">
                                <a className = "nav-link" href = "/">Home <span className = "sr-only"></span></a>
                            </li>
                            <li class = "nav-item">
                                <a className = "nav-link" href = "/bookings">Bookings</a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" href = "/covid">COVID-19</a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link" href = "/checkout">Checkout</a>
                            </li>
                        </ul>
                     </div>
                        <span className="navbar-text float-right position-static">Signed in as: {session}</span>
                </nav>

                <div className ="card">
                    <div className = "card-body">User Details
                    <input className = "form-control" type = "text" placeholder = {session} readOnly/>
                </div>
                
                <div className = "container-fluid align-items-center"></div>
                <button className = "btn btn-primary"
                onClick = {async () => {
                    await firebase.auth().signOut();
                    window.location.href = "/login";
                }} 
                type = "submit">Log out</button>
            </div>
        </div>
        )
    }
    else
    {
        return (
            <text>Loading...</text>
        )
    }
}

export async function getServerSideProps(context){
    try
    {
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);
        const {email} = token;
        return {
            props: {session: email}
        }
    }
    catch (err) 
    {
        context.res.writeHead(302, {location: "/login"})
        context.res.end();
        return {
            props: {}
        }
    }
}

export default profile;
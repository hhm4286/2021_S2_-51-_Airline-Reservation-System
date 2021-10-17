import React from 'react'
import { useAuth } from '../components/Authentication';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'next/dist/client/router';
import nookies from 'nookies'

export default function userprofile() {
    const {currentUser, logout} = useAuth();

    async function handleLogOut() {
        try{
            await logout();
            Router.push('/loginuser')
        }
        catch(error)
        {
            console.log(error)   
        }
    }

        currentUser.updateProfile({
            displayName : "456",
            photoURL : "number_456.jpg"
        }).then(function() {
            var displayName = currentUser.displayName;
            var photoURL = currentUser.photoURL
            var email = currentUser.email
            console.log(displayName)
            console.log(photoURL)
            console.log(email)
        }, function (error){
            console.log(error)
        })

        currentUser.updateEmail("gihun@456.com").then(() => {
            var email  = currentUser.email;
            console.log(email)
        }).catch((error) => {
            console.log(error)
        })
    

        if (currentUser)
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
                            <li className = "nav-item">
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
                        <span className = "navbar-text float-right position-static">Signed in as: {currentUser.email}</span>
                </nav>


                <div className ="card">
                ‎‎‎
                    <div className = "text-center">
                        <img src = {currentUser.photoURL} className = "rounded-circle mx-auto d-block" alt = "..."/>
                    </div>
                
                    <div className = "card-body">Email
                    <input className = "form-control" type = "text" placeholder = {currentUser.email} readOnly/>
                    ‎
                    Name
                    <input className = "form-control" type = "text" placeholder = {currentUser.displayName} readOnly/>
                </div>
                <div className = "container-fluid align-items-center"></div>
                <button className = "btn btn-primary"
                onClick = {handleLogOut}
                type = "submit">Log out</button>
            </div>
        </div>
            )
        }
        else{

            return(
                <text>Loading...</text>
            )
        }
}

export async function getServerSideProps() {
    return {
      props: {},
      redirect: '/',
    }
  }
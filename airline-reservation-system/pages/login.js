import Head from 'next/head';
import React, {useState} from "react"
import firebase from "firebase/app";
import "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
    <div>
        <Head><title>Log in - Skyhub</title></Head>

        <div className = "container-fluid">
            <nav className = "navbar navbar-expand-lg navbar-light bg-light">
                <a className = "navbar-brand" href = "#">© Skyhub</a>
                <div class = "collapse navbar-collapse" id = "navbarNavDropdown">
                    <ul className = "navbar-nav">
                        <li className = "nav-item active">
                            <a className = "nav-link" href="/">Home <span className = "sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className ="nav-link" href="/bookings">Booking</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/covid">COVID-19</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <div className = "d-flex justify-content-center align-items-center">
            <div className = "row">
                <div className = "col-md-0">
                    <div className = "card">
                    <div className = "card-header bg-primary text-white text-center">
                        <h3>To get started, enter your email and password</h3>
                    </div>
                        <div className = "card-body">
                            <form>
                                <label htmlFor = "exampleInputEmail1">Email address</label>
                                <input type = "email" 
                                    className ="form-control" 
                                    id = "emailAddress"
                                    aria-describedby = "emailHelp" 
                                    placeholder = "Email..." 
                                    value = {email}
                                    required
                                    onChange = {(e) => setEmail(e.target.value)}/>
                                <small id = "emailHelp" className = "form-text text-muted">‎‎</small>

                                <label htmlFor = "exampleInputEmail1">Password</label>
                                    <input type = "password" 
                                        className = "container"
                                        id = "password" 
                                        placeholder = "Password..." 
                                        value = {pass}
                                        required
                                        onChange = {(e) => setPass(e.target.value)}/>
                                        Don't have an account? <a href = "/signup" className = "text-decoration-none">Sign up</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className = "form-row text-center">
            <button className = "btn btn-primary" 
                    disabled = {email === "" || password === ""}
                    onClick = {async () => {
                        await firebase.auth().signInWithEmailAndPassword(email, pass).then(function()
                        {
                            window.location.href = "/profile" // Change property value to redirect user to homepage
                        }).catch(function (error){
                            alert(error);
                            console.log(error);
                        }); 
                    }} 
                    type = "submit" 
                    className = "btn btn-primary">Continue</button>
            </div>
    </div>
    )
}
import Head from 'next/head';
import React, {useState} from "react"
import firebase from "firebase/app";
import "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div>
            <Head><title>Sign up - Skyhub</title></Head>

            <div className = "container-fluid">
                <nav className = "navbar navbar-expand-lg navbar-light bg-light">
                <a className = "navbar-brand" href = "#">© Skyhub</a>
            <div className = "collapse navbar-collapse" id = "navbarNavDropdown">
                <ul className = "navbar-nav">
                    <li className ="nav-item active">
                        <a className ="nav-link" href = "/">Home <span className = "sr-only"></span></a>
                    </li>
                        <li className = "nav-item">
                            <a className = "nav-link" href = "/covid">COVID-19</a>
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

                                <label htmlFor = "usernameLabel">Name</label>
                                        <input 
                                        type = "username" 
                                        className = "form-control" 
                                        id = "userName" 
                                        aria-describedby = "userHelp" 
                                        placeholder = "Name..." 
                                   
                                        required
                                        />


                                    <label htmlFor = "exampleInputEmail1">Email address</label>
                                        <input 
                                        type = "email" 
                                        className = "form-control" 
                                        id = "emailAddress" 
                                        aria-describedby = "emailHelp" 
                                        placeholder = "Email..." 
                                        value = {email}
                                        required
                                        onChange = {(e) => setEmail(e.target.value)}/>
                                        <small id = "emailHelp" className = "form-text text-muted">‎‎</small>
                                        

                                    <label htmlFor = "password">Password (6 or more characters)</label>
                                        <input 
                                        type = "password" 
                                        className ="form-control" 
                                        id = "password" 
                                        placeholder = "Password..." 
                                        value = {pass}
                                        required
                                        onChange = {(e) => setPass(e.target.value)}/>
                                        Already have an account? <a href = "/loginuser" className = "text-decoration-none">Sign in </a>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className = "form-row text-center">
            <button onClick = {async () => {
                await firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(result){
                    window.location.href = "/profile"
                    return result.user.updateProfile({
                        displayName : document.getElementById("username").value
                    })
                }).catch(function (error) {
                    console.log(error)
                }) 
            }} 
            type = "submit" 
            className = "btn btn-primary">Sign up</button>
        </div>
    </div>
    )
}
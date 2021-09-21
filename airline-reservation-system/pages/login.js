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
        <h1 className = "row justify-content-center" img src = "Skyhub.png">Log in to Skyhub</h1>
        <Head><title>Sign in - Skyhub</title></Head>
                
            <div className = "row justify-content-center">
                <div className="row no-gutters">
                    <div className="col-md-1 col-xs-7">
                        <img className="img-fluid rounded mx-auto d-block" src="SkyHub.png" alt=""/>
                    </div>
                </div>
            </div>
   

        <div className = "container">
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
        </div>

        <div className = "container">
            <input 
                type = "password" 
                className = "container"
                id = "password" 
                placeholder = "Password..." 
                value = {pass}
                required
                onChange = {(e) => setPass(e.target.value)}/>
                Don't have an account? <a href = "/signup" className = "text-decoration-none">Sign up</a>
        </div>   

        <div className = "form-row text-center">
            <button className = "btn btn-primary" disabled = {email === "" || password === ""}
            onClick = {async () => {
            await firebase.auth().signInWithEmailAndPassword(email, pass).then(function()
            {
                alert("Welcome, " + email + "! Click OK to continue.")
                window.location.href = "/profile" // Change property value to redirect user to homepage
            }).catch(function (error){
                alert(error);
            }); 
       
        }} 
        type = "submit" 
        className = "btn btn-primary">Continue</button>
        <h1>
            Email: {email}</h1>
    </div>
    </div>
    )
}

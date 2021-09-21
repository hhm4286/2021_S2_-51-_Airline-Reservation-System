import Head from 'next/head';
import React, {useState} from "react"
import firebase from "firebase/app";
import "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import { useAuth }  from '../components/auth'

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div>
           <h1 className = "row justify-content-center">Join Skyhub today!</h1>
        <Head><title>Sign up - Skyhub</title></Head>

        <div className = "container">
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

        </div>
        
        <div className = "container">
        <label htmlFor = "password">Password (6 or more characters)</label>
            
            <input 
            
            type = "password" 
            className ="form-control" 
            id = "password" 
            placeholder = "Password..." 
            value = {pass}
            required
            onChange = {(e) => setPass(e.target.value)}/>
            Already have an account? <a href = "/login" className = "text-decoration-none">Sign in </a>
        </div>
    
        <div className = "form-row text-center">
        <button onClick = {async () => {
            await firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(){
                window.location.href = "/"
            }).catch(function (error) {
                const message = error.message;
            }) 
        }} 
        type= "submit" 
        className ="btn btn-primary">Submit</button>
        </div>
    </div>
    )
}
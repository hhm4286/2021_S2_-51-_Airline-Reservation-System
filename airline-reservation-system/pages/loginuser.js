import Head from 'next/head';
import React, {useState, useRef} from "react"
import "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../components/Authentication';

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            setError("")
            setLoading(true)
            await login(email, pass)
            window.location.href = "/userprofile"
        }
        catch (error) {
            setError(error)
            console.log("Error: " + error);
        }
        setLoading(false)
    }

    return (
    <div>
        <Head><title>Log in - Skyhub</title></Head>
        <div className = "container-fluid">
            <nav className = "navbar navbar-expand-lg navbar-light bg-light">
                <a className = "navbar-brand" href = "#">© Skyhub</a>
                <div className = "collapse navbar-collapse" id = "navbarNavDropdown">
                    <ul className = "navbar-nav">
                        <li className = "nav-item active">
                            <a className = "nav-link" href="/">Home <span className = "sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className ="nav-link" href="/bookings">Booking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/covid">COVID-19</a>
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
                        Enter your email and password to get started
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
                                    ref = {emailRef}
                                    onChange = {(e) => setEmail(e.target.value)}/>
                                <small id = "emailHelp" className = "form-text text-muted">‎‎</small>

                                <label htmlFor = "exampleInputEmail1">Password</label>
                                    <input type = "password" 
                                        className = "form-control"
                                        id = "password" 
                                        placeholder = "Password..." 
                                        value = {pass}
                                        required
                                        ref = {passwordRef}
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
                disabled = {loading}
                onClick = {handleSubmit} 
                type = "submit" 
                className = "btn btn-primary">Continue</button>
            </div>

    </div>
    )
}
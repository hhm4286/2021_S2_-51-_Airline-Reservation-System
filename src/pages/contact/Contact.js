import './contact.scss'
// import img1 from '../../images/airlines/airplane2.jpg'
import React, { useState } from 'react'

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            {/* <div className="left">
                <img src="assets/contract.png" alt="" />
            </div> */}
            <div className="contactHeading">
                <h3>Give us a feedback!</h3>
            </div>
            <hr />
            <hr />
            <hr />
            <form className="form"
                onSubmit={handleSubmit}>
                <input className="contactEmail" type="text" placeholder="Email" />
                <textarea placeholder="message"></textarea>
                <button type="submit">Send</button>
                {message && <span> We received your message, Thank you very much! </span>}
            </form>
        </div>
    )
}

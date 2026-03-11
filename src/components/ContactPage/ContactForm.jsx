import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";

import classes from './ContactForm.module.css';
import { useState } from "react";

export default function ContactForm() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [loading,setloading] = useState(false);
    
    function handleSubmit(e) {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_SERVICE_ID
        const templateId = import.meta.env.VITE_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_PUBLIC_KEY

        if(name === "" || message === "" || email === "" || !email.includes('@')) {
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        }

        setloading(true);
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', response);
                setName('');
                setEmail('');
                setMessage('');
                setloading(false);
            })
            .catch((error) => {
                console.log('Error sending email:', error);
                setloading(false);  
            })
    }

    return(
        <div className={classes.form}>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="name">Name</label>
                    <input type='text' id='name' required value={name} onChange={(e) => setName(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type='email' id='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea id='message' required value={message} onChange={(e) => setMessage(e.target.value)}/>
                </p>
                <button>{loading ? 'Sending...' : <>Send Message <IoIosSend /></>}</button>
            </form>
        </div>
    )
}

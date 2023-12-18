import React, { useEffect, useRef, useState } from "react";

import './ContactPage.scss'
import AnimatedLetters from "components/AnimatedLetters/AnimatedLetters";

const ContactPage = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const submitHandler = (event: any) => {
        event.preventDefault();
        console.log(formData);
        

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        },3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={submitHandler}>
                        <ul>
                            <li className="half">
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Enter your name" 
                                    required 
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </li>
                            <li>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter your email" 
                                    required 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </li>
                            <li>
                                <input 
                                    type="text" 
                                    name="subject"
                                    placeholder="Subject" 
                                    required 
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </li>
                            <li>
                                <textarea 
                                    placeholder="Message" 
                                    name="message" 
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                >

                                </textarea>
                            </li>
                            <button type="submit" className="flat-button">
                                Submit
                            </button>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
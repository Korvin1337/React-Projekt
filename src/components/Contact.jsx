import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = ({ isDarkMode }) => {

    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [specialist, setSpecialist] = useState('')


    /* Check that the strings are not empty */
    const validateString = (string) => {
        return string.trim() !== '';
    }

    /* Check email address with a regex, help of chatgpt */
    const validateEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }

    /* Checks if the contact information is correct or if something is wrong/missing, logs a fitting message. */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateString(fullName)) {
            console.log('Invalid full name. Please enter a valid full name');
            return;
        }

        if (!validateEmail(emailAddress)) {
            console.log('Invalid email. Please enter a valid email address');
            return;
        }

        if (!validateString(specialist)) {
            console.log('Invalid specialist, Please choose a valid specialist');
            return;
        }

        console.log(fullName);
        console.log(emailAddress);
        console.log(specialist);
        console.log('Validation complete!');
    }

    return (
        <section id="contact" className={`${isDarkMode ? 'dark-mode' : ''}`}>

            <div className="container">

                <div className="links">
                    <img className="dropdown-span-image" src={`/images/icon-house.svg`} alt="House Icon" />
                    <Link to="/" className="link-to">
                        <p className="links-text links-text-1">Homepage</p>
                    </Link>
                    <i className="fa-solid fa-angles-right"></i>
                    <Link to="/contact" className="link-to">
                        <p className="links-text links-text-2">Contact</p>
                    </Link>
                </div>

                <div className="contact-form">

                    <div className="text-content">
                        <h2 className="contact-us-h2">Contact Us</h2>

                        <div className="icon-content">
                            <div className="icon-img">
                                <img className="dropdown-span-image" src={`/images/icon-email.svg`} alt="Email Letter Icon" />
                            </div>
                            <div className="icon-txt">
                                <h3 className="icon-content-h2">Email us</h3>
                                <p className="p-text">Please feel free to drop us a line. We will respond as soon as possible.</p>
                                <a href="#" className="icon-content-link">
                                    <p className="link-text">Leave a message</p>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="icon-content">
                            <div className="icon-img">
                                <img className="dropdown-span-image" src={`/images/icon-careers.svg`} alt="Email Letter Icon" />
                            </div>
                            <div className="icon-txt">
                                <h3 className="icon-content-h2">Careers</h3>
                                <p className="p-text">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                                <a href="#" className="icon-content-link">
                                    <p className="link-text">Send an application</p>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* CHATGPT 4o HELP WITH FORM */}
                    {/* Handles the submit with the javascript function, Using states (onChange) to update the information(value) that gets sent to the function. */}
                    <div className="contact-form-content">
                        <form className="contact-form-form" onSubmit={handleSubmit}>
                            <h2 className="contact-form-h2">Get Online Consultation</h2>

                            <label className="input-label" htmlFor="fullName">
                                <p className="text-field">Full name</p>
                                <input type="text" id="fullName" className="input-text" placeholder="" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                            </label>

                            <label className="input-label" htmlFor="emailAddress">
                                <p className="text-field">Email Address</p>
                                <input type="email" id="emailAddress" className="input-text" placeholder="" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
                            </label>

                            <label className="input-label" htmlFor="specialist">
                                <p className="text-field">Specialist</p>
                                <select id="specialist" className="input-dropdown" value={specialist} onChange={(e) => setSpecialist(e.target.value)} required>
                                    <option value="" disabled></option>
                                    <option value="Cardiologist">Cardiologist</option>
                                    <option value="Dentist">Dentist</option>
                                    <option value="Therapist">Therapist</option>
                                </select>
                            </label>

                            <button type="submit" className="btn-primary input-button">Make an appointment</button>
                        </form>
                    </div>
                    {/* END OF CHATGPT 4o HELP WITH FORM */}

                </div>

            </div>

        </section>
    )
}

export default Contact
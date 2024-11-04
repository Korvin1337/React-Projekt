import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = ({ isDarkMode }) => {

    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [specialist, setSpecialist] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ fullName, emailAddress, specialist });
    }

    return (
        <section id="contact" className={`${isDarkMode ? 'dark-mode' : ''}`}>

            <div className="container">

                <div className="links">
                    <Link to="/" className="link-to">
                        <i className="fa-thin fa-house"></i>
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
                                <h2 className="icon-content-h2">Email us</h2>
                                <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
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
                                <h2 className="icon-content-h2">Careers</h2>
                                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                                <a href="#" className="icon-content-link">
                                    <p className="link-text">Send an application</p>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* CHATGPT HELP WITH FORM */}
                    <div className="contact-form-content">
                        <form className="contact-form-form" onSubmit={handleSubmit}>
                            <h2 className="contact-form-h2">Get Online Consultation</h2>

                            <label className="input-label">
                                <input type="text" className="input-text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            </label>

                            <label className="input-label">
                                <input type="email" className="input-text" placeholder="Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                            </label>

                            <label className="input-label">
                                <select className="input-dropdown" value={specialist} onChange={(e) => setSpecialist(e.target.value)} required>
                                    <option value="" disabled>Select Specialist</option>
                                    <option value="Cardiologist">Cardiologist</option>
                                    <option value="Dentist">Dentist</option>
                                    <option value="Therapist">Therapist</option>
                                </select>
                            </label>

                            <button className="input-button">Make an appointment</button>
                        </form>
                    </div>
                    {/* END OF CHATGPT HELP WITH FORM */}

                </div>

            </div>

        </section>
    )
}

export default Contact
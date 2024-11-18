import React, { useState } from 'react'

const Subscribe = ({ isDarkMode }) => {

    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    /* ChatGPT 4o made regex to checks for non white spaces, checks for @ and . symbol, checks for length, checks for end.  */
    const validateEmail = (email) => {
        if (email.length <= 0) return false
        const regex = /^[^\s@]{1,}@[^.\s@]{1,}\.[^\s@]{2,}.{0,47}$/;
        return regex.test(email);
    }
    /* End of ChatGPT 4o regex test */

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setIsSubmitted(true);
        } else {
            alert('Please enter a valid email adress.');
        }
    }


    return (
        <section id="subscribe" className={`${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="container">
                <div className="icon-bell-text">
                    <img className="icon-bell-image" src="/images/icon-bell.svg" alt="icon bell" />
                    <h3 className="subscribe-heading">Subscribe to our newsletter to stay informed about latest updates
                    </h3>
                </div>
                <div className="icon-bell-text-tablet-mobile">
                    <img className="icon-bell-image" src="/images/icon-bell.svg" alt="icon bell" />
                    <h3 className="subscribe-heading">Subscribe to our newsletter</h3>
                </div>
                {!isSubmitted ? (
                    <div className="subscribe-input-div">
                        <i className="fa-regular fa-envelope"></i>
                        <input type="email" className="subscribe-input" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <a id="email-button-inner" href="#" className="btn-primary" onClick={handleSubmit}>
                            <i className="center-text">
                                <span className="contact-span-text">Subscribe</span>
                            </i>
                        </a>
                    </div>) : (
                    <div className="subscribe-input-div">
                        <p className="center-text-subscribe">Thank you for subscribing!</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Subscribe
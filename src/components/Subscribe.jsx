import React from 'react'

const Subscribe = () => {
    return (
        <section id="subscribe">
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
                <div className="subscribe-input-div">
                    <i className="fa-regular fa-envelope"></i>
                    <input type="email" className="subscribe-input" placeholder="Your email" />
                        <a id="email-button-inner" href="#" className="btn-primary">
                            <i className="center-text">
                                <span className="contact-span-text">Subscribe</span>
                            </i>
                        </a>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
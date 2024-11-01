import React from 'react'

const Hero = ({isDarkMode}) => {
    return (
        <section id="hero" className={`${isDarkMode ? 'dark-mode' : ''}`}>

            <div className="container">
                <div className="headline">
                    <h1>Manage All Your Money in One App</h1>
                </div>

                <div className="content">
                    <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your
                        pocket.</p>
                    <div className="buttons">
                    { !isDarkMode ? (
                                    <>
                                    <a className="btn-download-app" href="#"><img src="/images/appstore.svg" alt="appstore" /></a>
                                    <a className="btn-download-app" href="#"><img src="/images/googleplay.svg" alt="googleplay" /></a>
                                    </>
                                ) : (
                                    <>
                                    <a className="btn-download-app" href="#"><img className="dark-mode-image" src="/images/appstore-dark.svg" alt="appstore" /></a>
                                    <a className="btn-download-app" href="#"><img className="dark-mode-image" src="/images/googleplay-dark.svg" alt="googleplay" /></a>
                                    </>
                                )}
                    </div>

                    <a href="#" className="discover-more">
                    { !isDarkMode ? (
                                    <img className="dropdown-hero-closed" src="images/next-btn.svg" alt="discover more button" />
                                ) : (
                                    <img className="dropdown-hero-closed" src="images/next-btn-dark.svg" alt="discover more button" />
                                )}
                        <span>Discover more</span>
                    </a>
                </div>

                <div className="images">
                    <img className="img-back" src="/images/iPhone-mybudget_desktop.svg" alt="iphone my budget" />
                    <img className="img-front" src="/images/iPhone-yourcards_desktop.svg" alt="iphone your cards" />
                </div>
            </div>

        </section>
    )
}

export default Hero
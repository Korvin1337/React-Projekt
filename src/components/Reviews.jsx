import React from 'react'

const Reviews = ({isDarkMode}) => {
    return (
        <section id="reviews" className={`${isDarkMode ? 'dark-mode' : ''}`}>

            <div className="container">
                <div className="h2-grid">
                    <h2>Clients are Loving Our App</h2>
                </div>
                <div className="review-box">
                    <div className="review-box-1">
                        <img className="icon-quotation" src="/images/icon-quote.svg" alt="quotation icon" />
                        <div className="stars">
                            <img src="/images/review-star-filled.svg" />
                            <img src="/images/review-star-filled.svg" />
                            <img src="/images/review-star-filled.svg" />
                            <img src="/images/review-star-filled.svg" />
                            <img src="/images/review-start-unfilled.svg" />
                        </div>
                        <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere
                            rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit.
                            Montes justo turpis sit amet.</p>
                        <div className="portrait">
                            <img src="/images/icon-portrait-1.svg" alt="icon size portrait of woman" />
                            <div className="name-reviewer">
                                <h3>Fannie Summers</h3>
                                <p>Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-box-2">
                        <img className="icon-quotation" src="/images/icon-quote.svg" alt="quotation icon" />
                        <div className="stars">
                            <img src="/images/review-star-filled.svg" />
                            <img src="/images/review-star-filled.svg" />
                            <img src="/images/review-star-filled.svg" />
                            <img src="/images/review-star-filled.svg" />
                            <img src="/images/review-star-filled.svg" />
                        </div>
                        <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl
                            bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor
                            tincidunt egestas eget nunc.</p>
                        <div className="portrait">
                            <img src="/images/icon-portrait-2.svg" alt="icon size portrait of woman" />
                            <div className="name-reviewer">
                                <h3>Albert Flores</h3>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Reviews
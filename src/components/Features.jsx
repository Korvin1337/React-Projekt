import React from 'react'

const Features = ({isDarkMode}) => {
    return (
        <section id="features-2" className={`${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="container">
                <div className="transfer-money">
                    <div className="text-icon-grid-area-2">
                        <h2>Make your money transfer simple and clear</h2>
                        <div className="check-text">
                            <img src="/images/check-circle.svg" alt="confirm within a circle" />
                            <p>Banking transactions are free for you</p>
                        </div>
                        <div className="check-text">
                            <img src="/images/check-circle.svg" alt="confirm within a circle" />
                            <p>No monthly cash commission</p>
                        </div>
                        <div className="check-text">
                            <img src="/images/check-circle.svg" alt="confirm within a circle" />
                            <p>Manage payments and transactions online</p>
                        </div>
                        <a id="learn-more-button" href="#" className="btn-primary">
                            <i className="center-text">
                                <span>Learn more <i className="fa-solid fa-arrow-right"></i></span>
                            </i>
                        </a>
                    </div>
                    <div className="image-grid-area-2">
                        <img src="/images/iPhone-money-transfer.svg" alt="iPhone transfer money" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="recieve-payment">
                    <div className="image-grid-area">
                        <img src="/images/iPhone-recieve-payment.svg" alt="iPhone recieve payment" />
                    </div>
                    <div className="text-icon-grid-area">
                        <h2>Receive payment from international bank details</h2>
                        <div className="payment-icons">
                            <img src="/images/icon-credit-payment.svg" alt="payment credit" />
                            <img src="/images/icon-cashback.svg" alt="payment recieve credit" />
                        </div>
                        <div className="payments-text">
                            <p className="text-width">Manage your payments online. Mollis congue egestas egestas
                                fermentum fames.</p>
                            <p className="text-width">A elementur and imperdiet enim, pretium etiam facilisi aenean quam
                                mauris.</p>
                        </div>
                        <a id="learn-more-button" href="#" className="btn-primary">
                            <i className="center-text">
                                <span>Learn more <i className="fa-solid fa-arrow-right"></i></span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
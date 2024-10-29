import React from 'react'

const Brands = () => {
    return (
        <section id="brands">


            <div className="container">
                <div id="brand-1">
                    <div className="brand-box">
                        <img src="/images/brand/brand.svg" alt="logoipsum brand" />
                    </div>
                </div>
                <div id="brand-2">
                    <div className="brand-box">
                        <img src="/images/brand/brand2.svg" alt="logoipsum brand" />
                    </div>
                </div>
                <div id="brand-3">
                    <div className="brand-box">
                        <img src="/images/brand/brand3.svg" alt="logoipsum brand" />
                    </div>
                </div>
                <div id="brand-4">
                    <div className="brand-box">
                        <img src="/images/brand/brand4.svg" alt="logoipsum brand" />
                    </div>
                </div>
                <div id="brand-5">
                    <div className="brand-box">
                        <img src="/images/brand/brand5.svg" alt="logoipsum brand" />
                    </div>
                </div>
                <div id="brand-6">
                    <div className="brand-box">
                        <img src="/images/brand/brand6.svg" alt="logoipsum brand" />
                    </div>
                </div>
            </div>

            <div className="container-2">
                <div className="images hidden">
                    <img className="img-back brand-img-phone" src="/images/iPhone-features.svg" alt="iphone features" />
                </div>

                <div className="features">
                    <div className="headline">
                        <h2>App Features</h2>
                        <p className="mtd-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat
                            mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis
                            fermentum, at nec lacus.</p>
                    </div>

                    <div className="content">
                        <div className="icon-wrapper">
                            <div className="icon-image">
                                <img src="/images/icon-payment.svg" className="icon-image" alt="payment icon" />
                                <div className="icon-text-content">
                                    <h5>Easy Payments</h5>
                                    <p className="icon-text">Id mollis consectetur congue egestas egestas suspendisse
                                        blandit justo.</p>
                                </div>
                            </div>
                            <div className="icon-image">
                                <img src="/images/icon-shield.svg" className="icon-image" alt="payment icon" />
                                <div className="icon-text-content">
                                    <h5>Data Security</h5>
                                    <p className="icon-text">Augue pulvinar justo, fermentum fames aliquam accumsan
                                        vestibulum non.</p>
                                </div>
                            </div>
                            <div className="icon-image">
                                <img src="/images/icon-statistics.svg" className="icon-image" alt="payment icon" />
                                <div className="icon-text-content">
                                    <h5>Cost Statistics</h5>
                                    <p className="icon-text">Mattis urna ultricies non amet, purus in auctor non. Odio
                                        vulputate ac nibh.</p>
                                </div>
                            </div>
                            <div className="icon-image">
                                <img src="/images/icon-support.svg" className="icon-image" alt="payment icon" />
                                <div className="icon-text-content">
                                    <h5>Support 24/7</h5>
                                    <p className="icon-text">A elementum, imperdiet enim, pretium etiam facilisi in
                                        aenean quam mauris.</p>
                                </div>
                            </div>
                            <div className="icon-image">
                                <img src="/images/icon-cashback.svg" className="icon-image" alt="payment icon" />
                                <div className="icon-text-content">
                                    <h5>Regular Cashback</h5>
                                    <p className="icon-text">Sit facilisis dolor arcu, fermentum vestibulum arcu
                                        elementum imperdiet eleifend.</p>
                                </div>
                            </div>
                            <div className="icon-image">
                                <img src="/images/icon-standards.svg" className="icon-image" alt="payment icon" />
                                <div className="icon-text-content">
                                    <h5>Top Standards</h5>
                                    <p className="icon-text">Faucibus cursus maecenas lorem cursus nibh. Sociis sit
                                        risus id. Sit facilisis dolor arcu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Brands
import React from 'react'

const Faq = () => {
    return (
        <section id="faq">
            <div className="container">
                <div className="questions">
                    <div className="text-questions">
                        <h2 className="text-questions-h2">Any questions? Check out the FAQs</h2>
                        <p className="text-questions-p">Still have unanswered questions and need to get in touch?</p>
                    </div>
                    <div className="question-boxes">
                        <div className="question-box-1">
                            <img src="images/icon-contact-phone.svg" alt="a ringing phone" />
                                <p className="question-box-p">Still have questions?</p>
                                <a className="question-box-a">
                                    <i className="blue-text-arrow">
                                        <span>Contact us <i className="fa-solid fa-arrow-right"></i></span>
                                    </i>
                                </a>
                        </div>
                        <div className="question-box-2">
                            <img className="question-box-image" src="images/icon-contact-messages.svg"
                                alt="text-message icon" />
                                <p className="question-box-p">Don't like phone calls?</p>
                                <a className="question-box-a">
                                    <i className="green-text-arrow">
                                        <span className="hover">Contact us <i className="fa-solid fa-arrow-right"></i></span>
                                    </i>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="tablet-text-questions">
                    <h2 className="text-questions-h2-1">Any questions?</h2>
                    <h2 className="text-questions-h2-2">Check out the FAQs</h2>
                    <p className="text-questions-p">Still have unanswered questions and need to get in touch?</p>
                </div>
                <div className="dropdown-questions">
                    <span className="dropdown-span-closed">
                        <h3 className="dropdown-span-h3">Is any of my personal information stored in the App?</h3>
                        <img className="dropdown-span-image" src="images/icon-dropdown-closed.svg"
                            alt="dropdown arrow closed" />
                    </span>
                    <span className="dropdown-span-closed">
                        <h3 className="dropdown-span-h3">What formats can I download my transaction history in?</h3>
                        <img className="dropdown-span-image" src="images/icon-dropdown-closed.svg"
                            alt="dropdown arrow closed" />
                    </span>
                    <span className="dropdown-span-open">
                        <div className="dropdown-span-h3-image">
                            <h3 className="dropdown-span-h3">Can I schedule future transfers?</h3>
                            <img className="dropdown-span-image" src="images/icon-dropdown-open.svg"
                                alt="dropdown arrow closed" />
                        </div>
                        <p className="dropdown-span-text">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et
                            consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa
                            cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida
                            adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt
                            suspendisse ut consequat.</p>
                    </span>
                    <span className="dropdown-span-closed">
                        <h3 className="dropdown-span-h3">When can I use Banking App services?</h3>
                        <img className="dropdown-span-image" src="images/icon-dropdown-closed.svg"
                            alt="dropdown arrow closed" />
                    </span>
                    <span className="dropdown-span-closed">
                        <h3 className="dropdown-span-h3">Can I create my own password that is easy for me to remember?
                        </h3>
                        <img className="dropdown-span-image" src="images/icon-dropdown-closed.svg"
                            alt="dropdown arrow closed" />
                    </span>
                    <span className="dropdown-span-closed">
                        <h3 className="dropdown-span-h3">What happens if I forget or lose my password?</h3>
                        <img className="dropdown-span-image" src="images/icon-dropdown-closed.svg"
                            alt="dropdown arrow closed" />
                    </span>
                </div>

                <div className="dropdown-questions-mobile">
                    <span className="dropdown-span-open">
                        <div className="dropdown-span-h3-image">
                            <h3 className="dropdown-span-h3">Is any of my personal information stored in the App?</h3>
                            <img className="dropdown-span-image" src="images/icon-dropdown-open.svg"
                                alt="dropdown arrow closed" />
                        </div>
                        <p className="dropdown-span-text p1">Nunc duis id aenean gravida tincidunt eu, tempor
                            ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing
                            gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus
                            non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
                            gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique
                            tincidunt suspendisse ut consequat.</p>
                        <p className="dropdown-span-text p2">Ornare senectus fusce dignissim ut. Integer
                            consequat in eu tortor, faucibus et lacinia
                            posuere. Turpis sit viverra lorem suspendisse
                            lacus aliquam auctor vulputate. Quis egestas
                            aliquam nunc purus lacus, elit leo elit facilisi.
                            Dignissim amet adipiscing massa integer.</p>
                    </span>
                    <span className="dropdown-span-closed">
                        <h3 className="dropdown-span-h3">What formats can I download my transaction history in?</h3>
                        <img className="dropdown-span-image" src="images/icon-dropdown-closed.svg"
                            alt="dropdown arrow closed" />
                    </span>
                    <span className="dropdown-span-closed">
                        <h3 className="dropdown-span-h3">Can I schedule future transfers?</h3>
                        <img className="dropdown-span-image" src="images/icon-dropdown-closed.svg"
                            alt="dropdown arrow closed" />
                    </span>
                    <span className="dropdown-span-closed">
                        <h3 className="dropdown-span-h3">When can I use Banking App services?</h3>
                        <img className="dropdown-span-image" src="images/icon-dropdown-closed.svg"
                            alt="dropdown arrow closed" />
                    </span>
                    <span className="dropdown-span-closed">
                        <h3 className="dropdown-span-h3">Can I create my own password that is easy for me to remember?
                        </h3>
                        <img className="dropdown-span-image" src="images/icon-dropdown-closed.svg"
                            alt="dropdown arrow closed" />
                    </span>
                    <span className="dropdown-span-closed">
                        <h3 className="dropdown-span-h3">What happens if I forget or lose my password?</h3>
                        <img className="dropdown-span-image" src="images/icon-dropdown-closed.svg"
                            alt="dropdown arrow closed" />
                    </span>
                </div>

                <div className="tablet-question-boxes">
                    <div className="question-box-1">
                        <img src="images/icon-contact-phone.svg" alt="a ringing phone" />
                            <p className="question-box-p">Still have questions?</p>
                            <a className="question-box-a">
                                <i className="blue-text-arrow">
                                    <span>Contact us <i className="fa-solid fa-arrow-right"></i></span>
                                </i>
                            </a>
                    </div>
                    <div className="question-box-2">
                        <img className="question-box-image" src="images/icon-contact-messages.svg"
                            alt="text-message icon" />
                            <p className="question-box-p">Don't like phone calls?</p>
                            <a className="question-box-a">
                                <i className="green-text-arrow">
                                    <span className="hover">Contact us <i className="fa-solid fa-arrow-right"></i></span>
                                </i>
                            </a>
                    </div>
                </div>

                <div id="contact-button">
                    <a id="contact-button-inner" href="#" className="btn-primary mobile">
                        <i className="center-text">
                            <span className="contact-span-text">Contact us now</span>
                        </i>
                    </a>
                </div>

            </div>

        </section>
    )
}

export default Faq
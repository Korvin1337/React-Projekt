import React, { useState, useEffect } from 'react';

const Faq = ({ isDarkMode }) => {
    /* ChatGPT 4o help add javascript to my old css/html code */
    const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    // Updates the state of the dropdowns, if it should be open or not */
    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Fetch FAQs from the API
    // Async function getting data from the API, throws error or returns the data
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFaqs(data);
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        };

        fetchFaqs();
    }, []);

    return (
        <section id="faq" className={`${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="container">
                <div className="questions">
                    <div className="text-questions">
                        <h2 className="text-questions-h2">Any questions? Check out the FAQs</h2>
                        <p className="text-questions-p">Still have unanswered questions and need to get in touch?</p>
                    </div>
                    <div className="question-boxes">
                        <div className="question-box-1">
                            <img src="/images/icon-contact-phone.svg" alt="a ringing phone" />
                            <p className="question-box-p">Still have questions?</p>
                            <a className="question-box-a">
                                <i className="blue-text-arrow">
                                    <span>Contact us <i className="fa-solid fa-arrow-right"></i></span>
                                </i>
                            </a>
                        </div>
                        <div className="question-box-2">
                            <img className="question-box-image" src="/images/icon-contact-messages.svg" alt="text-message icon" />
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
                    {/* Open or close the dropdown depending on it's state */}
                    {faqs.map((item, index) => (
                        <span className={`dropdown-span-${openIndex === index ? 'open' : 'closed'}`} key={item.id} onClick={() => toggleDropdown(index)}>
                            <div className="dropdown-span-h3-image">
                                <h3 className="dropdown-span-h3">{item.title}</h3>
                                {/* Check if darkmode or not, "conditional rendering". Change color of dropdown */}
                                {!isDarkMode ? (
                                    <img className="dropdown-span-image" src={`/images/icon-dropdown-${openIndex === index ? 'open' : 'closed'}.svg`} alt="dropdown arrow" />
                                ) : (
                                    <img className="dropdown-span-image" src={`/images/icon-dropdown-dark-${openIndex === index ? 'open' : 'closed'}.svg`} alt="dropdown arrow" />
                                )}
                            </div>
                            {openIndex === index && <p className="dropdown-span-text">{item.content}</p>}
                        </span>
                    ))}
                </div>

                <div id="contact-button" className="mobile-contact-button">
                    <a id="contact-button-inner" href="#" className="btn-primary mobile">
                        <i className="center-text">
                            <span className="contact-span-text">Contact us now</span>
                        </i>
                    </a>
                </div>

                <div className="tablet-question-boxes">
                    <div className="question-box-1">
                        <img src="/images/icon-contact-phone.svg" alt="a ringing phone" />
                        <p className="question-box-p">Still have questions?</p>
                        <a className="question-box-a">
                            <i className="blue-text-arrow">
                                <span>Contact us <i className="fa-solid fa-arrow-right"></i></span>
                            </i>
                        </a>
                    </div>
                    <div className="question-box-2">
                        <img className="question-box-image" src="/images/icon-contact-messages.svg"
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
    );
}

export default Faq

/* End of Chatgpt, Chatgpt4o converted my old code to work with the javascript code it made. */
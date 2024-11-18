import React, { useRef, useEffect } from 'react';

const Location = ({ isDarkMode }) => {
    /* ChatGPT 4o help google maps part */
    const mapRef = useRef(null)

    /* Using states to implement google maps showing a specific location of that map with a pin */
    useEffect(() => {
        const initMap = () => {
            const location = { lat: 37.7749, lng: -122.4194 }

            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 14,
                center: location,
            })

            new window.google.maps.Marker({
                position: location,
                map: map,
                title: 'Medical Center',
            })
        }

        if (window.google && window.google.maps) {
            initMap()
        } else {
            const script = document.createElement('script')
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap`
            script.async = true
            script.defer = true
            script.onload = initMap
            document.head.appendChild(script)
        }

    }, [])
    /* End of ChatGPT 4o help */

    return (
        <section id="location" className={`${isDarkMode ? 'dark-mode' : ''}`}>

            <div className="container">

                <div ref={mapRef} className="medical-center-picture google-maps" style={{ top: '1rem', width: '100%' }}>

                    {/*  PUT THE MAP HERE Chat GPT4o */}

                </div>

                <div className="medical-center-info">
                    <div className="medical-center-1">
                        <h2 className="medical-h2">Medical Center 1</h2>

                        <div className="medical-info-wrapper">
                            <img className="dropdown-span-image medical-info-img" src={`/images/icon-location.svg`} alt="Location Pin Icon" />
                            <p className="medical-text">4517 Washingston Ave, Manchester, Kentucky 39495</p>
                        </div>

                        <div className="medical-info-wrapper">
                            <img className="dropdown-span-image medical-info-img" src={`/images/icon-phone.svg`} alt="Phone Icon" />
                            <p className="medical-text">(406) 555-0120</p>
                        </div>

                        <div className="medical-info-wrapper">
                            <img className="dropdown-span-image medical-info-img medical-info-img-3" src={`/images/icon-time.svg`} alt="Clock Icon" />
                            <h3 className="medical-h3 medical-h3-1">Mon-Fri: </h3><p className="medical-text medical-text-2">9:00 am - 22:00 am</p>
                        </div>
                        <h3 className="medical-h3 medical-h3-2">Mon-Fri: </h3><p className="medical-text medical-text-3">9:00 am - 22:00 am</p>
                    </div>
                    <div className="medical-center-2">
                        <h2 className="medical-h2">Medical Center 2</h2>

                        <div className="medical-info-wrapper">
                            <img className="dropdown-span-image medical-info-img" src={`/images/icon-location.svg`} alt="Location Pin Icon" />
                            <p className="medical-text">2464 Royal Ln. Mesa, New Jersey 45463</p>
                        </div>

                        <div className="medical-info-wrapper">
                            <img className="dropdown-span-image medical-info-img" src={`/images/icon-phone.svg`} alt="Phone Icon" />
                            <p className="medical-text">(406) 544-0123</p>
                        </div>

                        <div className="medical-info-wrapper">
                            <img className="dropdown-span-image medical-info-img medical-info-img-3" src={`/images/icon-time.svg`} alt="Clock Icon" />
                            <h3 className="medical-h3 medical-h3-1">Mon-Fri: </h3><p className="medical-text medical-text-2">9:00 am - 22:00 am</p>
                        </div>
                        <h3 className="medical-h3 medical-h3-2">Mon-Fri: </h3><p className="medical-text medical-text-3">9:00 am - 22:00 am</p>
                    </div>

                    <div className="socials">
                        {/* Chatgpt 4o help add a href to images */}
                        {/* Help to style the images correctly while being links to their respective sites */}
                        <div className="socials-wrapper">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img className="socials-image" src="/images/icon-facebook.svg" alt="facebook icon" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <img className="socials-image" src="/images/icon-twitter.svg" alt="twitter icon" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img className="socials-image" src="/images/icon-instagram.svg" alt="instagram icon" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <img className="socials-image" src="/images/icon-youtube.svg" alt="youtube icon" />
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Location
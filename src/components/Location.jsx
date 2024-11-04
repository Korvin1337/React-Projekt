import React, { useRef, useEffect } from 'react';

const Location = ({ isDarkMode }) => {
    /* Chat gpt help google maps part */
    const mapRef = useRef(null)

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
    /* End of chatgpt help */

    return (
        <section id="location" className={`${isDarkMode ? 'dark-mode' : ''}`}>

            <div className="container">

                <div ref={mapRef} className="medical-center-picture google-maps" style={{ height: '400px', width: '100%' }}>

                    {/*  PUT THE MAP HERE */}

                </div>

                <div className="medical-center-info">
                    <div className="medical-center-1">
                        <h2 className="medical-h2">Medical Center 1</h2>
                        <i><p className="medical-text">4517 Washingston Ave, Manchester, Kentucky 39495</p></i>
                        <i><p className="medical-text">(406) 555-0120</p></i>
                        <i><h3 className="medical-h3">Mon-Fri: </h3><p className="medical-text">9:00 am - 22:00 am</p></i>
                        <h3 className="medical-h3">Mon-Fri: </h3><p className="medical-text">9:00 am - 22:00 am</p>
                    </div>
                    <div className="medical-center-2">
                        <h2 className="medical-h2">Medical Center 1</h2>
                        <i><p className="medical-text">2464 Royal Ln. Mesa,New Jersey 45463</p></i>
                        <i><p className="medical-text">(406) 544-0123</p></i>
                        <i><h3 className="medical-h3">Mon-Fri: </h3><p className="medical-text">9:00 am - 22:00 am</p></i>
                        <h3 className="medical-h3">Mon-Fri: </h3><p className="medical-text">9:00 am - 22:00 am</p>
                    </div>

                    <div className="socials">
                        <img className="socials-image" src="/images/icon-facebook.svg" alt="facebook icon" />
                        <img className="socials-image" src="/images/icon-twitter.svg" alt="twitter icon" />
                        <img className="socials-image" src="/images/icon-instagram.svg" alt="instagram icon" />
                        <img className="socials-image" src="/images/icon-youtube.svg" alt="youtube icon" />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Location
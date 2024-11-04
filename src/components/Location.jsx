import React from 'react'

const Location = ({ isDarkMode }) => {
  return (
    <section id="location" className={`${isDarkMode ? 'dark-mode' : ''}`}>

        <div className="container">

            <div className="medical-center-picture google-maps">
                {/* Interactive google maps location, zoom in, zoom out and pin set at the hospital */}
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
                    <i>Facebook</i>
                    <i>Twitter</i>
                    <i>Instagram</i>
                    <i>Youtube</i>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Location
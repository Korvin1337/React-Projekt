import React from 'react'

const Slider = () => {
    return (
        <section id="slider">
            <div className="headline">
                <h2>How Does It Work?</h2>
            </div>
            <div className="container">
                <img className="img-slider" src="images/iPhone-slider-1.svg" alt="how it works iPhone" />
                <img className="img-slider" src="images/iPhone-slider-2.svg" alt="how it works iPhone" />
                <img className="img-slider" src="images/iPhone-slider-3.svg" alt="how it works iPhone" />
            </div>
            <div className="container phone">
                <img className="img-slider" src="images/iPhone-slider-phone.svg" alt="how it works iPhone" />
            </div>
            <div className="bottomline desktop">
                <h3>Latest Transaction history</h3>
                <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque
                    hac in consectetur condimentum.</p>
            </div>

            <div className="bottomline tablet">
                <h3>Step 3. Transfers to people from your
                    contact list</h3>
                <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                    Pellentesque volutpat ligula est. Mattis fermentum, at nec
                    lacus.</p>
            </div>

            <div className="bottomline phone">
                <h3>Transfers to people from
                    your contact list</h3>
                <p>Proin volutpat mollis egestas. Nam luctus facilisis
                    ultrices. Pellentesque volutpat ligula est. Mattis
                    fermentum, at nec lacus.</p>
            </div>

        </section>
    )
}

export default Slider
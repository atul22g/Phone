import React from 'react'
import App from '../Apps/App/App';
import App2 from '../Apps/App2/App2';
import App3 from '../Apps/App3/App3';
import "./Slider.css";

const Slide1 = () => {
    return (
        <>
            <section>
            {/* one */}
                <section className='slider-container'>
                    <section className='slider-inside-container'>
                        <div className='slider-top-text'>Apps</div>
                        <section className='slider-icons'>
                            <App2 img="calc-icon" text="Calculator" />
                            <App img="#" text="app" />
                            <App3 img="#" text="app" />
                            <App img="#" text="app" />
                        </section>
                    </section>
                </section>
                
            {/* two */}
                <section className='slider-container'>
                    <section className='slider-inside-container'>
                        <div className='slider-top-text'>Website</div>
                        <section className='slider-icons'>
                            <App img="#" text="website" />
                            <App3 img="#" text="website" />
                            <App2 img="#" text="website" />
                            <App3 img="#" text="website" />
                        </section>
                    </section>
                </section>

            {/* Three */}
                <section className='slider-container'>
                    <section className='slider-inside-container'>
                        <div className='slider-top-text'>Projects</div>
                        <section className='slider-icons'>
                            <App2 img="#" text="Projects" />
                            <App3 img="#" text="Projects" />
                            <App img="#" text="Projects" />
                            <App2 img="#" text="Projects" />
                        </section>
                    </section>
                </section>

            </section>
        </>
    )
}

export default Slide1

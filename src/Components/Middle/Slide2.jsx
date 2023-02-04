import React from 'react'
import App from '../Apps/App/App';
import App2 from '../Apps/App2/App2';
import App3 from '../Apps/App3/App3';
import "./Slider.css";

const Slide2 = () => {
    return (
        <>
            <section>
                {/* one */}
                <section className='slider-container'>
                    <section className='slider-inside-container'>
                        <span className='slider-top-text'>Social Network</span>
                        <section className='slider-icons'>
                            <App3 img="#" text="SN" />
                            <App img="#" text="SN" />
                            <App2 img="#" text="SN" />
                            <App img="#" text="SN" />
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Slide2

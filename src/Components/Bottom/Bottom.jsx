import React from 'react'
import App from './../Reusable/Apps/App/App';
import App2 from './../Reusable/Apps/App2/App2';
import App3 from './../Reusable/Apps/App3/App3';
import './Bottom.css';

const Bottom = () => {
    return (
        <section id='bottom'>
            <App />
            <App2 />
            <App3 />
            <App />
        </section>
    )
}

export default Bottom

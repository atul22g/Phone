import React from 'react'
import App from './../Apps/App/App';
import App2 from './../Apps/App2/App2';
import App3 from './../Apps/App3/App3';
import './Bottom.css';

const Bottom = () => {
    return (
        <section id='bottom'>
            <App img="./app-icons/call.svg" />
            <App2 img="#" />
            <App3 img="#" />
            <App img="./app-icons/github.svg" />
        </section>
    )
}

export default Bottom

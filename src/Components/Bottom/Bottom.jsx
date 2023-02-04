import React from 'react'
import App from  './../Apps/App/App';
import App2 from './../Apps/App2/App2';
import App3 from './../Apps/App3/App3';
import './Bottom.css';

const Bottom = () => {
    return (
        <section id='bottom'>
            <App img="./Phone/static/media/call.a68268118bb94afa5911.svg"/>
            <App2 img="#" />
            <App3 img="#" />
            <App img="./Phone/static/media/github.b2294bccaa20da50b7d5.svg" />
        </section>
    )
}

export default Bottom

import React from 'react';
import './App.css';

const App = (props) => {
    return (
        <div className="app">
            {/* <to draggable="false" href="#" target="_blank" className="app-icon"> */}
            <section className="app-icon">
                <div className="app-img-container">
                    <div className="app-img-content" style={{ backgroundPosition: "0px -96px" }}>
                        <div className="app-img"  style={{ backgroundImage: `url(${props.img})` }} ></div>
                    </div>
                </div>
            </section>
            <div className="app-name"></div>
        </div>
    )
}

export default App

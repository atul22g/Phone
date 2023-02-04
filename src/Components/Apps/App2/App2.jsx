import React from 'react';
import './App2.css';

const App2 = (props) => {
    const appStyle = {
        backgroundImage: `url(${props.img})`
    }
    return (
        <div className="app app2">
            {/* <to draggable="false" href="#" target="_blank" className="app-icon"> */}
            <section className="app-icon">
                <div className="app-img-container">
                    <div className="app-img-content" style={{ backgroundPosition: "0px -96px" }}>
                        <div className="app-img" style={appStyle}></div>
                    </div>
                </div>
            </section>
            <div className="app-name">{props.text}</div>
        </div>
    )
}

export default App2

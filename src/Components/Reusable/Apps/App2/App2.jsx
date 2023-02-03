import React from 'react';
import './App2.css';

const App2 = () => {
    return (
        <div className="app app2">
            {/* <to draggable="false" href="#" target="_blank" className="app-icon"> */}
            <section className="app-icon">
                <div className="app-img-container">
                    <div className="img app-img-content" style={{backgroundPosition: "0px -96px"}}>
                    </div>
                    <div className="img app-img-bg light">
                    </div>
                </div>
            </section>
            <div className="app-name"></div>
        </div>
    )
}

export default App2

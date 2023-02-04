import { useState } from "react";
import './Top.css';

const Top = () => {
    const [time, setTime] = useState(0);
    const [battery, setBattery] = useState(0);

    // Time
    setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let day_night = "AM";
        if (hours > 12) {
            day_night = "PM";
            hours = hours - 12;
        }
        if (hours === 0) {
            hours = 12;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        // if (hours < 10) {
        //     hours = "0" + hours;
        // }
        let Time = hours + ":" + minutes + " " + day_night;
        setTime(Time);
    });

    // Battery
    navigator.getBattery().then(function (battery) {
        setBattery((battery.level * 100).toFixed(0) + "%")
    });



    return (
        <div id="top-status">
            {/* Signal */}
            <div className='top-signal'>
                <section id="top-status-signal">
                    <span className="signal signal-1"></span>
                    <span className="signal signal-2"></span>
                    <span className="signal signal-3"></span>
                    <span className="signal signal-4"></span>
                </section>
                <span id="top-status-connection">4G</span>
            </div>
            {/* Battery */}
            <figure className="battery">
                <span className="battery-icon">
                    <span className="battery-fullfill-con">
                        <span className="battery-fullfill" style={{ height: `calc(${battery} - 0.1%)` }}></span>
                    </span>
                </span>
                <span className="battery-percentage">{battery}</span>
            </figure>
            {/* Time */}
            <div id="top-status-center" className="top-status-content">
                <span id='time'>{time} </span>
            </div>
        </div>
    )
}

export default Top

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swipe.css";

// import required modules
import { EffectCards } from "swiper";
import Slide1 from './Slide1';
import Slide2 from './Slide2';
// import Slide3 from './Slide3';

const Middle = () => {
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><Slide1 /></SwiperSlide>
                <SwiperSlide><Slide2/></SwiperSlide>
                {/* <SwiperSlide><Slide3/></SwiperSlide> */}
            </Swiper>
        </>
    )
}

export default Middle

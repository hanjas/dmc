import React from 'react'

import city from '../images/city.svg';

export default function Info() {
    return (
        <div className="Home_info">
            <div className="Home_infoL">
                <div className="Info_title">We are working with</div>
                <div className="Info_main">500+ big and small business <br />worldwide.</div>
                <div className="Info_content">We work with ambitious organisations, combine our design thinking, digital expertise and creativity to build something great together.We work with ambitious organisations, combine our design thinking, digital expertise and creativity to build something great together.We work with ambitious organisations, combine our design thinking, digital expertise and creativity to build something great together.</div>
            </div>
            <div className="Home_infoR">
                <img src={city} alt="" />
            </div>
        </div>
    )
}

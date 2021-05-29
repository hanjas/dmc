import React from 'react'
import logo from '../logo.svg'
import rocket from '../images/rocket.png'

export default function HomeIntro() {
    return (
        <div className="Home_intro">
            <div className="Home_header">
                <div className="Home_logo">
                    <img src={logo} alt="DMC logo" />
                </div>
                <div className="Home_nav">
                    <div><a href="">Home</a></div>
                    <div><a href="">About</a></div>
                    <div><a href="">Works</a></div>
                    <div><a href="">Studio</a></div>
                </div>
            </div>
            <div className="Home_hero">
                <div className="Home_heroContext">
                    <div className="Hero_text">Digital Marketing</div>
                    <div className="Hero_img">
                        <img src={rocket} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

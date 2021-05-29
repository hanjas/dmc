import React from 'react'

import people from '../images/people.svg';

export default function BestSolution() {
    return (
        <div className="Home_bss">
            <div className="Home_bssContent">
                <div className="Home_bssL">
                    <div className="Bss_text">
                        <div className="Bss_header">Best Solution for your Small & Big Business</div>
                        <div className="Bss_body">We work with ambitious organisations, combine our design thinking, digital expertise and creativity to build something great together.We work with ambitious organisations, combine our design thinking, digital expertise and creativity to build something great together.We work with ambitious organisations, combine our design thinking, digital expertise and creativity to build something great together.</div>
                        <div className="Bss_btn">
                            <button>Know more</button>
                        </div>
                    </div>

                </div>
                <div className="Home_bssR">
                    <img src={people} alt="" />
                </div>
            </div>
        </div>
    )
}

import React from 'react'

import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';

export default function Works() {
    return (
        <div className="Home_works">
            <div className="Home_workContent">
                <div className="Work_header">Our latest work</div>
                <div className="Work_navbar">
                    <div><a href="">All works</a></div>
                    <div><a href="">Design</a></div>
                    <div><a href="">Development</a></div>
                    <div><a href="">Marketing</a></div>
                    <div><a href="">Application</a></div>
                    <div><a href="">Others</a></div>
                </div>
                <div className="Work_grid">
                    <div><img src={img1} alt="" /></div>
                    <div><img src={img2} alt="" /></div>
                    <div><img src={img3} alt="" /></div>
                    <div><img src={img4} alt="" /></div>
                    <div><img src={img5} alt="" /></div>
                    <div><img src={img6} alt="" /></div>
                </div>
                <div className="Work_btn">
                    <button>View more</button>
                </div>
            </div>
        </div>
    )
}

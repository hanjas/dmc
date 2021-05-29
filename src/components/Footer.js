import React from 'react'
import logoPurple from '../images/logo_purple.png'
import insta from '../images/insta.svg'
import behance from '../images/behance.svg'
import fb from '../images/fb.svg'
import dribbble from '../images/dribbble.svg'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_design">

            </div>
            <div className="Footer_content">
                <div className="Footer_ess">
                    <div className="Brand_icon">
                        <img src={logoPurple} alt="" />
                    </div>
                    <div className="Footer_essContent">
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.
                    </div>
                    <div className="Footer_essSocial">
                        <div className="Footer_essInsta"><img src={insta} alt="" /></div>
                        <div className="Footer_essBehance"><img src={behance} alt="" /></div>
                        <div className="Footer_essFb"><img src={fb} alt="" /></div>
                        <div className="Footer_essDribbble"><img src={dribbble} alt="" /></div>
                    </div>
                </div>
                <div className="Footer_list">
                    <div className="Footer_listHeader">Agency</div>
                    <div className="Footer_links">
                        <div>Home</div>
                        <div>About us</div>
                        <div>Works</div>
                        <div>Studio</div>
                        <div>Contact us</div>
                    </div>
                </div>
                <div className="Footer_list">
                    <div className="Footer_listHeader">Quick links</div>
                    <div className="Footer_links">
                        <div>Privacy policy</div>
                        <div>24/7 Support</div>
                        <div>Career</div>
                        <div>Terms & Condition</div>
                        <div>FAQ & Help</div>
                    </div>
                </div>
                <div className="Footer_list">
                    <div className="Footer_listHeader">Contact</div>
                    <div className="Footer_links contact">
                        <div>
                            KCN Height, Second Floor, #531 Section, Arman Layout,Noida
                        </div>
                        <div>
                            +751 365 23 5544<br/>
                            hello@dmcinfo.com

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Component } from "react";

import logo from '../image/logo.png';

class Brand extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="content">
                        <section className="section" id="band">
                            <div className="navbar">
                                <div className="header">
                                    <div className="logo">
                                        <a href="/"><img src={logo} alt="" /></a>
                                    </div>
                                    <ul className="menu">
                                        {/* <li><span href="" >TEAM</span></li>
                                        <li><span href="" >BRAND</span></li>
                                        <li><span href="" >LOGO</span></li>
                                        <li><span href="" >ABOUT US</span></li>
                                        <li><span href="" >CONTACT</span></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="brand-component">
                                <div className="layout" style={{ display: 'block' }}>
                                    <div className="brand">
                                        <div className="brand-name">Brand</div>
                                        <div className="brand-notes">Những hình ảnh biết nói, biết an ủi bạn lúc các bạn cần điều gì đó để nhìn lại,
                                            tịnh tâm và đi tiếp...</div>
                                    </div>
                                    <div className="brand-info">
                                        <div className="project-info">
                                            <img src="./image/project-01.jpg" alt="" />
                                            <div className="project-name">Project Minh Oanh Beauty</div>
                                            <div className="project-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                                                pariatur aut maxime explicabo, facere doloremque et eius doloribus, sunt beatae expedita
                                                excepturi vel voluptatibus assumenda consectetur. Maxime accusamus eius praesentium!</div>
                                            <div className="project-contact">
                                                <div className="project-location">
                                                    <div>Email</div>
                                                    <div>mddesign.tdd@gmail.com</div>
                                                </div>
                                                <div className="project-location">
                                                    <div>Phone</div>
                                                    <div>+84 969 57 64 66</div>
                                                </div>
                                                <div className="project-location">
                                                    <div>Address</div>
                                                    <div>54 Dương Quang Ham, Danang City</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-image">
                                            <img src alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Brand;
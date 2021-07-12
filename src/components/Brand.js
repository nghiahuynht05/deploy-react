import { Component } from "react";


class Brand extends Component {

    render() {
        return (
            <div>
                <div className="header" style={{ 'z-index': '99999', 'width': '100%', 'position': 'fixed', 'display': 'grid', 'grid-template-columns': '50% 50%' }}>
                    <div style={{ 'display': 'grid', 'grid-template-columns': '20% 80%' }}>
                        <a href="/"><img src='./logo.png' alt="" style={{ 'height': '100%', 'width': '100%' }} /></a>
                    </div>
                    <div style={{ 'display': 'grid', 'grid-template-columns': '80% 20%' }}>
                        <ul className="menu" style={{ 'top': '20px', 'z-index': '70', 'padding-inline-start': '0px' }}>
                            <li data-menuanchor="page-home" style={{ 'display': 'inline', 'padding': '8px 16px', 'cursor': 'pointer' }} >
                                <a href="#page-home">TEAM</a>
                            </li>
                            <li data-menuanchor="page-brand" style={{ 'display': 'inline', 'padding': '8px 16px', 'cursor': 'pointer' }} >
                                <a href="#page-brand">BRAND</a>
                            </li>
                            <li data-menuanchor="page-logo" style={{ 'display': 'inline', 'padding': '8px 16px', 'cursor': 'pointer' }} >
                                <a href="#page-logo">LOGO</a>
                            </li>
                            <li data-menuanchor="page-about" style={{ 'display': 'inline', 'padding': '8px 16px', 'cursor': 'pointer' }} >
                                <a href="#page-about">ABOUT US</a>
                            </li>
                            <li data-menuanchor="page-contact" style={{ 'display': 'inline', 'padding': '8px 16px', 'cursor': 'pointer' }} >
                                <a href="#page-contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="section" id="band">
                    <div className="container">
                        <div className="content">
                            <div className="brand-component">
                                <div className="layout" style={{ display: 'block' }}>
                                    <div className="brand" style={{ 'position': 'relative' }}>
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
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Brand;
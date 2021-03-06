import { Component } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import {
    Link
} from "react-router-dom";

import emailjs from 'emailjs-com';

import slider1 from '../image/slider-1.jpg';
import slider2 from '../image/slider-2.jpg';
import slider3 from '../image/slider-3.jpg';

import slidershow1 from '../image/logo-01.jpg';
import slidershow2 from '../image/logo-02.jpg';
import slidershow3 from '../image/logo-03.jpg';
import slidershow4 from '../image/logo-04.jpg';
import slidershow5 from '../image/logo-05.jpg';
import slidershow6 from '../image/logo-06.jpg';
import slidershow7 from '../image/logo-07.jpg';
import slidershow8 from '../image/logo-08.jpg';
import slidershow9 from '../image/logo-09.jpg';
import slidershow10 from '../image/logo-10.jpg';
import slidershow11 from '../image/logo-11.jpg';
import slidershow12 from '../image/logo-12.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            success: {
                done: true
            },
            disabled: false
        }

        this.showSlides = function (item) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[item].style.display = "block";
        }

    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["nameUser"]) {
            formIsValid = false;
            errors["nameUser"] = "Cannot be empty";
        }

        if (!fields["Specialization"]) {
            formIsValid = false;
            errors["Specialization"] = "Cannot be empty";
        }

        if (!fields["messageUser"]) {
            formIsValid = false;
            errors["messageUser"] = "Cannot be empty";
        }
        if (!fields["emailUser"]) {
            formIsValid = false;
            errors["emailUser"] = "Cannot be empty";
        }


        //Email
        if (!fields["emailUser"]) {
            formIsValid = false;
            errors["emailUser"] = "Cannot be empty";
        }

        if (typeof fields["emailUser"] !== "undefined") {
            let lastAtPos = fields["emailUser"].lastIndexOf('@');
            let lastDotPos = fields["emailUser"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["emailUser"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["emailUser"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["emailUser"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    handleClick = (item) => {
        let classClick = document.getElementById(item);
        let classCenter = document.getElementsByClassName('item-center');
        for (var i = 0; i < classCenter.length; i++) {
            classCenter[i].className = classCenter[i].className.replace("item-center", "item");
        }
        classClick.classList.remove('item');
        classClick.classList.add('item-center');

        switch (item) {
            case 'item1': {
                this.showSlides(0);
                break;
            }
            case 'item3': {
                this.showSlides(2);
                break;
            }
            default: {
                this.showSlides(1)
            }
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        let succes = {};
        if (this.handleValidation()) {

            emailjs.sendForm('service_scsrso7', 'template_nm8y44g', event.target, 'user_gjc6ySIbn2TU7HWFKlN21')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    succes["done"] = 'Send info success';
                    this.setState({ success: succes });
                    this.setState({ disabled: true });
                    console.log(error.text);
                });
        }

    }

    menuClick() {
        let burger = document.getElementById('burger'),
            nav = document.getElementById('main-nav');
        burger.classList.toggle('is-open');
        nav.classList.toggle('is-open');
    };

    itemClick() {
        let burger = document.getElementById('burger'),
            nav = document.getElementById('main-nav');
        console.log("ABC")
        burger.classList.remove('is-open');
        nav.classList.remove('is-open');
    }
    render() {
        return (
            <div>
                <div className="header" style={{ 'zIndex': '99999', 'width': '100%', 'position': 'fixed', 'display': 'grid', 'gridTemplateColumns': '50% 50%' }}>
                    <div style={{ 'display': 'grid', 'gridTemplateColumns': '25% 75%', 'gridTemplateRows': '100px' }}>
                        <a href="/" style={{ "margin": "auto" }}>
                            <div className='logo-menu'></div>
                        </a>
                    </div>
                    <div className="menu-nav">
                        <ul className="menu" style={{ 'top': '20px', 'zIndex': '70', 'paddingInlineStart': '0px' }}>
                            <li data-menuanchor="page-home" style={{ 'display': 'inline', 'cursor': 'pointer' }} >
                                <a href="#page-home">TEAM</a>
                            </li>
                            <li data-menuanchor="page-brand" style={{ 'display': 'inline', 'cursor': 'pointer' }} >
                                <a href="#page-brand">BRAND</a>
                            </li>
                            <li data-menuanchor="page-logo" style={{ 'display': 'inline', 'cursor': 'pointer' }} >
                                <a href="#page-logo">LOGO</a>
                            </li>
                            <li data-menuanchor="page-about" style={{ 'display': 'inline', 'cursor': 'pointer' }} >
                                <a href="#page-about">ABOUT US</a>
                            </li>
                            <li data-menuanchor="page-contact" style={{ 'display': 'inline', 'cursor': 'pointer' }} >
                                <a href="#page-contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>

                    <div className="menu-nav-mobi">
                        <button id="burger" className="open-main-nav" onClick={() => this.menuClick()} >
                            <span className="burger" ></span>
                        </button>
                        <nav className="main-nav" id="main-nav">
                            <ul>
                                <li data-menuanchor="page-home" style={{ 'display': 'inline', 'cursor': 'pointer' }} >
                                    <a href="#page-home" onClick={() => this.itemClick()}>TEAM</a>
                                </li>
                                <li data-menuanchor="page-brand" style={{ 'display': 'inline', 'cursor': 'pointer' }} >
                                    <a href="#page-brand" onClick={() => this.itemClick()}>BRAND</a>
                                </li>
                                <li data-menuanchor="page-logo" style={{ 'display': 'inline', 'cursor': 'pointer' }} >
                                    <a href="#page-logo" onClick={() => this.itemClick()}>LOGO</a>
                                </li>
                                <li data-menuanchor="page-about" style={{ 'display': 'inline', 'cursor': 'pointer' }} >
                                    <a href="#page-about" onClick={() => this.itemClick()}>ABOUT US</a>
                                </li>
                                <li data-menuanchor="page-contact" style={{ 'display': 'inline', 'cursor': 'pointer' }} >
                                    <a href="#page-contact" onClick={() => this.itemClick()}>CONTACT</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <ReactFullpage

                    //fullpage options
                    scrollingSpeed={1000} /* Options here */
                    scrollHorizontally={true}  /* Because we are using the extension */

                    render={({ state, fullpageApi }) => {
                        // const customStype = {
                        //     "font-family": "Gotham-Medium",
                        //     "font-weight": "bolder"
                        // }

                        return (
                            <ReactFullpage.Wrapper>

                                <section className="section" id="page-1" data-anchor="page-home">
                                    <div className="container">
                                        <div className="content">
                                            <div className="band">
                                                <div className="layout" >
                                                    <div className="banner-band">
                                                        <div style={{ textAlign: 'center' }}>
                                                            <div className="magic">Magic</div>
                                                            <div className="design">Design</div>

                                                        </div>
                                                        <div className="brand">Brand</div>
                                                    </div>
                                                    <div className="banner">
                                                        <div className="banner-info">
                                                            <div className="view-data">
                                                                <span>V??o th???i ??i???m c???c kh?? kh?? kh??n cho to??n th??? gi???i, ch??ng t??i mu???n l?? m???t m???t
                                                                    tr???i
                                                                    soi s??ng cho con ???????ng c??c doanh nghi???p.<br />Ng???n l???a ch??y s??ng l?? nh??? s??? b???n b???,
                                                                    ki??n ?????nh
                                                                    v?????t
                                                                    qua kh?? kh??n c???a ch??ng t??i. S??? ch??y s??ng h??n n???a khi ???????c c??c doanh nghi???p th???p
                                                                    th??m
                                                                    hi
                                                                    v???ng.</span>
                                                            </div>
                                                            <div className="char" />
                                                        </div>
                                                        <div className="banner-logo">
                                                            <div className="band-sun">
                                                                <div className="sun" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="section" id="page-2" data-anchor="page-brand">
                                    <div className="content" style={{ 'display': 'flex', 'flexWrap': 'nowrap', 'alignContent': 'center', 'justifyContent': 'center', 'alignItems': 'center' }}>
                                        <div className="brand" style={{ 'width': '100%' }}>
                                            <div className="layout-enhance">
                                                <div className="info">
                                                    <div className="detail">
                                                        <div className="image">BRAND</div>
                                                        <div className="brand-content">????? th????ng hi???u c?? th??? truy???n t???i ???????c gi?? tr??? c???t l???i c??ng
                                                            nh??
                                                            ch???t
                                                            l?????ng c???a s???n ph???m/ d???ch v??? ?????n v???i to??n b??? kh??ch h??ng v?? th??? tr?????ng b??n ngo??i,
                                                            doanh
                                                            nghi???p
                                                            c???n x??y d???ng h??nh ???nh v?? nh???n di???n th????ng hi???u ?????y ?????, m???nh m???.</div>
                                                        <a href="/brand" style={{ "margin": "auto" }}>
                                                            <div className='more-button'></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="slider-show">
                                                    {/* < SliderComponent /> */}
                                                    <div className="slideshow-container">
                                                        <div className="mySlides fade">
                                                            <img src={slider1} style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} alt='' />
                                                        </div>
                                                        <div className="mySlides fade" style={{ display: 'block' }}>
                                                            <img src={slider2} style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} alt='' />
                                                        </div>
                                                        <div className="mySlides fade">
                                                            <img src={slider3} style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className=" thumbnail">
                                                        <div className="item" id="item1" onClick={() => this.handleClick('item1')}>
                                                            <div className="image-01" />
                                                        </div>
                                                        <div className="item-center" id="item2" onClick={() => this.handleClick('item2')}>
                                                            <div className="image-02" />
                                                        </div>
                                                        <div className="item" id="item3" onClick={() => this.handleClick('item3')}>
                                                            <div className="image-03" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="section" id="page-3" data-anchor="page-logo">
                                    <div className="content" style={{ 'display': 'flex', 'flexWrap': 'nowrap', 'alignContent': 'center', 'justifyContent': 'center', 'alignItems': 'center' }}>
                                        <div className="logo" style={{ 'width': '100%' }}>
                                            <div className="layout-enhance">
                                                <div className="info">
                                                    <div className="detail">
                                                        <div className="image">LOGO</div>
                                                        <div className="brand-content">Logo mang l???i cho doanh nghi???p c???a b???n m???t b???n s???c, l??m cho
                                                            th????ng
                                                            hi???u c???a b???n tr??? n??n g???n b?? h??n, cung c???p n???n t???ng cho nh???ng n??? l???c x??yy d???ng th????ng
                                                            hi???u
                                                            trong t????ng lai c???a b???n v?? h??n th??? n???a!</div>
                                                        <a href="/logo" style={{ "margin": "auto" }}>
                                                            <div className='more-button'></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="slider-logo">
                                                    <div className="parent">
                                                        <div className="movingDiv">
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow1} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow2} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow3} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow12} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="parent">
                                                        <div className="movingDivDown">
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow4} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow5} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow6} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow11} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="parent">
                                                        <div className="movingDiv">
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow7} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow8} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow9} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow10} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="section" id="page-4" data-anchor="page-about">
                                    <div className="content" style={{ 'display': 'flex', 'flexWrap': 'nowrap', 'alignContent': 'center', 'justifyContent': 'center', 'alignItems': 'center' }}>
                                        <div className="aboutus" style={{ 'width': '100%', 'height': '100%' }}>
                                            <div className="layout-enhance-aboutus">
                                                <div className="info">
                                                    <div className="detail">
                                                        <div className="image"> ABOUT US</div>
                                                        <div className="brand-content">Ch??ng t??i tin r???ng m???i h??nh tr??nh ?????u ??i t??? nh???ng ?? t?????ng. Ch??ng
                                                            t??i
                                                            mu???n ???????c nghe nh???ng c??u chuy???n nh???ng ???p ??? v?? c??ng c??c b???n th???c hi???n n??. M???t s??? th???t
                                                            kh??ng
                                                            th??? ch???i c??i l?? ch??ng ta s??? kh??ng bi???t cu???i con ???????ng l?? ??i???u g?? khi kh??ng quy???t t??m ??i
                                                            h???t
                                                            con ???????ng ????.</div>
                                                        <div style={{ 'paddingTop': '5%' }}>
                                                            <button className="botton-type">
                                                                <Link to='/about'>
                                                                    <div className="button-text"><span>MORE...</span></div>
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="about-image">
                                                    <div className="image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="section" id="page-5" data-anchor="page-contact">
                                    <div className="content" style={{ 'display': 'flex', 'flexWrap': 'nowrap', 'alignContent': 'center', 'justifyContent': 'center', 'alignItems': 'center' }}>
                                        <div className="contact" style={{ 'width': '100%', 'height': '100%' }}>
                                            <div className="layout-enhance-contact">
                                                <div className="info">
                                                    <div className="us">C??ng ch??ng t??i ch???m t???i nh???ng c???m x??c!!!</div>
                                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                                        <label >Your name (T??n c???a b???n)
                                                            <input autoComplete="off" type="text" name='customer_name' value={this.state.fields["nameUser"]} onChange={this.handleChange.bind(this, "nameUser")} />
                                                            <span style={{ color: "red" }}>{this.state.errors["nameUser"]}</span><br />
                                                        </label>
                                                        <label >Your email (Email c???a b???n)
                                                            <input autoComplete="off" type="text" name='customer_email' value={this.state.fields["emailUser"]} onChange={this.handleChange.bind(this, "emailUser")} />
                                                            <span style={{ color: "red" }}>{this.state.errors["emailUser"]}</span><br />
                                                        </label>
                                                        <label >Specialization (Chuy??n ng??nh)
                                                            <input autoComplete="off" type="text" name='spacialization' value={this.state.fields["Specialization"]} onChange={this.handleChange.bind(this, "Specialization")} />
                                                            <span style={{ color: "red" }}>{this.state.errors["Specialization"]}</span><br />
                                                        </label>
                                                        <label >Your messgae (L???i nh???n c???a b???n)
                                                            <input autoComplete="off" type="message" name='message' value={this.state.fields["messageUser"]} onChange={this.handleChange.bind(this, "messageUser")} />
                                                            <span style={{ color: "red" }}>{this.state.errors["messageUser"]}</span><br />
                                                        </label>
                                                        <label>
                                                            <input type="submit" value="Send" onChange={this.handleChange.bind('success', "done")} disabled={this.state.disabled} />
                                                            <span style={{ color: "green" }}>{this.state.success["done"]}</span><br />
                                                        </label>
                                                    </form>
                                                </div>
                                                <div className="contact-image">
                                                    <div className="image"></div>
                                                </div>

                                                {/* </div> */}
                                            </div>
                                            <footer className="footer">
                                                <div className="header" style={{ 'zIndex': '99999', 'width': '100%', 'position': 'fixed', 'display': 'grid', 'gridTemplateColumns': '50% 50%' }}>
                                                    <div style={{ 'display': 'grid', 'gridTemplateColumns': '25% 75%', 'gridTemplateRows': '100px' }}>
                                                        <a href="/" style={{ "margin": "auto" }}>
                                                            <div className='footer-name'>Contact Info</div>
                                                            <div className='logo-menu'></div>
                                                        </a>

                                                    </div>
                                                    <div style={{ 'margin': 'auto' }}>
                                                        <ul className="menu" style={{ 'top': '20px', 'zIndex': '70', 'paddingInlineStart': '0px' }}>
                                                            <div>
                                                                <div className="address-info">
                                                                    <div>Email</div>
                                                                    <div>mddesign.tdd@gmail.com@gmail.com</div>
                                                                </div>
                                                                <div className="address-info">
                                                                    <div>Phone</div>
                                                                    <div>+84 969 57 64 66</div>
                                                                </div>
                                                                <div className="address-info" style={{ 'paddingRight': '0px' }}>
                                                                    <div>Adress</div>
                                                                    <div>54 D????ng Quang Ham, Danang City</div>
                                                                </div>
                                                            </div>
                                                            <div className="social-list">
                                                                <i className="fab fa-facebook-f fa-3x icon-social" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                                <i className="fab fa-instagram fa-3x icon-social" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                                <i className="fab fa-pinterest-p fa-3x icon-social" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                                <i className="fab fa-twitter fa-3x icon-social" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                                <i className="fab fa-tiktok fa-3x icon-social" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </footer>
                                        </div>
                                    </div>
                                </section>

                            </ReactFullpage.Wrapper >

                        );
                    }}
                />
            </div>
        )
    }
}

export default Home;
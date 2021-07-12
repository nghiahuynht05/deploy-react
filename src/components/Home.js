import { Component } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import {
    Link
} from "react-router-dom";

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
import logo from '../image/logo.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none'
        };
        this.showSlides = function (item) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[item].style.display = "block";
        }
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


    render() {
        return (
            <div>
                <div className="header" style={{ 'z-index': '99999', 'width': '100%', 'position': 'fixed', 'display': 'grid', 'grid-template-columns': '50% 50%' }}>
                    <div style={{ 'display': 'grid', 'grid-template-columns': '20% 80%' }}>
                        <a href="/"><img src='./logo.png' alt="" style={{ 'height': '100%', 'width': '100%' }} /></a>
                    </div>
                    <div style={{ 'display': 'grid', 'grid-template-columns': '80% 20%' }}>
                        <ul className="menu" style={{ 'font-size': '14px', 'top': '20px', 'z-index': '70', 'padding-inline-start': '0px' }}>
                            <li data-menuanchor="page1" style={{ 'display': 'inline', 'padding': '8px 16px', 'cursor': 'pointer' }} >
                                <a href="#page1">TEAM</a>
                            </li>
                            <li data-menuanchor="page2" style={{ 'display': 'inline', 'padding': '8px 16px', 'cursor': 'pointer' }} >
                                <a href="#page2">BRAND</a>
                            </li>
                            <li data-menuanchor="page3" style={{ 'display': 'inline', 'padding': '8px 16px', 'cursor': 'pointer' }} >
                                <a href="#page3">LOGO</a>
                            </li>
                            <li data-menuanchor="page4" style={{ 'display': 'inline', 'padding': '8px 16px', 'cursor': 'pointer' }} >
                                <a href="#page4">ABOUT US</a>
                            </li>
                            <li data-menuanchor="page5" style={{ 'display': 'inline', 'padding': '8px 16px', 'cursor': 'pointer' }} >
                                <a href="#page5">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ReactFullpage

                    //fullpage options
                    licenseKey={'YOUR_KEY_HERE'}
                    scrollingSpeed={1000} /* Options here */
                    scrollHorizontally={true}  /* Because we are using the extension */
                    scrollHorizontallyKey={'YOUR KEY HERE'}

                    render={({ state, fullpageApi }) => {
                        const customStype = {
                            "font-family": "Gotham-Medium",
                            "font-weight": "bolder"
                        }

                        return (
                            <ReactFullpage.Wrapper>

                                <section className="section" id="page1" data-anchor="page1">
                                    <div className="container">
                                        <div className="content">

                                            <div className="band">
                                                <div className="layout" style={{ display: 'block' }}>
                                                    <div className="banner-band">
                                                        <div style={{ 'display': 'grid', 'grid-template-columns': '1fr 1fr', 'grid-template-rows': 'auto' }}>
                                                            <div className="magic">
                                                                <span> Magis</span>
                                                                <div style={{ 'font-size': '42px', 'position': 'absolute', 'top': '15%', 'text-align': 'center', 'width': '50%', 'padding-top': '05%' }}>Brand</div>
                                                            </div>
                                                            <div className="design" id='design-with'>Design</div>

                                                        </div>
                                                    </div>
                                                    <div className="banner">
                                                        <div className="banner-info">
                                                            <div className="view-data">
                                                                <span>Vào thời điểm cực khì khó khăn cho toàn thế giới, chúng tôi muốn là một mặt
                                                                    trời
                                                                    soi sáng cho con đường các doanh nghiệp.<br />Ngọn lửa cháy sáng là nhờ sự bền bỉ,
                                                                    kiên định
                                                                    vượt
                                                                    qua khó khăn của chúng tôi. Sẽ cháy sáng hơn nữa khi được các doanh nghiệp thắp
                                                                    thêm
                                                                    hi
                                                                    vọng.</span>
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
                                <section className="section" id="page2" data-anchor="page2">
                                    <div className="brand">
                                        <div className="layout">
                                            <div className="info">
                                                <div className="detail">
                                                    <div className="image">BRAND</div>
                                                    <div className="brand-content">Để thương hiệu có thể truyền tải được giá trị cốt lỗi cũng
                                                        như
                                                        chất
                                                        lượng của sản phẩm/ dịch vụ đến với toàn bộ khách hàng và thị trường bên ngoài,
                                                        doanh
                                                        nghiệp
                                                        cần xây dựng hình ảnh và nhận diện thương hiệu đầy đủ, mạnh mẽ.</div>
                                                    <div style={{ 'padding-top': '5%' }}>
                                                        <button className="botton-type">
                                                            <Link to="/brand">
                                                                <div className="button-text"><span>MORE...</span></div>
                                                            </Link>
                                                        </button>
                                                    </div>
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
                                </section>
                                <section className="section" id="page3" data-anchor="page3">
                                    <div className="logo">
                                        <div className="layout">
                                            <div className="info">
                                                <div className="detail">
                                                    <div className="image">LOGO</div>
                                                    <div className="brand-content">Logo mang lại cho doanh nghiệp của bạn một bản sắc, làm cho
                                                        thương
                                                        hiệu của bạn trở nên gắn bó hơn, cung cấp nền tảng cho những nổ lực xâyy dựng thương
                                                        hiệu
                                                        trong tương lai của bạn và hơn thế nữa!</div>
                                                    <div style={{ 'padding-top': '5%' }}>
                                                        <button className="botton-type">
                                                            <Link to="/logo">
                                                                <div className="button-text"><span>MORE...</span></div>
                                                            </Link>
                                                        </button>
                                                    </div>
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
                                                            <div className="slideshow" onclick="window.open('./brand.html','_blank')">
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
                                </section>
                                <section className="section" id="page4" data-anchor="page4">
                                    <div className="aboutus">
                                        <div className="layout" style={{ height: '85%' }}>
                                            <div className="info">
                                                <div className="detail">
                                                    <div className="image"> About US</div>
                                                    <div className="brand-content">Chúng tôi tin rằng mọi hành trình đều đi từ những ý tưởng. Chúng
                                                        tôi
                                                        muốn được nghe những câu chuyện những ấp ủ và cùng các bạn thực hiện nó. Một sự thật
                                                        không
                                                        thể chối cãi là chúng ta sẽ không biết cuối con đường là điều gì khi không quyết tâm đi
                                                        hết
                                                        con đường đó.</div>
                                                    <div style={{ 'padding-top': '5%' }}>
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
                                </section>
                                <section className="section" id="page5" data-anchor="page5">
                                    <div className="contact">
                                        <div className="layout">
                                            <div className="info">
                                                <div className="us">Cùng chúng tôi chạm tới những cảm xúc!!!</div>
                                                <form action=''>
                                                    <label htmlFor="fname">Your name (Tên của bạn)</label>
                                                    <input autoComplete="off" type="text" id="fname" name="firstname" placeholder="" />
                                                    <label htmlFor="lname">Your email (Email của bạn)</label>
                                                    <input autoComplete="off" type="text" id="lname" name="lastname" placeholder="" />
                                                    <label htmlFor="lname">Specialization (Chuyên ngành)</label>
                                                    <input autoComplete="off" type="text" id="lname" name="lastname" placeholder="" />
                                                    <label htmlFor="lname">Your messgae (Lời nhắn của bạn)</label>
                                                    <input autoComplete="off" type="message" id="lname" name="lastname" placeholder="" />
                                                    <div>
                                                        <button className="botton-type" onclick="navToLink('more-about')" style={customStype}>
                                                            <div className="button-text"><span>Send</span></div>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="contact-image">
                                                <div className="image"></div>
                                            </div>

                                        </div>
                                    </div>
                                    <footer className="footer">
                                        <div className="footer-info">
                                            <div className="footer-info-name">Contact Info</div>
                                            <div className="footer-info-address">
                                                <div className="address-info">
                                                    <div>Email</div>
                                                    <div>mddesign.tdd@gmail.com@gmail.com</div>
                                                </div>
                                                <div className="address-info">
                                                    <div>Phone</div>
                                                    <div>+84 969 57 64 66</div>
                                                </div>
                                                <div className="address-info" style={{ 'padding-right': '0px' }}>
                                                    <div>Adress</div>
                                                    <div>54 Dương Quang Ham, Danang City</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer-image">
                                            <div className="logo">
                                                <a href="/"><img src={logo} alt="" /></a>
                                            </div>
                                            <div className="logo-social">
                                                <div className="social-info">
                                                    <i className="fab fa-facebook-f fa-5x" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                </div>
                                                <div className="social-info">
                                                    <i className="fab fa-instagram fa-5x" onClick={() => window.open("https://www.instagram.com/mdsportwear1902/", "_blank")}></i>
                                                </div>
                                                <div className="social-info">
                                                    <i className="fab fa-pinterest-p fa-5x" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                </div>
                                                <div className="social-info">
                                                    <i className="fab fa-twitter fa-5x" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                </div>
                                                <div className="social-info">
                                                    <i className="fab fa-tiktok fa-5x" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </footer>
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
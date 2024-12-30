import React from 'react'
import Slider from "react-slick";
import './banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import ban1 from '../../assets/iphone.png'
import ban2 from '../../assets/apple.png'
import ban3 from '../../assets/watch.jpg'
import ban4 from '../../assets/watch2.jpg'
import ban5 from '../../assets/head1.webp'
import ban6 from '../../assets/head2.jpg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >next </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >Prev </div>
    );
  }



const Banner = () => {
    var settings = {          /* copy-pasted the setting variable from react slick's site */
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
        infinite:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <section>
        <Container>
            <Row>
                <Col lg={3}>
                    <ul className='mainUl'>
                        <li className='firstLi'><a href="#">Woman’s Fashion <MdOutlineKeyboardArrowRight /></a></li>
                        <li><a href="#">Men’s Fashion <MdOutlineKeyboardArrowRight /></a></li>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Home & Lifestyle</a></li>
                        <li><a href="#">Medicine</a></li>
                        <li><a href="#">Sports & Outdoor</a></li>
                        <li><a href="#">Baby’s & Toys</a></li>
                        <li><a href="#">Groceries & Pets</a></li>
                        <li><a href="#">Health & Beauty</a></li>
                    </ul>
                </Col>
                <Col lg={{span:8 , offset:1 }} className="banSlide">
                    <Slider {...settings} >
                    <Row>
                        <Col lg={12}>
                            <div className="ban1">
                                <div className="banInside banLeft">
                                    <div className="banApple">
                                        <img src={ban2} alt="apple" className="img-fluid" /> 
                                        <span>iPhone 14 Series</span>
                                    </div>
                                    <h3>Up to 10% off Voucher</h3>
                                    <a href="#">Shop Now</a><FaArrowRight />                                  
                                </div>
                                <div>
                                    <img className="banImg img-fluid" src={ban1} alt="iphone" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} >
                            <img src={ban3} alt="" className="img-fluid banChange" />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} >
                            <img src={ban4} alt="" className="img-fluid banChange" />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} >
                            <img src={ban5} alt="" className="img-fluid banChange" />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} >
                            <img src={ban6} alt="" className="img-fluid banChange" />
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col lg={12} className="d-flex justify-content-center point">
                            <span><FaCircle /></span>
                            <span><FaCircle /></span>
                            <span><FaCircle /></span>
                            <span><FaCircle /></span>
                            <span><FaCircle /></span>
                        </Col>
                    </Row> */}                       

                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
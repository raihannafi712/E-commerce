import React from "react";
import './browse.css'
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import shape from '../../assets/shape.png'
import sign1 from '../../assets/phone.png'
import sign2 from '../../assets/sign2.png'
import sign3 from '../../assets/sign3.png'
import sign4 from '../../assets/sign4.png'
import sign5 from '../../assets/sign5.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="next" 
            onClick={onClick}>
            <FaArrowRight />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="next2"
        onClick={onClick}
      > <FaArrowLeft /> </div>
    );
  }



const Browse = () => {
    const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        };

  return (
    <section id="browse">
        <Container>
            <Row>
                <Col lg={3} className=" align-items-center salesOne">
                    <img src={shape} alt="shape"  />
                    <span>Categories</span>
                </Col>
            </Row>
            <Row className="salesTwo">
                <Col lg={5}>
                    <h3 className="head">Browse By Category</h3>
                </Col>
                <Col lg={7} className="d-flex justify-content-end align-items-center flashArrow">
                    {/* <span><FaArrowLeft /></span>
                    <span><FaArrowRight /></span> */}
                </Col>
            </Row>
            <Row className="line">
                <Col lg={12}>
                    <Slider {...settings}>
                        <div className="one">
                            <img src={sign1} alt="sign" />
                            <img src={sign2} alt="sign" />
                            <img src={sign3} alt="sign" />
                            <img src={sign4} alt="sign" />
                            <img src={sign5} alt="sign" />
                        </div>
                        <div className="one">
                            <img src={sign1} alt="sign" />
                            <img src={sign2} alt="sign" />
                            <img src={sign3} alt="sign" />
                            <img src={sign4} alt="sign" />
                            <img src={sign5} alt="sign" />
                        </div>
                        <div className="one">
                            <img src={sign1} alt="sign" />
                            <img src={sign2} alt="sign" />
                            <img src={sign3} alt="sign" />
                            <img src={sign4} alt="sign" />
                            <img src={sign5} alt="sign" />
                        </div>
                        <div className="one">
                            <img src={sign1} alt="sign" />
                            <img src={sign2} alt="sign" />
                            <img src={sign3} alt="sign" />
                            <img src={sign4} alt="sign" />
                            <img src={sign5} alt="sign" />
                        </div>
                        <div className="one">
                            <img src={sign1} alt="sign" />
                            <img src={sign2} alt="sign" />
                            <img src={sign3} alt="sign" />
                            <img src={sign4} alt="sign" />
                            <img src={sign5} alt="sign" />
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
  )
};

export default Browse;

import React from "react";
import "./sales.css"
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import shape from '../../assets/shape.png'
import temp from '../../assets/tempFrame.png'



const Sales = () => {

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2027 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + " : " + "    " + hours + " : "
//   + minutes + "   :   " + seconds + "     jj";

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


  return (
    <section id="sales">
        <Container>
            <Row>
                <Col lg={3} className=" align-items-center salesOne">
                    <img src={shape} alt="shape"  />
                    <span>Today's</span>
                </Col>
            </Row>
            <Row className="salesTwo">
                <Col lg={3}>
                    <h3 className="head">Flash Sales</h3>
                </Col>
                <Col lg={{span:4 , offset:0}}>
                    <Row className="counter">
                        <Col lg={3}>
                            <p>Days</p>
                        </Col>
                        <Col lg={3}>
                            <p>Hours</p>
                        </Col>
                        <Col lg={3}>
                            <p>Minutes</p>
                        </Col>
                        <Col lg={3}>
                            <p>Seconds</p>
                        </Col>
                    </Row>
                    <Row id="demo">
                        <Col lg={3}>
                            <span id="days"></span> <span className="colon">:</span>
                        </Col>
                        <Col lg={3}>
                            <span id="hours"></span> <span className="colon">:</span>
                        </Col>
                        <Col lg={3} className="minutes">
                            <span id="minutes"></span> <span className="colon">:</span>
                        </Col>
                        <Col lg={3} className="seconds">
                            <span id="seconds"></span> 
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} className="d-flex justify-content-end align-items-center flashArrow">
                    <span><FaArrowLeft /></span>
                    <span><FaArrowRight /></span>
                </Col>
            </Row>
            <Row className="offer">
                <Col lg={12} className="d-flex justify-content-center ">
                    <img src={temp} alt="" />
                </Col>
            </Row>
            <Row className="salesLast">
                <Col lg={12} className="d-flex justify-content-center btnMain">
                    <a href="#">View All Products</a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Sales;

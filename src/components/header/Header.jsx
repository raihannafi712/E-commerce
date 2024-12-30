import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { RiArrowDropDownLine } from "react-icons/ri";
import './header.css';


const Header = () => {
  return (
    <section id='head'>
        <Container>
            <Row>
                <Col lg={{span: 5 , offset:3}}>
                    <div class="headerMain">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
                </Col>
                <Col lg={{span: 2 , offset:2}}>
                    <div class="headerMain">
                        English <RiArrowDropDownLine />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Header
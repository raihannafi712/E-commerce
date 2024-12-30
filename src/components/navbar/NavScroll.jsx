import React from 'react'
import './NavScroll.css';
import {  Container, Form , Nav , Navbar , NavDropdown , Button  } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { FaSearch , FaRegHeart  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";



const NavScroll = () => {
  return (
    <Navbar expand="lg" className='navBg' >
    <Container>
      <Navbar.Brand href="#">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1" className='link' >Home</Nav.Link>
          <Nav.Link href="#action2" className='link'>Contact</Nav.Link>
          <Nav.Link href="#action2" className='link'>About</Nav.Link>
          <Nav.Link href="#action2" className='link'>Sign Up</Nav.Link>
        </Nav>
        <Form className="d-flex me-5">
          <Form.Control
            type="search"
            placeholder="What are you looking for?"
            className="me-1 formWrite"
            aria-label="Search"
          />
          <Button variant="outline-success"><FaSearch /></Button>
        </Form>
        <Nav.Link href="#action2" className='icons'><FaRegHeart /></Nav.Link>
        <Nav.Link href="#action2" className='icons'><FaCartShopping /></Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavScroll
import React from "react";
import Image from "next/image";
import style from '../styles/layout.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = (props) => {
  return (
  <div>
    <div className={style.navbar}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={'/whitclour.png'} width={200} height={50} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="/Home" className={style.navbutton}>Home</Nav.Link>
            <Nav.Link href="/Services" className={style.navbutton}>Services</Nav.Link>
            <Nav.Link href="/Gallery" className={style.navbutton}>Gallery</Nav.Link>
            <Nav.Link href="/About" className={style.navbutton}>About</Nav.Link>
            <Nav.Link href="/Contact" className={style.navbutton}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>


    <div>
{props.children}
    </div>

    <div>
      <footer>
        footer
      </footer>
    </div>
  </div>
  );
};

export default Layout;

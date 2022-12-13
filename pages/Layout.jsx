import React from "react";
import Image from "next/image";
import style from '../styles/layout.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
  <div>
    <div className={style.navbar}>
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src={'/whitclour.png'} width={200} height={50} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="/" className={style.navbutton}>Home</Nav.Link>
            <Nav.Link href="/chasicare-services" className={style.navbutton}>Services</Nav.Link>
            <Nav.Link href="/chasicare-biofloc-gallery" className={style.navbutton}>Gallery</Nav.Link>
            <Nav.Link href="/chasicare-about" className={style.navbutton}>About&nbsp;Us</Nav.Link>
            <Nav.Link href="/chasicare-contact-us" className={style.navbutton}>Contact</Nav.Link>
            <Nav.Link href="/chasicare-biofloc-faq" className={style.navbutton}>FAQ</Nav.Link>
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
        <Footer />
      </footer>
    </div>
  </div>
  );
};

export default Layout;

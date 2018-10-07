import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaTwitter, FaGoogle, FaFacebook } from 'react-icons/fa';


const Footer = () => (
  <Container fluid={true}>
    <Row className="page-footer">
      <Col>
        <h1>Connect With Us</h1>
    <p><FaTwitter/> <FaGoogle/> <FaFacebook /> </p>
        <p>
          Fusce iaculis nisi a arcu dapibus aliquam. Sed a vestibulum massa, id
          convallis mi. Cras eu libero eu sapien luctus faucibus sed vel sem.
          Cras at arcu eget lacus euismod vestibulum id pulvinar est. 
          <br />
          <br />
          Ut
          pellentesque id purus a vestibulum. Duis accumsan consectetur orci,
          quis tempus sem commodo in. Donec consequat tellus sed auctor
          fermentum.
        </p>
      </Col>
    </Row>
    <Row className="copyright">
        <Col>
        <p>© 2018 Copyright: Tasha Mitchell. All Rights Reserved. <a href="https://tamitchell.github.io/">Contact the Developer</a></p>
        </Col>
    </Row>
  </Container>
);

export default Footer;

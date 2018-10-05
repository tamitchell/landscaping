import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

const Hero = () => (
    <Container>
        <Row className="hero">
            <Col xs="12" l="12">
                <h1>Autumn is here</h1>
                <hr />
                <h5>Let us know how we can help</h5>
            </Col>
            <Col>
                <Button className="hero-btn">
                <img src={require('../img/flower-icon.png')} alt="Flower icon" />
                Maintaining a Garden</Button>
                <Button className="hero-btn">
                <img src={require('../img/shovel-pitchfork-icon.png')} alt="Shovel and Rake icon" />
                Cleaning the yard</Button>
                <Button className="hero-btn">
                <img src={require('../img/home-icon.png')} alt="Home icon" />
                Preparing for winter</Button>
            </Col>
        </Row>
    </Container>
)

export default Hero
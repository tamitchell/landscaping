import React from 'react'
import { Container, Row, Col, Button, Fade } from 'reactstrap';

const Hero = () => (
    <Container fluid={true}>
        <Row className="hero">
            <Col xs="12" l="12">
            <Fade in={true} tag="h1">
                    Autumn is here
                </Fade>                
                <hr />
                <Fade in={true} tag="h5" transitionAppearTimeout={200}>
                    Let us know how we can help with:
                </Fade>              </Col>
            <Col>
                <Button className="hero-btn">
                <img src={require('../img/flower-icon.png')} alt="Flower icon" />
                <br/>
                Maintaining a Garden</Button>
                <Button className="hero-btn">
                <img src={require('../img/shovel-pitchfork-icon.png')} alt="Shovel and Rake icon" />
                <br />
                Cleaning the yard</Button>
                <Button className="hero-btn">
                <img src={require('../img/home-icon.png')} alt="Home icon" />
                <br />
                Preparing for winter</Button>
            </Col>
        </Row>
    </Container>
)

export default Hero
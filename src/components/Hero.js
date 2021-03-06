import React from 'react'
import { Container, Row, Col, Button, Fade } from 'reactstrap';

const Hero = (props) => (
    <Container fluid={true}>
        <div className="hero">
            <Col xs="12" l="12">
            <Fade in={true} tag="h1">
            {props.title}
                </Fade>                
                <hr />
                <Fade in={true} tag="h5" transitionappeartimeout={200}>
                    Let us know how we can help with:
                </Fade>              </Col>
            <Col>
                <Button className="hero-btn">
                <img src={require('../img/flower-icon.png')} alt="Flower icon" />
                <br/>
               Gardening</Button>
                <Button className="hero-btn">
                <img src={require('../img/shovel-pitchfork-icon.png')} alt="Shovel and Rake icon" />
                <br />
                Yard</Button>
                <Button className="hero-btn">
                <img src={require('../img/home-icon.png')} alt="Home icon" />
                <br />
                Preparation</Button>
            </Col>
        </div>
    </Container>
)

export default Hero
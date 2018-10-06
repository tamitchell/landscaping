import React from 'react'
import { Container, Row, Col, Fade } from 'reactstrap';

const Works = () => (
    <Container fluid={true}>
        <Row className="works">
        <Col sm="12" lg="12">
        <Fade in={true} tag="h5" className="mt-3">
                    Some of Our Work
        </Fade>
        </Col>
        <Col>
        <img src={require('../img/home1.jpeg')} alt="Nice home with raked leaves" />
        <img src={require('../img/home3.jpeg')} alt="Nice home with raked leaves" />
        <img src={require('../img/home2.jpeg')} alt="Nice home with raked leaves" />
        </Col>
        </Row>
        <Row>
            
        </Row>
    </Container>
)

export default Works
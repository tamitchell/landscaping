import React from 'react'
import { Container, Row, Col, Fade, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Parallax, Background } from 'react-parallax';

const Contact = () => (
    <Container fluid={true}>
        <Parallax
        strength={400}>
        <Row className="contact">
        <Form>
        <Fade in={true} tag="h3" className="mt-3">
                    Interested?
        </Fade>
        <Fade in={true} tag="h4" className="mt-3">
                    Send us a message
        </Fade>
                <FormGroup>
                  <Label for="Name" sm={2}>
                    First Name, Last Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="name"
                      id="Name"
                      placeholder="First Name, Last Name"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="phonenumber" sm={2}>
                    Phone Number
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="123-456-7890"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="message" sm={2}>
                    Message
                  </Label>
                  <Col sm={8}>
                    <Input 
                    style={{
                      width: '100%',
                  }}
                    type="textarea" 
                    name="message" 
                    id="message"
                    placeholder="Place a message here" />
                  </Col>
                </FormGroup>
                <FormGroup check>
            <Button type="submit">Submit</Button>
        </FormGroup>
              </Form>
        </Row>
          <Background className="parallax">
            <img src={require('../img/man.jpeg')} />

          </Background>
        </Parallax>
        <Row className="phone-contact">
          <Col>
                  <h3>Or give us a call</h3>
          </Col>
          <Col>
                  <p>Your Name Here</p>
                  <a href="tel:555-555-5555">555-555-5555</a>
          </Col> 
          </Row>
          </Container>
)

export default Contact
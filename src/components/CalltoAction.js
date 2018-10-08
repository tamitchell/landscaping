import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class CalltoAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container fluid={true}>
        <Row className="call-to-action">
          <Col>
            <h2>
              Company Name. <br /> Real People. <br /> Real Service.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum consectetur massa non libero luctus, a ultrices quam
              hendrerit. Etiam maximus purus ac mauris cursus iaculis. In ornare
              diam non purus condimentum pretium. Aliquam placerat, ligula non
              tempor l uctus, mi diam imperdiet ante, vitae maximus orci quam
              finibus eros. Aenean in porta nibh.
            </p>
          <Button onClick={this.toggle}>
            Contact Us
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader className="modal-header" toggle={this.toggle}>Leave a message</ModalHeader>
            <ModalBody>
              <Form>
              <FormGroup row>
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
                <FormGroup row>
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
                <FormGroup row>
                  <Label for="message" sm={2}>
                    Message
                  </Label>
                  <Col sm={10}>
                    <Input 
                    type="textarea" 
                    name="text" 
                    id="message"
                    placeholder="Place a message here" />
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Submit
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
          </Col>
          <Col className="call-action-col-img" >
          {this.props.img}
          </Col>

        </Row>
      </Container>
    );
  }
}
// const CalltoAction = () => (
//   <Container>
// <Row className="call-to-action">
//   <Col>
//     <h2>
//       Company Name. <br /> Real People. <br /> Real Service.
//     </h2>
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
//       consectetur massa non libero luctus, a ultrices quam hendrerit. Etiam
//       maximus purus ac mauris cursus iaculis. In ornare diam non purus
//       condimentum pretium. Aliquam placerat, ligula non tempor l uctus, mi
//       diam imperdiet ante, vitae maximus orci quam finibus eros. Aenean in
//       porta nibh.
//     </p>
//   </Col>
// </Row>
//   </Container>
// );

export default CalltoAction;

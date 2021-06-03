import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
    Col, Row, Card, CardBody, ModalHeader, Modal, ModalFooter, ModalBody,
    CardTitle, Button, Form, FormGroup, Label, Input, Container
} from 'reactstrap';
import AppHeader from '../../Layout/AppHeader'

class Checkout extends React.Component {
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
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <AppHeader/>
                    <div className="app-main">
                        <div className="app-main__inner">
                            <Container fluid>
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Checkout</CardTitle>
                                        <Form>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="name">Recipient's Name</Label>
                                                        <Input type="text" name="name" id="name"
                                                               placeholder="name"/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="payment">Payment Method</Label>
                                                        <Input type="text" name="payment" id="payment"
                                                               placeholder="payment"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="address">Delivery Addres</Label>
                                                        <Input type="text" name="address" id="address"
                                                               placeholder="address"/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="totalPayment">Total Payment</Label>
                                                        <Input type="text" name="totalPayment" id="totalPayment"
                                                               placeholder="total"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="deliveryOptions">Delivery Options</Label>
                                                        <Input type="text" name="deliveryOptions" id="deliveryOptions"
                                                               placeholder="options"/>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="note">Note</Label>
                                                        <Input type="text" name="note" id="note"
                                                               placeholder="note"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Button color="primary" onClick={this.toggle} className="mt-2">Checkout</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Container>
                        </div>
                    </div>
                </CSSTransitionGroup>
                <span className="d-inline-block mb-2 mr-2">
        {/*<Button color="primary" onClick={this.toggle}>Custom Close Button</Button>*/}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Thanks for Your Order</ModalHeader>
          <ModalBody>
            SELAMAT PESANAN ANDA BERHASIL
          </ModalBody>
          <ModalFooter>
            <Button color="link" onClick={this.toggle}>Close</Button>
            <Button color="primary" onClick={this.toggle}>Done</Button>{' '}
          </ModalFooter>
        </Modal>
      </span>
            </Fragment>
        );

    }
}

export default Checkout;
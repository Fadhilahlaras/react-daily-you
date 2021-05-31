import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

// Examples

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container, CustomInput,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row
} from "reactstrap";


class Register extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        const dataInput = {
            id: this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            date: this.state.date,
            email: this.state.email,
            note:this.state.note,
            file: this.state.file
        }
        axios.post("http://localhost:1221/input", dataInput)
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <div className="app-main">
                        <div className="app-main__inner">
                            <Container fluid>
                                <Row>
                                    <Col md="12">
                                        <Card className="main-card mb-3">
                                            <CardBody>

                                                <Form>
                                                    <Row>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>First Name</Label>
                                                                <Input type="text" name="firstname" id="firstname"
                                                                       placeholder="First Name" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>Last Name</Label>
                                                                <Input type="text" name="lastname" id="lastname"
                                                                       placeholder="Last Name" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>Email</Label>
                                                                <Input type="email" name="email" id="email"
                                                                       placeholder="Email" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>Date</Label>
                                                                <Input type="date" name="date" id="date" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>

                                                    <FormGroup>
                                                        <Label>Note</Label>
                                                        <Input type="textarea" name="note" id="note" onChange={this.handleChange}/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Address Image</Label>
                                                        <Input type="text" name="file" id="file" onChange={this.handleChange}/>
                                                    </FormGroup>
                                                    <Button type="button" className="mt-1" onClick={this.onSubmit}>Submit</Button>
                                                </Form>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>);
    }
}

export default Register
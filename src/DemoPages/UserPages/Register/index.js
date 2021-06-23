import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

import AppHeader from "../../../Layout/AppHeader";

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
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            password: '',
            error: null,
            users: [],
            loading: false
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("users")
            const users = JSON.parse(json);
            if (users) {
                this.setState(() => ({ users }))
            }
        } catch (e) {
        }
    };

    componentDidUpdate(prevState, preProps) {
        if (preProps.users.length !== this.state.users.length) {
            const json = JSON.stringify(this.state.users);
            localStorage.setItem("users", json);
        }
    }

    handleOnchange = e => this.setState({ [e.target.name]: e.target.value });

    handleSignUp = event => {
        event.preventDefault()
        this.setState({ loading: true });
        const { firstName, lastName, address, email, password } = this.state;
        if (!firstName.length || !lastName.length || !address.length || !email.length || !password.length) {
            this.setState({ error: "Please Fill Out All The Details !! ", loading: false })
            return false;
        } else if (password.length < 8) {
            this.setState({ error: "Password Should Contain At Least 8 Charecters", loading: false })
            return false;
        } else {
            const regesterData = {
                firstName: firstName,
                lastName: lastName,
                address: address,
                email: email,
                password: password
            };


            this.setState({
                error: "",
                firstName: "",
                lastName: "",
                address: "",
                email: "",
                password: "",
                users: this.state.users.concat(regesterData)
            });
            setTimeout(() => {
                this.props.history.push("/login")
                this.setState({ loading: false })
            }, 2000)
        }
    };


    render() {

        const { firstName, lastName, address, email, password, error, loading } = this.state;


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
                                <Row>
                                    <Col md="12" className="h-100 d-flex bg-white justify-content-center align-items-center">
                                        <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                                            {/*<div className="app-logo"/>*/}
                                            <h4 className="mb-0">
                                                <div>Register</div>
                                                <span>Please sign up to create your account.</span>
                                            </h4>

                                            <Row className="divider"/>
                                            <div>
                                                <Form onSubmit={this.handleSignUp}>
                                                    <Row form>
                                                        <Col lg={12}>

                                                            <FormGroup>
                                                                <Label for="firstName">First Name</Label>
                                                                <input
                                                                    id="firstName"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="First Name"
                                                                    name="firstName"
                                                                    onChange={this.handleOnchange}
                                                                    value={firstName}
                                                                />
                                                            </FormGroup>

                                                            <FormGroup>
                                                                <Label for="lastName">Last Name</Label>
                                                                <input
                                                                    id="lastName"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Last Name"
                                                                    name="lastName"
                                                                    onChange={this.handleOnchange}
                                                                    value={lastName}
                                                                />
                                                            </FormGroup>

                                                            <FormGroup>
                                                                <Label for="address">Address</Label>
                                                                <input
                                                                    id="address"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Address"
                                                                    name="address"
                                                                    onChange={this.handleOnchange}
                                                                    value={address}
                                                                />
                                                            </FormGroup>


                                                            <FormGroup>
                                                                <Label for="email">Email</Label>
                                                                <input
                                                                    id="email"
                                                                    type="email"
                                                                    className="form-control"
                                                                    placeholder="Email"
                                                                    name="email"
                                                                    onChange={this.handleOnchange}
                                                                    value={email}
                                                                />
                                                            </FormGroup>

                                                            <FormGroup>
                                                                <Label for="examplePassword">Password</Label>
                                                                <input
                                                                    id="password"
                                                                    type="password"
                                                                    className="form-control"
                                                                    placeholder="password"
                                                                    name="password"
                                                                    autoComplete=''
                                                                    onChange={this.handleOnchange}
                                                                    value={password}
                                                                />
                                                            </FormGroup>


                                                        </Col>
                                                    </Row>
                                                    {/*<FormGroup check>*/}
                                                    {/*    <Input type="checkbox" name="check" id="exampleCheck"/>*/}
                                                    {/*    <Label for="exampleCheck" check>Keep me logged in</Label>*/}
                                                    {/*</FormGroup>*/}

                                                    <Row className="divider"/>
                                                    {/*<h6 className="mt-3">*/}
                                                    {/*    No account?{' '}*/}

                                                    {/*    /!*<a href="/login" onClick={(e)=>e.preventDefault()} className="text-primary">Sign up now</a>*!/*/}
                                                    {/*    /!*<Link to={"/login"} />*!/*/}

                                                    {/*    <Link to="/register" style={{textDecoration:"none"}}>Sign Up Here</Link>*/}

                                                    {/*</h6>*/}
                                                    {/*<div className="d-flex align-items-center">*/}
                                                    {/*    <div className="ml-auto">*/}
                                                    {/*        /!*<a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()} className="btn-lg btn btn-link">Recover*!/*/}
                                                    {/*        /!*    Password</a>{' '}{' '}*!/*/}
                                                    {/*        /!*<Button color="primary" size="lg">Login</Button>*!/*/}

                                                    {/*        <Link to="/home" style={{textDecoration: "none"}}>*/}
                                                    {/*            <Button className="mb-2 mr-2 btn-icon btn-pill" color="primary" size="lg">Login</Button>*/}
                                                    {/*        </Link>*/}




                                                    {/*    </div>*/}
                                                    {/*</div>*/}

                                                    <div className="text-center">
                                                        <button disabled={loading} className="btn btn-primary btn-block" >Sign Up</button>
                                                    </div>
                                                </Form>
                                                {error && <p className="text-danger mt-3 mb-2 text-center">{error}</p>}
                                            </div>
                                        </Col>
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
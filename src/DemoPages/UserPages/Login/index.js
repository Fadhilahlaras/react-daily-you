import React, {Fragment, Component} from "react";

import axios from "axios";

import Slider from "react-slick";

import bg1 from '../../../assets/utils/images/originals/city.jpg';
import bg2 from '../../../assets/utils/images/originals/citydark.jpg';
import bg3 from '../../../assets/utils/images/originals/citynights.jpg';

import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {}
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFileChange = (e) => {
        this.setState({[e.target.name]: e.target.files[0]})
    }

    onSubmit = (e) => {
        const formData = new FormData();
        const json = JSON.stringify({
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "date": this.state.date,
            "email": this.state.email,
            "note": this.state.note
        });
        const blobDoc = new Blob([json], {
            type: 'application/json'
        });

        formData.append('file', this.state.file)
        formData.append('data', blobDoc)

        const config = {
            headers: {
                'content-type': 'multipart/mixed'
            }
        }
        axios.post("http://localhost:1234/input/save", formData, config)
            .then(res => console.log(res.data))


    }

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            initialSlide: 0,
            autoplay: true,
            adaptiveHeight: true

        };
        return (

            <Fragment>
                <div className="h-100">
                    <Row className="h-100 no-gutters">
                        <Col lg="4" className="d-none d-lg-block">
                            <div className="slider-light">
                                <Slider  {...settings}>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                                        <div className="slide-img-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg1 + ')'
                                             }}/>
                                        <div className="slider-content">
                                            <h3>Perfect Balance</h3>
                                            <p>
                                                ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified React Boostrap Components and Elements.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                        <div className="slide-img-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg3 + ')'
                                             }}/>
                                        <div className="slider-content">
                                            <h3>Scalable, Modular, Consistent</h3>
                                            <p>
                                                Easily exclude the components you don't require. Lightweight, consistent
                                                Bootstrap based styles across all elements and components
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                                        <div className="slide-img-bg opacity-6"
                                             style={{
                                                 backgroundImage: 'url(' + bg2 + ')'
                                             }}/>
                                        <div className="slider-content">
                                            <h3>Complex, but lightweight</h3>
                                            <p>
                                                We've included a lot of components that cover almost all use cases for
                                                any type of application.
                                            </p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                        <Col lg="8" md="12" className="h-100 d-flex bg-white justify-content-center align-items-center">
                            <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                                <div className="app-logo"/>
                                <h4 className="mb-0">
                                    <div>Welcome back,</div>
                                    <span>Please sign in to your account.</span>
                                </h4>

                                <Row className="divider"/>
                                <div>
                                    <Form>
                                        <Row form>
                                            <Col md={6}>

                                                <FormGroup>
                                                    <Label for="name">Username</Label>
                                                    <Input type="text" name="name" id="name"
                                                           placeholder="Username here..."/>
                                                </FormGroup>

                                                <FormGroup>
                                                    <Label for="examplePassword">Password</Label>
                                                    <Input type="password" name="password" id="examplePassword"
                                                           placeholder="Password here..."/>
                                                </FormGroup>


                                            </Col>
                                        </Row>
                                        <FormGroup check>
                                            <Input type="checkbox" name="check" id="exampleCheck"/>
                                            <Label for="exampleCheck" check>Keep me logged in</Label>
                                        </FormGroup>

                                        <Row className="divider"/>
                                        <h6 className="mt-3">
                                            No account?{' '}

                                            {/*<a href="/login" onClick={(e)=>e.preventDefault()} className="text-primary">Sign up now</a>*/}
                                            {/*<Link to={"/login"} />*/}

                                            <Link to="/register" style={{textDecoration:"none"}}>Sign Up Here</Link>

                                        </h6>
                                        <div className="d-flex align-items-center">
                                            <div className="ml-auto">
                                                {/*<a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()} className="btn-lg btn btn-link">Recover*/}
                                                {/*    Password</a>{' '}{' '}*/}
                                                {/*<Button color="primary" size="lg">Login</Button>*/}

                                                <Link to="/home" style={{textDecoration: "none"}}>
                                                    <Button className="mb-2 mr-2 btn-icon btn-pill" color="primary" size="lg">Login</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default Login;

import React, {Fragment, Component, useState, useEffect} from "react";

import axios from "axios";

import Slider from "react-slick";

import bg1 from '../../../assets/utils/images/originals/city.jpg';
import bg2 from '../../../assets/utils/images/originals/citydark.jpg';
import bg3 from '../../../assets/utils/images/originals/citynights.jpg';

import {Col, Row, Button, Form, FormGroup, Label, Input, CardFooter, Card} from 'reactstrap';
import {Link} from "react-router-dom";
import AppHeader from "../../../Layout/AppHeader";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import pro1 from "../../../assets/utils/images/prodemy/prodemy4_1.jpg";
import pro2 from "../../../assets/utils/images/prodemy/prodemy4_7.jpg";
import pro3 from "../../../assets/utils/images/prodemy/prodemy4_12.jpg";

// import ModalHome from "../UserProfile";

import AlertKu from "../Alert";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username:"",
            password: "",
            error: null,
            users: null,
            errmessage:"",
            isAlert: false
        };

    }


    handleOnchange = e => this.setState({ [e.target.name]: e.target.value });

    handleSignUp = event => {
        event.preventDefault()

        this.setState({
            isAlert:false
        })

        const { username, password, users } = this.state;
        // if (!username.length || !password.length) {
        //     this.setState({ error: "Please Fill Out All The Details in Form !!!" })
        //     return false;
        // } else {
        //     users ? users.filter(user => {
        //         if (user.username !== username || user.password !== password) {
        //             this.setState({ error: "Invalid Creadetials" })
        //         } else {
        //             const json = JSON.stringify(user);
        //             localStorage.setItem("currentUser", json);
        //             this.props.history.push("/home");
        //             window.location.reload();
        //         }
        //     }) : this.setState({ error: "No User Found" })
        // }

        const param = new URLSearchParams()
        param.append("username", username)
        param.append("password", password)

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        console.log(param)
        axios.post("http://localhost:1717/auth/token",param, config)
            .then(res=> {
                localStorage.setItem("access_token", res.data.data.access_token)
                localStorage.setItem("username", username)
                this.props.history.push("/dashAdmin");
                window.location.reload();
            })
            .catch(err=>{
                this.setState({
                    errmessage:err.response.data.message,
                    isAlert:true
                })
            })
    };

    handleClear() {
        localStorage.clear()
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

        const { username, password, error } = this.state;

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
                    <div className="h-100">
                        <Row className="h-100 no-gutters">

                            <Col lg="8" md="12" className="h-100 d-flex bg-white justify-content-center align-items-center">
                                <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">

                                    <h4 className="mb-0">
                                        <div>Welcome back,</div>
                                        <span>Please sign in to your account.</span>
                                    </h4>

                                    <Row className="divider"/>
                                    <div>
                                        <Form onSubmit={this.handleSignUp}>
                                            <Row form>
                                                <Col md={6}>

                                                    <FormGroup>
                                                        <Label for="name">Username</Label>
                                                        <input
                                                            type="text"
                                                            id="username"
                                                            className="form-control"
                                                            placeholder="Username"
                                                            name="username"
                                                            onChange={this.handleOnchange}
                                                            value={username}
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


                                            <Row className="divider"/>
                                            <h6 className="mt-3">
                                                No account?{' '}

                                                {/*<a href="/login" onClick={(e)=>e.preventDefault()} className="text-primary">Sign up now</a>*/}
                                                {/*<Link to={"/login"} />*/}

                                                <Link to="/register" style={{textDecoration:"none"}}>Sign Up Here</Link>

                                            </h6>

                                            <AlertKu isAlert={this.state.isAlert}
                                                     alertMessage={this.state.errmessage}
                                            />


                                            {/*<div className="d-flex align-items-center">*/}
                                            {/*    <div className="ml-auto">*/}
                                            {/*        /!*<a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()} className="btn-lg btn btn-link">Recover*!/*/}
                                            {/*        /!*    Password</a>{' '}{' '}*!/*/}
                                            {/*        /!*<Button color="primary" size="lg">Login</Button>*!/*/}
                                            {/*        */}
                                            {/*            <Button className="mb-2 mr-2 btn-icon btn-pill" color="primary" size="lg">Login</Button>*/}

                                            {/*        </div>*/}
                                            {/*</div>*/}

                                            <div className="text-center">
                                                <button className="btn btn-primary btn-block">Sign In</button>
                                            </div>
                                        </Form>
                                        {error && <p className="text-danger mt-3 mb-2 text-center">{error}</p>}
                                    </div>


                                </Col>
                            </Col>
                            <Col lg="4" className="d-none d-lg-block">
                                <div className="slider-light">
                                    <Slider  {...settings}>
                                        {/*<div*/}
                                        {/*    className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">*/}
                                        {/*    <div className="slide-img-bg"*/}
                                        {/*         style={{*/}
                                        {/*             backgroundImage: 'url(' + bg3 + ')'*/}
                                        {/*         }}/>*/}
                                        {/*    <div className="slider-content">*/}
                                        {/*        <h3>Scalable, Modular, Consistent</h3>*/}
                                        {/*        <p>*/}
                                        {/*            Easily exclude the components you don't require. Lightweight,*/}
                                        {/*            consistent*/}
                                        {/*            Bootstrap based styles across all elements and components*/}
                                        {/*        </p>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                                            <div className="slide-img-bg"
                                                 style={{
                                                     backgroundImage: 'url(' + pro1 + ')'
                                                 }}/>
                                            <div className="slider-content">
                                                <h3>Perfect Bright</h3>
                                                <p>
                                                    Daily You is like a dream. This product can help you to brighten your face and clean your face optimally from dust, dirt, and remaining makeup.
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                            <div className="slide-img-bg"
                                                 style={{
                                                     backgroundImage: 'url(' + pro2 + ')'
                                                 }}/>
                                            <div className="slider-content">
                                                <h3>Nature Daily</h3>
                                                <p>
                                                    Contains natural Aloe vera which provides extra moisture with a soothing effect and cools dry and reddened skin due to the sun.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                                            <div className="slide-img-bg opacity-6"
                                                 style={{
                                                     backgroundImage: 'url(' + pro3 + ')'
                                                 }}/>
                                            <div className="slider-content">
                                                <h3>C Defense</h3>
                                                <p>
                                                    Free radicals can damage the skin. Starting from making it dry, dull, accelerate aging to acne. For that you need anti-oxidant skincare that can win free radicals so that your skin is healthy and glowing.
                                                </p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>

                            </Col>
                        </Row>
                    </div>

                    {/*<ModalHome toggle={this.toggle} modal={this.state.modal} />*/}
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}

export default Login;

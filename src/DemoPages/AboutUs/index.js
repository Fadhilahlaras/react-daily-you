import React, {Fragment} from 'react';
import Slider from "react-slick";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


import bg3 from '../../assets/utils/images/sidebar/abstract4.jpg';

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
import AppHeader from "../../Layout/AppHeader";
import AppFooter from "../../Layout/AppFooter";


class About extends React.Component {


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
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <AppHeader/>

                    <div className="app-main">
                        {/*<div className="app-main__inner">*/}
                <div className="h-100">
                    <Row className="h-100 no-gutters">
                        <Col lg="5" className="d-lg-flex d-xs-none">
                            <div className="slider-light">
                                <Slider  {...settings}>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                        <div className="slide-img-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg3 + ')'
                                             }}/>
                                        <div className="slider-content">
                                            <h3>Scalable, Modular, Consistent</h3>
                                            <p>
                                                Easily exclude the components you don't require. Lightweight,
                                                consistent
                                                Bootstrap based styles across all elements and components
                                            </p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                        <Col lg="7" md="12"
                             className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center">
                            <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                                <h4>
                                    <div>Welcome to this company,</div>
                                    <span>It only takes a <span className="text-success">few seconds</span> to create your account</span>
                                </h4>
                                <div>

                                </div>
                            </Col>
                        </Col>

                    </Row>
                </div>
                        {/*</div>*/}
                        <AppFooter/>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}

export default About
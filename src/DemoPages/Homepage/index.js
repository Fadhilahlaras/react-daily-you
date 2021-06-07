import React,{Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../Layout/AppHeader/";
import AppFooter from "../../Layout/AppFooter";

import {Row, Container, Col, Card, CardBody} from "reactstrap";

// import CardNya from "./CardIsi";
import CardSlide from "./CardSlide";
import axios from "axios";
import Slider from "react-slick";
import bg1 from "../../assets/utils/images/originals/city.jpg";
import bg3 from "../../assets/utils/images/originals/citynights.jpg";
import bg2 from "../../assets/utils/images/originals/citydark.jpg";

const Homepage = () => {

    return(
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
                            <Row>
                                <Col md="12">
                                    {/*<Card className="main-card mb-5">*/}
                                        <CardBody>
                                            <div
                                                className="p-5 bg-plum-plate">
                                                <div className="slide-img-bg"
                                                     style={{
                                                         backgroundImage: 'url(' + bg1 + ')'
                                                     }}/>
                                                <div className="slider-content" style={{
                                                    color: "white"
                                                }}>
                                                    <h3>Daily You</h3>
                                                    <p>
                                                        Daily You is like a dream. Some think it's too good to be true! .
                                                    </p>
                                                </div>
                                            </div>
                                            {/*<CardSlide/>*/}
                                        </CardBody>
                                    {/*</Card>*/}
                                </Col>
                            </Row>
                        </div>

                    <AppFooter/>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}
export default Homepage;
